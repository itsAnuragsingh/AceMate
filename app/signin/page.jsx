 "use client"
 import React from 'react'
  
 import {
   ClerkProvider,
   SignInButton,
   SignUpButton,
   SignedIn,
   SignedOut,
   UserButton,
 } from '@clerk/nextjs'
  const signin = () => {
   return (
    
        <ClerkProvider>
           <header className="absolute top-0 right-0 p-4">
  <button className="flex justify-between items-center p-4 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300 ease-in-out">
     
    <div className="flex items-center space-x-4">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </button>
  </header>
</ClerkProvider>
      
   )
 }
 
 export default signin
 