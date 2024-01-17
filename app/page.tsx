'use client'
import NavBar from "@/components/NavBar";
import { Space_Mono } from "next/font/google";
import { motion } from "framer-motion";

const space = Space_Mono({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
    return (
        <main className={space.className}>
            <NavBar />
            <div className="bg-Void text-White">
                <motion.div
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.8 }}
                    className="grid justify-center content-center text-center opacity-0 p-8 h-screen
          items-center text-[30px] gap-y-8"
                >
                    Web Development <br /> & <br /> Design
                    <div>
                        <button className="bg-slate-700 rounded-lg w-fit p-4 hover:bg-slate-500">Cock</button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}