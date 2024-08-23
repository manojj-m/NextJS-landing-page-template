"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SignUpForm from "./SignUpForm.jsx";


export default function SignUp() {
    const router = useRouter()
    const [error, setError] = useState('')
  
    const handleSubmit = async (e, email, password) => {
      e.preventDefault()
      setError('')
  
      const supabase = createClientComponentClient()
      const { error } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) {
        setError(error.message)
      }
      if (!error) {
        router.push('/')
      } 
    }  
  return (
    <>
      <Navbar />


      {/* Hero Section */}
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-4xl font-bold mt-4 sm:text-5xl lg:text-7xl lg:mt-20">
          Sign Up
        </h1>
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
              className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
        </div>
      </div>

      <MaxWidthWrapper>

        

        {/* Meet The Founder */}
        


        {/* Form */}
        <section className="mt-16 max-w-2xl text-center mx-auto lg:mt-24">
            <div><SignUpForm handleSubmit={handleSubmit} /></div>
        </section>
        



        


      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
