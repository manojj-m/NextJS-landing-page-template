import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";


import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CreateForm from "./CreateForm";
import { FaLinkedin } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdAddchart } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center">

        <div className="font-bold text-zinc-700 mt-4 mb-8">Launching September 1st 2024</div>

        <h1 className="max-w-4xl text-4xl font-bold sm:text-5xl lg:text-7xl">
          <span className="text-blue-600">Personalised Feedback <br></br></span>on School Assignments
        </h1>

        <div className="mt-16 max-w-prose text-xl text-zinc-700 sm:text-2xl sm:px-6  md:mt-28">
          Use AI to generate personalised feedback for your student’s school assignments in just moments.
        </div>


        <div className="flex flex-col gap-10 mt-16 sm:gap-6 sm:flex-row md:px-16">
          <div className="flex flex-col px-4 sm:flex-1 items-center">
            <MdOutlineFileUpload className="border border-gray-200 bg-white h-12 w-12 rounded-full font-gray-400 p-3 mb-2 md:mb-6" style={{ fill: "rgb(125, 125, 125)" }} />
            <span className="text-lg font-bold text-blue-600 text-left md:text-xl">
              Step 1
            </span>
            <span className="text-lg font-base pt-1 text-zinc-700 md:text-xl md:text-left">
              Upload the assignment and the student's response
            </span>
          </div>
          <div className="flex flex-col px-4 sm:flex-1 items-center">
            <MdAddchart className="border border-gray-200 bg-white h-12 w-12 rounded-full font-gray-400 p-3 mb-2 md:mb-6" style={{ fill: "rgb(125, 125, 125)" }} />
            <span className="text-lg font-bold text-blue-600 text-left md:text-xl">
              Step 2
            </span>
            <span className="text-lg font-base pt-1 text-zinc-700 md:text-xl md:text-left">
              Upload the student's previous performance data e.g. previous grades, tests, school reports
            </span>
          </div>
          <div className="flex flex-col px-4 sm:flex-1 items-center">
            <MdOutlineMarkEmailRead className="border border-gray-200 bg-white h-12 w-12 rounded-full font-gray-400 p-3 mb-2 md:mb-6" style={{ fill: "rgb(125, 125, 125)" }} />
            <span className="text-lg font-bold text-blue-600 text-left md:text-xl">
              Step 3
            </span>
            <span className="text-lg font-base pt-1 text-zinc-700 md:text-xl md:text-left">
              Receive personalised feedback for the assignment via email
            </span>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Value Prop */}
      <div className="mt-8">
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>

          <div>
            <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
              <div className="mt-8 flow-root sm:mt-16">
                <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard.png"
                    alt="product preview"
                    width={955}
                    height={808}
                    quality={100}
                    className="rounded-md bg-special p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
        </div>
      </div>

      <MaxWidthWrapper>

        {/* Who are we? */}
        <section className="flex flex-col mt-24">
          <div className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Creating a more <span className="text-blue-600">dynamic</span>, supportive learning environment for <span className="text-blue-600">all</span>
          </div>
          <div className="w-full max-w-prose text-center text-base px-4 md:text-lg">
            At Evaluate Learning, we envision a future where every student receives the personalized attention they deserve, and every teacher has the tools to provide it.            Evaluate Learning empowers primary and secondary school teachers to create tailored assignment feedback. By uploading assignments along with prior student data, teachers receive context-rich feedback that considers each student's unique learning path. Our AI technology analyses the assignment combined with historical performance, to provide insightful personalised feedback that goes beyond generic comments.
            We are proudly supported by <a href="https://www.skysthelimit.org/" className="underline text-blue-500">Sky's The Limit</a>, a nonprofit organisation supporting entrepeneurs.
          </div>
        </section>

        {/* Meet The Founder */}
        <section className="flex flex-col mt-12">
          <div className="flex flex-col items-center justify-between gap-6 p-8 w-full bg-white border rounded-xl md:flex-row">
            <div className="flex flex-col items-start justify-center flex-1">
              <div className="text-3xl font-bold">Meet Our Founder</div>
              <div className="text-base text-left pt-5 text-gray-900 max-w-prose" >
                Manojj grew up in the vibrant city of London, where his passion for education and technology was ignited at a young age. With a keen interest in leveraging innovation to solve real-world problems, Manojj pursued advanced studies in computer science, focusing on the transformative potential of machine learning. His dedication led him to found our company, where he harnesses cutting-edge technology to empower teachers and revolutionize the way homework is assigned. Under Manojj's visionary leadership, our startup is committed to enhancing educational experiences through seamless, AI-driven solutions.
              </div>
              <div className="flex flex-row gap-1 mt-5 items-center">
                <FaLinkedin className="w-6 h-6" />
                <a href="https://www.linkedin.com/in/manojj-m/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:cursor-pointer text-gray-500 text-sm">Connect now</a>
              </div>
            </div>
            <Image
              src="/profile.png"
              alt="cafe scenario"
              width={250}
              height={250}
              quality={100}
              className="rounded-full"
            />
          </div>
        </section>


        {/* Form */}
        <section className="mt-16 max-w-2xl text-center md:text-left">
          <div className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Register Your Interest
          </div>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Sign up to access a free trial of Evaluate Learning upon release on September 1st 2024.
          </p>
          <br></br>
          {/* <div><CreateForm/></div> */}
        </section>
        {/* steps */}



        {/* Contact Us */}
        <section className="flex flex-col mt-16">
          <div className="mx-auto max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-2 text-base md:text-lg text-gray-600">
              We would be more than happy to assist with any questions or provide more information on Evaluate Learning.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4 md:gap-5 w-full md:w-2/3 max-w-xl m-auto">
            <a href="https://calendly.com/manojj-ranjan" target="_blank" rel="noopener noreferrer"
              className="flex flex-col text-center w-full justify-center border border-slate-200 bg-white rounded-md px-5 py-2.5 hover:cursor-pointer hover:scale-105 transition-all">
              <span className="font-bold text-lg">Book a call</span>
              <span className="text-sm text-gray-500 flex justify-center items-center gap-1">via Calendly <RxOpenInNewWindow /></span>
            </a>
            <div className="grid grid-rows-auto grid-cols-1 gap-2 border-t pt-4 w-full justify-center md:grid-cols-2 md:gap-10 md:border-0">
              <a href="tel:07483250344" className="flex flex-col text-center border border-slate-200 bg-white rounded-md px-5 py-2 hover:cursor-pointer hover:scale-105 transition-all">
                <span className="font-bold text-lg">Phone</span>
                <span className="text-sm">07483250344</span>
              </a>
              <a href="mailto:evaluate.learning@gmail.com" className="flex flex-col text-center border border-slate-200 bg-white rounded-md px-5 py-2 hover:cursor-pointer hover:scale-105 transition-all">
                <span className="font-bold text-lg">Email</span>
                <span className="text-sm">evaluate.learning@gmail.com</span>
              </a>
            </div>
          </div>
        </section>


      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
