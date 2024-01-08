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
    {
        path: "/contact",
        name: "Contact",
    },
];

export default function NavBar() {
    let pathname = usePathname() || "/";

    if (pathname.includes('/writing/')) {
        pathname = '/writing';
    }

    const [hoveredPath, setHoveredPath] = useState(pathname);

    return (
        <div className=" w-full p-[1.5rem] items-center justify-around flex-1 rounded-lg sticky z-[100] backdrop-blur-md font-bold flex">
            <p className="flex text-2xl">IkigaiJAM</p>
            <nav className="flex gap-1 relative z-[100] rounded-lg gap-x-8">
                {navItems.map((item, index) => {
                    const isActive = item.path === pathname;

                    return (
                        <Link
                            key={item.path}
                            className={`px-4 py-2 rounded-md lg:text-xl relative no-underline duration-200 ease-out ${isActive ? "underline" : "underline"
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
                                    aria-hidden="true"
                                    style={{
                                        width: "100%",
                                    }}
                                    transition={{
                                        type: "spring",
                                        bounce: 0.25,
                                        stiffness: 130,
                                        damping: 9,
                                        duration: 0.3,
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