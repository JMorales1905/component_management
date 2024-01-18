'use client'
import NavBar from "@/components/NavBar";
import { Space_Mono } from "next/font/google";
import { motion } from "framer-motion";

const space = Space_Mono({ subsets: ["latin"], weight: ["400"] });

export default function Page() {
  return (
    <main className={`${space.className} cursor-pointy2`}>
      <NavBar />
      <div className="bg-Void text-White cursor-pointy2">
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.8 }}
          className="grid justify-center content-center text-center opacity-0 p-8 h-screen items-center text-[30px] gap-y-8"
        >
          <div className="w-500px">
            Web Development <br /> & <br /> Design
          </div>
          <div className="grid justify-center">
            <ul role="list" className="text-[25px] list-disc w-fit marker:text-red-300">
              <li className=""><a className="hover:underline underline-offset-4 decoration-red-300 cursor-pointy2" href="/aboutMe">About Me</a></li>
              <li className=""><a className="hover:underline underline-offset-4 decoration-red-300 cursor-pointy2" href="/portfolio">Projects</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
