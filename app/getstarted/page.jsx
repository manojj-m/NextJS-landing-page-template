"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
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
import {Dropdown, DropdownMenu, DropdownItem, Button} from "@nextui-org/dropdown";



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
    }
  };

  const router = useRouter();
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [isLoadingResponses, setIsLoadingResponses] = useState(false);
  const [questionUUIDs, setQuestionUUIDs] = useState([]);
  const [responseUUIDs, setResponseUUIDs] = useState([]);
  const [questionsUploaded, setQuestionsUploaded] = useState(false);
  const [responsesUploaded, setResponsesUploaded] = useState(false);  
  const [isApiCalled, setIsApiCalled] = useState(false); // State to manage UI visibility
  const [score_data, setScoreData] = useState([]);
  const [type_data, setTypeData] = useState([]);
  const [question_data, setQuestionData] = useState([])


  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  const uploadFiles = async (files, bucketName, setIsLoading) => {
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

    function getFileExtension(filename) {
      return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
    }

  const handleQuestionUpload = async (e) => {
    e.preventDefault();
    const files = e.target.elements.questionInput.files;
    const question_uuids = await uploadFiles(files, 'QuestionSheets', setIsLoadingQuestions);
    setQuestionUUIDs(question_uuids);
    setQuestionsUploaded(true);
    console.log('UUIDs for Questions:', question_uuids); // Log or handle the UUIDs
  };

  const handleResponseUpload = async (e) => {
    e.preventDefault();
    const files = e.target.elements.responseInput.files;
    const response_uuids = await uploadFiles(files, 'StudentResponses', setIsLoadingResponses);
    setResponseUUIDs(response_uuids);
    setResponsesUploaded(true);
    console.log('UUIDs for Responses:', response_uuids); // Log or handle the UUIDs
  };

  useEffect(() => {

    const callTestingAPI = async (questionUUIDs, responseUUIDs) => {
      setIsApiCalled(true); // Hide upload buttons and forms
      try {
  
        const response = await axios.get('api-ashy-tau.vercel.app/testing', {
          params: {
            file_names: questionUUIDs,
            responses: responseUUIDs,
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


  const paramsSerializer = (params) => {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach(key => {
      if (Array.isArray(params[key])) {
        params[key].forEach(val => searchParams.append(key, val));
      } else {
        searchParams.append(key, params[key]);
      }
    });
    return searchParams.toString();
  };

  // useEffect(() => {
  // const callTestingAPI = async (questionUUIDs, responseUUIDs) => {
  //   setIsApiCalled(true); // Hide upload buttons and forms
  //   try {

  //     const response = await axios.get('https://api-ashy-tau.vercel.app/testing', {
  //       params: {
  //         file_names: questionUUIDs,
  //         responses: responseUUIDs,
  //       },
  //       paramsSerializer: paramsSerializer  // Use custom serializer
  //   });
  //   setScoreData(response.data.radar_topic_scores_fin);
  //   setTypeData(response.data.radar_type_scores);

  //   } catch (error) {
  //     console.error('Error calling API:', error);
  //   }
  // };
  // }, []);

  return (
    <div style={{ height: '500px' }}>
    <>
      <Navbar />
      {/* <div className="w-full text-center bg-blue-500 py-2 text-lg text-white font-medium">Launching 1 September 2024</div> */}

      {score_data.length > 0 && type_data.length > 0 && question_data.length ? (

         <>
    <ResponsiveRadar
        data={score_data}
        keys={[ 'weaker', 'weak', 'okay', 'strong', 'stronger' ]}
        indexBy="label"
        maxValue={100}
        valueFormat=" >-.0f"
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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

    <div>
      {score_data.map((entry, index) => (
        <div key={index} style={styles.card}>
          <p><strong>{entry.label}:</strong> {entry.LO}</p>
        </div>
      ))}
    </div>


    <ResponsiveRadar
        data={type_data}
        keys={[ 'mark' ]}
        indexBy="type"
        maxValue={5}
        valueFormat=" >-.2f"
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
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

     {/* Rendering Cards for Each Element in question_data */}
     <div>
              {question_data.map((question, index) => (
              <section  key={index} className="flex flex-col mt-12 w-full max-w-4xl mx-auto lg:mt-20">
                <div style={styles.question_card}>
                  <div className="flex flex-col items-center justify-between gap-6 p-8 w-full bg-white  rounded-xl md:flex-row">
                <div className="flex flex-col items-start justify-center flex-1">
                  <div className="text-3xl font-bold md:text-3xl">Question {index + 1} Score : {question.marks.completeness + question.marks.correctness + question.marks.clarity} / 15</div>
                  <div className="text-base text-left pt-5 text-gray-900 max-w-prose" >
                    Mark Breakdown 
                    Correctness   
                    {question.marks.correctness}/5 - {question.feedback.correctness}
                    Completeness   
                    {question.marks.completeness}/5 - {question.feedback.completeness}
                    Clarity   
                    {question.marks.clarity}/5 - {question.feedback.clarity}
                  </div>
                </div>
                </div>
                </div>
              </section>


              ))}
      </div>


    </>

      ) : (
        <div>
        <p> Upload your files here :  </p>

        <Link
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              href="/getstarted/feedback"
            >
              Sign in
        </Link>

        <br></br>

        <form onSubmit={handleQuestionUpload}>
        <p>Upload the question sheets:</p>
        <input
          type="file"
          multiple
          name="questionInput"
          onChange={(e) => console.log(e.target.files.length + ' files selected for questions')}
        />
        <button type="submit" disabled={isLoadingQuestions}>
          {isLoadingQuestions ? 'Uploading Questions...' : 'Upload Questions'}
        </button>
      </form>

      <br></br>

      <form onSubmit={handleResponseUpload}>
        <p>Upload the student's response (can be handwritten or typed):</p>
        <input
          type="file"
          multiple
          name="responseInput"
          onChange={(e) => console.log(e.target.files.length + ' files selected for responses')}
        />
        <button type="submit" disabled={isLoadingResponses}>
          {isLoadingResponses ? 'Uploading Responses...' : 'Upload Responses'}
        </button>
      </form>


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


    </div>
  )}

      <br></br>

      <Footer />
      </>
      </div>
  );
}
