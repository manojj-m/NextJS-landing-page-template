"use client"
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, CardDescription, CardTitle } from "@/components/ui/card";



const SignUpForm = () => {

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  )

  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordagain, setPasswordAgain] = useState('')
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!firstname || !email || !password ) {
      setError('First name and email are required.');
      return;
    }

    if (password != passwordagain ) {
      setError('Passwords do not match.');
      return;
    }

    if (error) {
      setError('There was an error submitting your details.');
      console.error(error);
    } else {
      setSuccess(true);
      setFirstName('');
      setEmail('');
      setPassword('');
      setPasswordAgain('');
    }
  };



  return (
    <Card className="max-w-xl mx-auto p-6">
      <br></br>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="mb-3 text-left" style={{ fontSize: '13pt' }}>First Name :</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </div>
        <div>
        <br></br>
        <label className="mb-3 text-left" style={{ fontSize: '13pt' }}>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </div>
        <div>
        <br></br>
        <label className="mb-3 text-left" style={{ fontSize: '13pt' }}>Password :</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
          />
        </div>
        <div>
        <br></br>
        <label className="mb-3 text-left" style={{ fontSize: '13pt' }}>Confirm your password :</label>
          <input
            type="text"
            value={passwordagain}
            onChange={(e) => setPasswordAgain(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
          />
        </div>
        <div className="col-span-1 sm:col-span-2 text-center mt-4">
        <button
          type="submit"
          style={{
            backgroundColor: '#32CD32', 
            color: 'white', 
            padding: '10px 20px', 
            borderRadius: '5px'
          }}
        >
          Sign Up
        </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      {success && <p className="text-green-500 mt-4 text-center">Sign up successful!</p>}
    </Card>
  );
};


export default SignUpForm;