import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }) {
    return <>
        <div className="grid grid-cols-12 gap-5 h-screen">
            <div className="col-span-3 border-r-2 flex flex-col px-6">
                <h1 className="mb-6">SideNav</h1>
                <Link className="bg-gray-500 mt-4 p-2 rounded-xs" href="/dashboard/add-story">Add Story</Link>
                <Link className="bg-gray-500 mt-4 p-2 rounded-xs" href="/dashboard/my-profile">My Profile</Link>
                <Link className="bg-gray-500 mt-4 p-2 rounded-xs" href="/dashboard/settings">Setting</Link>

            </div>
            <div className="col-span-9 ">
                {children}
            </div>
        </div>
    </>
}
