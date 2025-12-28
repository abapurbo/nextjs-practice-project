import React from "react";

export default function AuthLayouts({ children }) {
    return <div className="flex ">
        <div className="flex-2">
            {children}
        </div>
        <div className="flex-1">
            <h1 className="bg-green text-3xl ">
                Wellcome to Authentication
            </h1>
        </div>
    </div>;
}
