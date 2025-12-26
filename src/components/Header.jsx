import Link from "next/link";
import React from "react";

export default function Header() {
    return <div>
        <nav className="flex justify-between items-center px-10 py-2">
            <h1 className="text-3xl font-bold">🐬 Dev-Story</h1>
            <div className="flex gap-6">
               <Link href='/'>Home</Link>
               <Link href='/'>Tutorials</Link>
               <Link href='/'>Stories</Link>
               <Link href='/'>About</Link>
               <Link href='/'>Dashboard</Link>
               <Link href='/'>Login</Link>
               <Link href='/'>Sign Up</Link>
            </div>
        </nav>
    </div>;
}
