"use client";
import React from 'react'
import { useSession } from 'next-auth/react';

function Home() {
    const a = useSession({
      required: true,
      onUnauthenticated() {
        // The user is not authenticated, handle it here.
      },
    });    
    // if(loading) return <h1>Loading.....</h1>
    console.log(a);
  return (
    <div>Home</div>
  )
}

export default Home