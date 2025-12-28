import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ href, children }) {
    const path = usePathname()
    const isActive = href === "/" ? path === "/" : path.startsWith(href);

    return <div>
        <Link
            href={href}
            className={`px-3 py-2 ${isActive ? "bg-blue-50 text-blue-600 rounded-sm font-bold" : ""
                }`}
        >
            {children}
        </Link>
    </div>;
}
