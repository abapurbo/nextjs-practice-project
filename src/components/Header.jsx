import Link from "next/link";
import React from "react";

export default function Header() {
    return <div>
        <nav className="flex justify-between items-center px-10 py-2">
            <Link href='/' className="text-3xl font-bold">🐬 Dev-Story</Link>
            <div className="flex gap-6">
               <Link href='/'>Home</Link>
               <Link href='/tutorials'>Tutorials</Link>
               <Link href='/stories'>Stories</Link>
               <Link href='/about'>About</Link>
               <Link href='/login'>Login</Link>
               <Link href='/signUp'>Sign Up</Link>
            </div>
        </nav>
    </div>;
}
