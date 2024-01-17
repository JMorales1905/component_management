'use client';

import { motion } from 'framer-motion'
import { useState } from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
    {
        path: '/aboutMe',
        name: "About Me",
    },
    {
        path: "/portfolio",
        name: "Projects",
    },
];

export default function NavBar() {
    let pathname = usePathname() || "/";

    if (pathname.includes('/writing/')) {
        pathname = '/writing';
    }

    const [hoveredPath, setHoveredPath] = useState(pathname);

    return (
        <div className="bg-Void fixed w-full p-[1.5rem] text-white items-center justify-around flex-1 z-10 font-bold flex">
            <a href='/home' className="flex text-2xl">IkigaiJAM</a>
            <nav className="flex gap-1 relative z-[100] rounded-lg gap-x-8">
                {navItems.map((item, index) => {
                    const isActive = item.path === pathname;

                    return (
                        <Link
                            key={item.path}
                            className={`px-4 py-2 rounded-md lg:text-xl relative no-underline duration-200 ease-out"
                                }`}
                            data-active={isActive}
                            href={item.path}
                            onMouseOver={() => setHoveredPath(item.path)}
                            onMouseLeave={() => setHoveredPath(pathname)}
                        >
                            <span>{item.name}</span>
                            {item.path === hoveredPath && (
                                <motion.div
                                    className="absolute bottom-0 left-0 h-full rounded-md -z-10"
                                    layoutId="navbar"
                                    style={{
                                        width: "100%",
                                    }}
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}