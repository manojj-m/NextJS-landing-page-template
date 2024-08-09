"use client"
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Card, CardDescription, CardTitle } from "@/components/ui/card";



const CreateForm = () => {

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  )

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!firstname || !email) {
      setError('First name and email are required.');
      return;
    }

    const { data, error } = await supabase
      .from('customers')
      .insert([
        { firstname, lastname, email, number },
      ]);

    if (error) {
      setError('There was an error submitting your details.');
      console.error(error);
    } else {
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setNumber('');
    }
  };



  return (
    <Card className="max-w-xl mx-auto p-6">
      <CardTitle className="text-center">Submit Your Details</CardTitle>
      <br></br>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="mb-3 text-left" style={{ fontSize: '13pt' }}>First Name:</label>
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
          <label className="mb-3 text-left" style={{ fontSize: '13pt' }}>Last Name:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </div>
        <div>
        <br></br>
        <label className="mb-3 text-left" style={{ fontSize: '13pt' }}>Email:</label>
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
        <label className="mb-3 text-left" style={{ fontSize: '13pt' }}>Number (optional):</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full p-2 mt-1 border rounded"
          />
        </div>
        <br></br>
        <div className="col-span-1 sm:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      {success && <p className="text-green-500 mt-4 text-center">Details submitted successfully!</p>}
    </Card>
  );
};


export default CreateForm;