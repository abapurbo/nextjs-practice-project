'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

export default function Header() {
    const path = usePathname()
    if (path == '/dashboard')
        return ''
    return <div>
        <nav className="flex justify-between items-center px-10 py-4">
            <Link href='/' className="text-3xl font-bold">🐬 Dev-Story</Link>
            <div className="flex gap-6">
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/tutorials'>Tutorials</NavLink>
                <NavLink href='/stories'>Stories</NavLink>
                <NavLink href='/about'>About</NavLink>
                <NavLink href='/login'>Login</NavLink>
                <NavLink href='/signUp'>Sign Up</NavLink>
            </div>
        </nav>
    </div>;
}
