import React from "react";

export default function AuthLayout({ children }) {
    return <div className="min-h-screen flex ">
        <div className="flex-2 flex justify-center items-center">
            {children}
        </div>
        <div className="bg-green-500 flex-1 flex items-center justify-center">
            <h1 className="text-3xl font-bold">Wellcome to authentication</h1>
        </div>
    </div>;

}
