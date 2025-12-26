import React from "react";

export default function Title({ children }) {
    return <div>
        <h1 className="font-bold text-3xl">{children}</h1>
    </div>;
}
