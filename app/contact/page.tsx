'use client'
import NavBar from "@/components/NavBar"
import { Space_Mono } from "next/font/google"
import { AnimatePresence, motion, easeInOut } from "framer-motion"
import Link from "next/link"

const space = Space_Mono({ subsets: ['latin'], weight: ['400'] })

export default function Page() {
    return (
        <main className={space.className}>
            <nav><NavBar /></nav>
            <div className="bg-Void text-White h-screen pt-[150px]">
                <div className="flex w-screen h-5/6 justify-center">
                    <div className="flex w-11/12 border-White 
                    drop-shadow-[0_5px_2px_rgba(255,255,255,0.30)] border-[1px] items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={'modal'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, x: 50, transition: { duration: 1, ease: easeInOut } }}
                                exit={{ opacity: 0, x: 0, transition: { duration: 3 } }}
                                className="flex-1 grid justify-center text-center text-[20px] gap-y-8">
                                <p className="hover:text-[22px] transition-all ease-in-out hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.30)]"><a href="">Email &#8599;</a></p>
                                <p className="hover:text-[22px] transition-all ease-in-out hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.30)]"><a href="">Instagram &#8599;</a></p>
                                <p className="hover:text-[22px] transition-all ease-in-out hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.30)]"><a href="">Contact Form &#8599;</a></p>
                                <div className="mx-auto mt-[50px]">
                                    <Link href='/portfolio' id="contact">
                                        <button className="bg-slate-700 uppercase rounded-lg w-fit p-4 hover:bg-slate-500 active:bg-slate-700">projects</button>
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    )
}