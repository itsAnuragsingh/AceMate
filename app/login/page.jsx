"use client"
import { supabase } from '../../lib/supabaseClient';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useRouter();

  async function handleLogin(event) {
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error("Error logging in:", error);
    } else {
      console.log("Logged in successfully:", data);
      push('/');
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-orange-500'>
      <form className='bg-gradient-to-r from-white to-gray-50 text-gray-800 shadow-2xl flex flex-col justify-center items-center gap-6 px-12 py-10 rounded-3xl border border-gray-200' onSubmit={handleLogin}>
        <h1 className='text-3xl font-extrabold text-gray-800'>Welcome Back</h1>
        <p className='text-gray-600 text-sm'>Log in to continue your journey!</p>
        <input
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500'
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500'
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className='bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition duration-300 shadow-md'
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;