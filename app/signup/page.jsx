"use client"
import { supabase } from '../../lib/supabaseClient';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp(event) {
    event.preventDefault();
    const { data, error } = await supabase
      .from('signup')
      .insert([
        { 
            email: email, 
            password: password 
        },
      ])
      .select();
    setEmail('');
    setPassword('');

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600'>
      <form className='bg-gradient-to-r from-white to-gray-100 text-gray-800 shadow-2xl flex flex-col justify-center items-center gap-6 px-12 py-10 rounded-3xl border border-gray-200'>
        <h1 className='text-3xl font-extrabold text-gray-800'>Create an Account</h1>
        <p className='text-gray-600 text-sm'>Join us and start your journey today!</p>
        <input
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className='bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md'
          type="submit" onClick={handleSignUp}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;