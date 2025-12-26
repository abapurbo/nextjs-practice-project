"use client"
import { useRouter } from "next/navigation";
import React from "react";

export default function Banner() {
    const router=useRouter()
    const handleDashboard=()=>{
          const password=prompt('Enter your password')
          if(password=='1234'){
            router.push('/dashboard')
          }
    }
    return <div className="bg-linear-to-r from-sky-400 to-sky-300 h-75 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl text-black font-semibold">Wellcome to share story</h1>
        <button onClick={handleDashboard} className="text-xl px-6 py-3 font-semibold bg-blue-900 rounded-2xl">Share-story</button>
    </div>;
}
