// "use client";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import { buttonVariants } from "@/components/ui/button";
// import { Card, CardDescription, CardTitle } from "@/components/ui/card";
// import { createClient } from '@supabase/supabase-js';
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from 'uuid'; 

// import Link from "next/link";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import { MdOutlineFileUpload } from "react-icons/md";
// import { MdAddchart } from "react-icons/md";
// import { MdOutlineMarkEmailRead } from "react-icons/md";

// export default function Home() {

//   const router = useRouter();
//   const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
//   const [isLoadingResponses, setIsLoadingResponses] = useState(false);
//   const [questionUUIDs, setQuestionUUIDs] = useState([]);
//   const [responseUUIDs, setResponseUUIDs] = useState([]);
//   const [questionsUploaded, setQuestionsUploaded] = useState(false);
//   const [responsesUploaded, setResponsesUploaded] = useState(false);
//   const [apiOutput, setApiOutput] = useState(null); // State for API output
//   const [isApiCalled, setIsApiCalled] = useState(false); // State to manage UI visibility

//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//   );

//   const uploadFiles = async (files, bucketName, setIsLoading) => {
//     setIsLoading(true); // Start loading

//     // Process all files
//     const uploads = [];
//     const uuids = [];
//     for (let file of files) {
//       const uniqueId = uuidv4(); 
//       const newFileName = `${uniqueId}${getFileExtension(file.name)}`;
//       const { data, error } = await supabase.storage
//         .from(bucketName)
//         .upload(newFileName, file, {
//           upsert: true
//         });

//       if (error) {
//         console.error('Error uploading file:', error.message);
//       } else {
//         uploads.push(data);
//         uuids.push(newFileName); 
//       }
//     }
//     setIsLoading(false); // Stop loading after all files are processed
//     return uuids;
//   };

//   function getFileExtension(filename) {
//     return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
//   }

//   const handleQuestionUpload = async (e) => {
//     e.preventDefault();
//     const files = e.target.elements.questionInput.files;
//     const question_uuids = await uploadFiles(files, 'QuestionSheets', setIsLoadingQuestions);
//     setQuestionUUIDs(question_uuids);
//     setQuestionsUploaded(true);
//     console.log('UUIDs for Questions:', question_uuids); // Log or handle the UUIDs
//   };

//   const handleResponseUpload = async (e) => {
//     e.preventDefault();
//     const files = e.target.elements.responseInput.files;
//     const response_uuids = await uploadFiles(files, 'StudentResponses', setIsLoadingResponses);
//     setResponseUUIDs(response_uuids);
//     setResponsesUploaded(true);
//     console.log('UUIDs for Responses:', response_uuids); // Log or handle the UUIDs
//   };

//   useEffect(() => {
//     if (questionsUploaded && responsesUploaded) {
//       // If both uploads are complete, make the API call
//       callTestingAPI(questionUUIDs, responseUUIDs);
//     }
//   }, [questionsUploaded, responsesUploaded]);

//   const callTestingAPI = async (questionUUIDs, responseUUIDs) => {
//     setIsApiCalled(true); // Hide upload buttons and forms
//     try {
//       const response = await fetch('/testing?' + new URLSearchParams({
//         file_names: questionUUIDs,
//         responses: responseUUIDs
//       }), {
//         method: 'GET'
//       });

//       const apiOutput = await response.json();
//       setApiOutput(apiOutput); // Store the API output in state
//       console.log('API Output:', apiOutput);
//       // Handle the API response here

//     } catch (error) {
//       console.error('Error calling API:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="w-full text-center bg-blue-500 py-2 text-lg text-white font-medium">Launching 1 September 2024</div>

//       {isApiCalled ? (
//         <div>
//           <h2>API Output</h2>
//           <pre>{JSON.stringify(apiOutput, null, 2)}</pre> {/* Display the API output */}
//         </div>
//       ) : (
//         <div>
//           <p> Upload your files here :  </p>

//           <Link
//             className={buttonVariants({
//               variant: "ghost",
//               size: "sm",
//             })}
//             href="/getstarted/feedback"
//           >
//             Sign in
//           </Link>

//           <br></br>

//           <form onSubmit={handleQuestionUpload}>
//             <p>Upload the question sheets:</p>
//             <input
//               type="file"
//               multiple
//               name="questionInput"
//               onChange={(e) => console.log(e.target.files.length + ' files selected for questions')}
//             />
//             <button type="submit" disabled={isLoadingQuestions}>
//               {isLoadingQuestions ? 'Uploading Questions...' : 'Upload Questions'}
//             </button>
//           </form>

//           <br></br>

//           <form onSubmit={handleResponseUpload}>
//             <p>Upload the student's response (can be handwritten or typed):</p>
//             <input
//               type="file"
//               multiple
//               name="responseInput"
//               onChange={(e) => console.log(e.target.files.length + ' files selected for responses')}
//             />
//             <button type="submit" disabled={isLoadingResponses}>
//               {isLoadingResponses ? 'Uploading Responses...' : 'Upload Responses'}
//             </button>
//           </form>
//         </div>
//       )}

//       <br></br>

//       <Footer />
//     </>
//   );
// }
