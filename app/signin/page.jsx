import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";


import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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

        <div className="mt-16 max-w-prose text-xl text-zinc-700 sm:text-2xl sm:px-6 lg:mt-24 lg:text-3xl">
          Use AI to generate personalised feedback for your student’s school assignments in just moments.
        </div>

        <div className="flex flex-col gap-10 mt-16 sm:gap-6 sm:flex-row lg:mt-24">
          <div className="flex flex-col px-4 sm:flex-1 items-center lg:items-start">
            <MdOutlineFileUpload className="border border-gray-200 bg-white h-12 w-12 rounded-full font-gray-400 p-3 mb-2 lg:mb-6" style={{ fill: "rgb(125, 125, 125)" }} />
            <span className="text-lg font-bold text-blue-600 text-left md:text-xl">
              Step 1
            </span>
            <span className="text-lg font-base pt-1 text-zinc-700 md:text-xl lg:text-left">
              Upload the assignment and the student's response
            </span>
          </div>
          <div className="flex flex-col px-4 sm:flex-1 items-center lg:items-start">
            <MdAddchart className="border border-gray-200 bg-white h-12 w-12 rounded-full font-gray-400 p-3 mb-2 lg:mb-6" style={{ fill: "rgb(125, 125, 125)" }} />
            <span className="text-lg font-bold text-blue-600 text-left md:text-xl">
              Step 2
            </span>
            <span className="text-lg font-base pt-1 text-zinc-700 md:text-xl lg:text-left">
              Upload the student's previous performance data e.g. previous grades, tests, school reports
            </span>
          </div>
          <div className="flex flex-col px-4 sm:flex-1 items-center lg:items-start">
            <MdOutlineMarkEmailRead className="border border-gray-200 bg-white h-12 w-12 rounded-full font-gray-400 p-3 mb-2 lg:mb-6" style={{ fill: "rgb(125, 125, 125)" }} />
            <span className="text-lg font-bold text-blue-600 text-left md:text-xl">
              Step 3
            </span>
            <span className="text-lg font-base pt-1 text-zinc-700 md:text-xl lg:text-left">
              Receive personalised feedback for the assignment via email
            </span>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Value Prop */}
      <div className="mt-8 lg:mt-24">
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
        



      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
