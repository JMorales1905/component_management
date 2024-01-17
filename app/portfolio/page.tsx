'use client'
import NavBar from "@/components/NavBar"
import { Space_Mono } from "next/font/google"
import { AnimatePresence, motion } from 'framer-motion'
import Link from "next/link"
import { AppProps } from "next/app"
import { Router, useRouter } from "next/router"


const space = Space_Mono({ subsets: ['latin'], weight: ['400'] })

export default function Page() {

    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible
    };

    return (
        <main className={`${space.className}`}>
            <nav><NavBar /></nav>
            <div className="bg-Void text-White h-screen pt-[150px]">
                <AnimatePresence mode="wait">
                    <div
                        className="flex w-screen h-5/6 justify-center">
                        <div className="flex w-11/12 border-White drop-shadow-[0_5px_2px_rgba(255,255,255,0.30)] border-[1px] items-center">
                            {/* Section Title */}
                            {/* Project Grid */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, x: 50, transition: { duration: 1 } }}
                                exit={{ opacity: 0, x: 0, transition: { duration: 6 } }}
                                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                                className="flex-1 grid justify-center text-center">
                                <a
                                    href=""
                                    className="transition-all ease-in-out hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.30)]">Personal/Landing-Page/2024 &mdash; <span className="text-[60px]">FixIt-Felix</span>
                                </a>
                                <a
                                    href="" className="transition-all ease-in-out hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.30)]">Personal/Website/2024 &mdash; <span className="text-[60px]">TBA</span>
                                </a>
                                <div className="mx-auto mt-[50px]">
                                    <Link href='/contact' id="contact">
                                        <button className="bg-slate-700 uppercase rounded-lg w-fit p-4 hover:bg-slate-500 active:bg-slate-700 text-[20px]">contact</button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </AnimatePresence>
            </div>
        </main>
    )
}