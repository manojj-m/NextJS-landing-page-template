"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
// import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { createClient } from '@supabase/supabase-js';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; 
import { ResponsiveRadar } from '@nivo/radar';
import axios from 'axios';
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdAddchart } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Card, Space } from "antd";
import 'katex/dist/katex.min.css';



export default function Home() {



  const styles = {
    card: {
      border: '1px solid #ddd',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '4px'
    },

    question_card: {
      padding: '10px',
      marginBottom: '10px',
    }, 
    
    feedback_card: {
      padding: '10px',
      marginTop: '10px', 
      marginBottom: '10px',
    }
  };

  const router = useRouter();
  const [isLoadingQuestions, setIsLoadingQuestions] = useState<boolean>(false);
  const [isLoadingResponses, setIsLoadingResponses] = useState<boolean>(false);
  const [questionUUIDs, setQuestionUUIDs] = useState<string[]>([]);
  const [responseUUIDs, setResponseUUIDs] = useState<string[]>([]);
  const [questionsUploaded, setQuestionsUploaded] = useState<boolean>(false);
  const [responsesUploaded, setResponsesUploaded] = useState<boolean>(false);  
  const [isApiCalled, setIsApiCalled] = useState<boolean>(false); // State to manage UI visibility
  const [score_data, setScoreData] = useState<any[]>([]);
  const [type_data, setTypeData] = useState<any[]>([]);
  const [question_data, setQuestionData] = useState<any[]>([])
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
  const [year, setYear] = useState<string>("1")


  const handleYearChange = (event: any) => {
    setYear(event.target.value);
  };

  const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey,
  );

  const uploadFiles = async (files: any, bucketName: string, setIsLoading: any) => {
    setIsLoading(true); // Start loading

    // Process all files
    const uploads = [];
    const uuids = [];
    for (let file of files) {
      const uniqueId = uuidv4(); 
      const newFileName = `${uniqueId}${getFileExtension(file.name)}`;
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(newFileName, file, {
          upsert: true
        });

      if (error) {
        console.error('Error uploading file:', error.message);
      } else {
        uploads.push(data);
        uuids.push(newFileName); 
      }
    }
      setIsLoading(false); // Stop loading after all files are processed
      return uuids;
    };

    function getFileExtension(filename: string) {
      return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
    }

  const handleQuestionUpload = async (e: any) => {
    e.preventDefault();
    const files = e.target.elements.questionInput.files;
    const question_uuids = await uploadFiles(files, 'QuestionSheets', setIsLoadingQuestions);
    setQuestionUUIDs(question_uuids);
    setQuestionsUploaded(true);
    console.log('UUIDs for Questions:', question_uuids); // Log or handle the UUIDs
  };

  const handleResponseUpload = async (e: any) => {
    e.preventDefault();
    const files = e.target.elements.responseInput.files;
    const response_uuids = await uploadFiles(files, 'StudentResponses', setIsLoadingResponses);
    setResponseUUIDs(response_uuids);
    setResponsesUploaded(true);
    console.log('UUIDs for Responses:', response_uuids); // Log or handle the UUIDs
  };

  useEffect(() => {

    const callTestingAPI = async (questionUUIDs: any, responseUUIDs: any) => {
      setIsApiCalled(true); // Hide upload buttons and forms
      try {

  //http://127.0.0.1:8000/testing 
  //https://api-ashy-tau.vercel.app/mark
        const response = await axios.get("https://api-ashy-tau.vercel.app/mark", {
          params: {
            file_names: questionUUIDs,
            responses: responseUUIDs,
            year: year,
          },
          paramsSerializer: paramsSerializer  // Use custom serializer
      });
      console.log(response)
      setScoreData(response.data.radar_topic_scores_fin);
      setTypeData(response.data.radar_type_scores);
      setQuestionData(response.data.ai_feedback); 
  
      } catch (error) {
        console.error('Error calling API:', error);
      }
    };

    if (questionsUploaded && responsesUploaded) {
      // If both uploads are complete, make the API call
      callTestingAPI(questionUUIDs, responseUUIDs);
    }

  }, [questionsUploaded, responsesUploaded]);

  type Params = {
    [key: string]: string | string[];
  };

  const paramsSerializer = (params: Params) => {
    const searchParams = new URLSearchParams();

    Object.keys(params).forEach(key => {
      const value = params[key];
      if (Array.isArray(value)) {
        value.forEach(val => searchParams.append(key, val));
      } else {
        searchParams.append(key, value);
      }
    });

    return searchParams.toString();
  };

  return (
    <div style={{ height: '500px' }}>
    <>
      <Navbar />
      {isApiCalled && score_data.length === 0 && type_data.length === 0 && question_data.length === 0 ? (
          // Display loading message while API is being called and data is not yet loaded
          <div className="flex justify-center items-center mt-12 w-full max-w-4xl mx-auto">
            <p className="text-xl font-bold">Loading, please wait...</p>
          </div>
    ) : score_data.length > 0 && type_data.length > 0 && question_data.length > 0 ? (

  <>

    {/* Instructions */}
    <section className="flex flex-col mt-12 w-full max-w-4xl mx-auto lg:mt-20">
          <div className="flex flex-col items-center justify-between gap-6 p-8 w-full bg-white border rounded-xl md:flex-row">
            <div className="flex flex-col items-start justify-center flex-1">
              <div className="text-3xl font-bold md:text-xl">About the Feedback</div>
              <div className="text-base text-left pt-4 text-gray-900" >
                The feedback is split into several sections  
                <p>1. A radar graph displaying the marks attained for each topic in the assignments. The topics are from the national curriculum. </p> 
                <p>2. A colour coded list of topics in ascending order of marks attained</p> 
                <p>3. A radar graph displaying the average percentage attained for each type of mark. These mark types are based on the marking rubric used which can be found at the bottom of this page.</p>
                <p>4. A mark breakdown for each question with detailed feedback</p>
              </div>
            </div>
          </div>
        </section>

    <div className="text-xl text-zinc-700  lg:mt-12 lg:text-xl text-center justify-center">
      Marks Attained (%) per Topic
    </div>

    <ResponsiveRadar
        data={score_data}
        keys={[ 'weaker', 'weak', 'okay', 'strong', 'stronger' ]}
        indexBy="label"
        maxValue={100}
        valueFormat=" >-.0f"
        margin={{ top: 100, right: 50, bottom: 50, left: 50 }}
        borderWidth={0}
        borderColor={{ from: 'color', modifiers: [] }}
        gridLevels={10}
        gridShape="linear"
        gridLabelOffset={20}
        dotSize={2}
        dotColor={{ from: 'color', modifiers: [] }}
        dotBorderWidth={1}
        enableDotLabel={true}
        dotLabelYOffset={-2}
        colors={{ scheme: 'set2' }}
        fillOpacity={1}
        motionConfig="default"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 0,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />

    <div className="text-xl text-zinc-700  lg:mt-12 lg:text-xl text-center justify-center">
      Topic Descriptions
    </div>
    <div>
      {score_data.map((entry, index) => (
        <section key={index} className="flex flex-col mt-12 w-full max-w-4xl mx-auto lg:mt-2">
        <div style={styles.question_card}>
          <div className={`flex flex-col items-center justify-between gap-6 p-6 w-full rounded-xl md:flex-row ${
                              entry.score >= 80 
                                ? 'bg-green-100': 
                              entry.score >= 60
                              ? 'bg-lime-100': 
                              entry.score >= 40
                              ? 'bg-yellow-100': 
                              entry.score >= 20
                              ? 'bg-orange-100': 
                              'bg-red-100'
                            }`}>
          <p><strong>{entry.label}:</strong> {entry.LO}</p>
        </div>
        </div>
        </section>
      ))}
    </div>

    <div className="text-xl text-zinc-700  lg:mt-12 lg:text-xl text-center justify-center">
      Marks Attained (%) by Mark Type
    </div>
    <ResponsiveRadar
        data={type_data}
        keys={[ 'mark' ]}
        indexBy="type"
        maxValue={100}
        valueFormat=" >-.2f"
        margin={{ top: 80, right: 50, bottom: 50, left: 50 }}
        borderWidth={0}
        borderColor={{ from: 'color', modifiers: [] }}
        gridLevels={10}
        gridShape="linear"
        gridLabelOffset={20}
        dotSize={2}
        dotColor={{ from: 'color', modifiers: [] }}
        dotBorderWidth={1}
        enableDotLabel={true}
        dotLabelYOffset={3}
        colors={{ scheme: 'set2' }}
        fillOpacity={1}
        motionConfig="default"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 0,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />

    <div className="text-xl text-zinc-700  lg:mt-12 lg:text-xl text-center justify-center">
      Question Breakdown
    </div>
     {/* Rendering Cards for Each Element in question_data */}
     <div>
              {question_data.map((question, index) => (

                <section key={index} className="flex flex-col mt-12 w-full max-w-4xl mx-auto lg:mt-4">
                <div style={styles.question_card}>
                  <div className="flex flex-col items-center justify-between gap-6 p-8 w-full bg-white rounded-xl md:flex-row">
                    <div className="flex flex-col items-start justify-center flex-1">
                      {/* Determine the score dynamically */}
                      <div
                        className={`text-3xl font-bold md:text-2xl flex justify-between w-full ${
                          question.marks.completeness + question.marks.correctness + question.marks.clarity >= 12 ? 'text-green-500' : question.marks.completeness + question.marks.correctness + question.marks.clarity >= 9 ? 'text-lime-400' : question.marks.completeness + question.marks.correctness + question.marks.clarity >= 6 ? 'text-yellow-400' : question.marks.completeness + question.marks.correctness + question.marks.clarity >= 3 ? 'text-orange-600' :'text-red-500'
                        }`}
                      >
                        <div className="flex-1 text-black">
                          Question {index + 1}
                        </div>
                        <div className="flex-none text-right"> {/* Ensure the score text is pushed to the right */}
                          Score: {question.marks.completeness + question.marks.correctness + question.marks.clarity} / 15
                        </div>

                      </div>
                      
                      <div className="text-base text-left pt-5 text-gray-900 max-w-prose">
                        <div className="font-semibold text-xl">Mark Breakdown</div>

                        <div className={`p-4 rounded-lg my-4`}>
                          <div className="font-semibold">{question.question}</div>
                        </div>

                        <div className={`p-4 rounded-lg my-4 ${
                              question.marks.correctness === 5
                                ? 'bg-green-100': 
                              question.marks.correctness === 4
                              ? 'bg-lime-100': 
                              question.marks.correctness === 3
                              ? 'bg-yellow-100': 
                              question.marks.correctness === 2
                              ? 'bg-orange-100': 
                              'bg-red-100'
                            }`}>
                            <div className="font-semibold"> Correctness : {question.marks.correctness}/5</div>
                          <div className="text-gray-700">{question.feedback.correctness}</div>
                        </div>

                        {/* <LatexRenderer content={ String.raw`${question.response}`} isBlock={true}/> */}

                        <div className={`p-4 rounded-lg my-4 ${
                              question.marks.completeness === 5
                                ? 'bg-green-100': 
                              question.marks.completeness === 4
                              ? 'bg-lime-100': 
                              question.marks.completeness === 3
                              ? 'bg-yellow-100': 
                              question.marks.completeness === 2
                              ? 'bg-orange-100': 
                              'bg-red-100'
                            }`}>
                          <div className="font-semibold">Completeness : {question.marks.completeness}/5</div>
                          <div className="text-gray-700">{question.feedback.completeness}</div>
                        </div>

                        <div className={`p-4 rounded-lg my-4 ${
                              question.marks.clarity === 5
                                ? 'bg-green-100': 
                              question.marks.clarity === 4
                              ? 'bg-lime-100': 
                              question.marks.clarity === 3
                              ? 'bg-yellow-100': 
                              question.marks.clarity === 2
                              ? 'bg-orange-100': 
                              'bg-red-100'
                            }`}>
                          <div className="font-semibold"> Clarity : {question.marks.clarity}/5 </div>
                          <div className="text-gray-700">{question.feedback.clarity}</div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </section>

              
              )
              
              )}

        <section className="flex flex-col mt-12 w-full max-w-4xl mx-auto lg:mt-20">
          <div className="flex flex-col items-center justify-between gap-6 p-8 w-full bg-white border rounded-xl md:flex-row">
            <div className="flex flex-col items-start justify-center flex-1">
              <div className="text-3xl font-bold md:text-xl">About the Rubric</div>
              <div className="text-base text-left pt-4 text-gray-900" >
                Below is the marking criteria used to award each type of mark. 

                <div className="font-semibold mt-4">Correctness : </div>
                <p> 5 - The answer is completely correct, with all calculations accurate.</p> 
                <p> 4 - The answer is mostly correct with minor errors that do not significantly affect the final outcome.</p>
                <p> 3 - The answer shows a general understanding but contains significant errors in the calculations.</p>
                <p> 2 - The answer is mostly incorrect, but there are some elements of correctness.</p>
                <p> 1 - The answer is largely incorrect with minimal understanding shown.</p>
                <p> 0 - The answer is entirely incorrect or not attempted.</p>

                <div className="font-semibold mt-4">Completeness : </div>
                <p> 5 - All steps are shown, with thorough and complete working. No steps are missing.</p> 
                <p> 4 - Most steps are shown, but one or two minor steps may be missing.</p>
                <p> 3 - Some steps are missing, but the general approach is evident.</p>
                <p> 2 - Many steps are missing, making it difficult to understand the approach.</p>
                <p> 1 - The working is minimal, with most steps missing or incorrect.</p>
                <p> 0 - No working out was provided, or the working out is irrelevant.</p>

                <div className="font-semibold mt-4">Clarity : </div>
                <p> 5 - The student's working is very clear, logically presented, and easy to follow.</p> 
                <p> 4 - The working is mostly clear with minor lapses in communication..</p>
                <p> 3 - The working is somewhat clear but could be better organized or explained.</p>
                <p> 2 - The working is unclear and difficult to follow.</p>
                <p> 1 - The working is very unclear with little logical progression.</p>
                <p> 0 - No working or explanation provided, or it is entirely unclear.</p>

              </div>
            </div>
          </div>
        </section>


      </div>
    </>
      ) : (
        <div>
    {!isApiCalled && (
      <>
      {/* Instructions */}
      <section className="flex flex-col mt-12 w-full max-w-4xl mx-auto lg:mt-20">
          <div className="flex flex-col items-center justify-between gap-6 p-8 w-full bg-white border rounded-xl md:flex-row">
            <div className="flex flex-col items-start justify-center flex-1">
              <div className="text-3xl font-bold md:text-2xl">About the Tool</div>
              <div className="text-base text-left pt-4 text-gray-900" >
                You can immediately generate feedback for a student's maths assignments using our tool. 
                <p>First, select the student's year group. The assignment feedback will evaluate the student's performance on the topics from the national curriculum that are tested in the assignment.</p> 
                <p>Secondly, select the question sheet containing the questions that you would like to mark responses for. Once you have selected the sheet, press 'Upload Questions' to upload the file.</p> 
                <p>Next, select the student's response to this question that you would to mark. Once you have selected this response, press 'Upload Responses' to upload the file</p> 
                <p>Both the question sheet and the student's response can be handwritten or typed. We accept pdf, jpg/jpeg, png and docx formats.</p>
                <p>Once you have uploaded both a question sheet and a student's response, we will generate feedback for the student's response to the question sheet. Once the feedback is ready, it will be displayed on this page.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Upload section */}
        <section className="flex flex-col mt-12 w-full max-w-4xl mx-auto lg:mt-20">
          <div className="flex flex-col items-center justify-between gap-6 p-8 w-full bg-white border rounded-xl md:flex-row">
            <div className="flex flex-col items-start justify-center flex-1">
              <div className="text-3xl font-bold md:text-2xl">Upload Files</div>
              <div className="text-base text-left pt-5 text-gray-900" >
                
              <div className="lg:mt-2 mb-2 font-bold">Select the student's year group</div>
                <label>
                  <select id="dropdown" value={year} onChange={handleYearChange}>
                  <option value="1">Year 1</option>
                  <option value="2">Year 2</option>
                  <option value="3">Year 3</option>
                  <option value="4">Year 4</option>
                  <option value="5">Year 5</option>
                  <option value="6">Year 6</option>
                </select>
                </label>

                <form onSubmit={handleQuestionUpload}>
                <div className="lg:mt-6 mb-2 font-bold">Upload question sheets</div>
                <input
                    type="file"
                    multiple
                    name="questionInput"
                    onChange={(e) => {
                      if (e.target.files) {
                        console.log(e.target.files.length + ' files selected for questions');
                      }
                  }}
                  />
                  <button type="submit" disabled={isLoadingQuestions}  className={buttonVariants({
                size: "sm",
              })}>
                    {isLoadingQuestions ? 'Uploading Questions...' : 'Upload Questions'}
                  </button>
                </form>

                <form onSubmit={handleResponseUpload}>
                <div className="lg:mt-6 mb-2 font-bold">Upload student's response</div>
                  <input
                    type="file"
                    multiple
                    name="responseInput"
                    onChange={(e) => {
                      if (e.target.files) {
                        console.log(e.target.files.length + ' files selected for responses');
                      }
                  }}
                  />
                  <button type="submit" disabled={isLoadingResponses}  className={buttonVariants({
                size: "sm"
              })}>
                    {isLoadingResponses ? 'Uploading Responses...' : 'Upload Responses'}
                  </button>
                </form>

              </div>
            </div>
          </div>
        </section>
        {/* <Dropdown>
          <Button 
            variant="bordered">
            Select Year Group
          </Button>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="Reception">Reception</DropdownItem>
          <DropdownItem key="Year 1">Year 1</DropdownItem>
          <DropdownItem key="Year 2">Year 2</DropdownItem>
          <DropdownItem key="Year 3">Year 3</DropdownItem>
          <DropdownItem key="Year 4">Year 4</DropdownItem>
          <DropdownItem key="Year 5">Year 5</DropdownItem>
          <DropdownItem key="Year 6">Year 6</DropdownItem>
        </DropdownMenu>
        </Dropdown> */}
        </>
    )}
    </div>
  )}
      <Footer />
      </>
      </div>
  );
}
