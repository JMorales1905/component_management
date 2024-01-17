'use client'
import NavBar from "@/components/NavBar"
import { Space_Mono } from "next/font/google"
import { easeInOut, motion } from "framer-motion"

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"

import Image from 'next/image'

const space = Space_Mono({ subsets: ['latin'], weight: ['400'] })

export default function Page() {
  return (
    <main className={`${space.className} bg-Void h-screen`}>
      <NavBar />
      <div className='pt-[150px]'>

        {/* INTRO CARD */}
        <motion.div
          className="text-White w-[60%] py-[40px] text-center text-[30px] capitalize rounded-md
         shadow-md shadow-White border-White border-[1px] ml-[70px] border-opacity-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: [3, 1, 1.1, 1] }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: 'easeIn',
          }}
        >
          <motion.p>
            A Little Blast Into My Past!
          </motion.p>
          <br /> <br /> so you can get a sense <br />of where I&apos;m
          coming from <br /><br /> literaly 🕮<br />&<br /> Figuratively ☄
        </motion.div>
        <div className="text-White w-full flex justify-end mt-[50px]">
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{
              delay: 0,
              type: 'spring',
              ease: "easeIn",
              duration: 1
            }}
            className="bg-opacity-70 text-[20px] w-fit rounded-sm p-2 mt-5 mr-[13rem]
          animate-[pulse_1s_ease-in-out_infinite] uppercase hover:scale-110 transition-transform ease-in-out">
            &#8615; That&apos;s me
          </motion.div>
        </div>
        <div className="w-full  grid gap-y-4">
          <div className="text-end text-White py-4 flex justify-between">

            {/* INTRO PARAGRAPH */}
            <motion.div
              className="p-10 text-[23px] flex-1 text-center"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{
                delay: 1,
                type: 'spring',
                ease: "easeIn",
                duration: [.5]
              }}
            >
              Well met! My name is <span className="bold text-[30px]">Jose Morales</span>. <br />
              <br />About three years ago, I chose to persue my passion in <span className="underline text-[25px]">programming</span> only, I came to the realization
              that such a hard skill can have hundreds of applications in the professional field. Ultimately, I
              decided to dedicate it to <span className="underline text-[25px]" >Font-End Development</span>.
              <br />
              <br />
              Though there are dozens of tools a developer can use, my main focus is
              combining <span className="underline text-[25px]">Tailwindcss</span> and <span className="underline text-[25px]">Nextjs</span> to
              efficently create responsive websites that leave lasting impressions on users.
              <br />
              <br />
              If you&apos;re still curious, then how about checking out my social media?
              <div className="flex justify-center my-8 gap-8">
                <a href="https://www.instagram.com/moralesbutmo/"><FaInstagram size='1.5em' className='hover:scale-110 transition-transform ease-in-out' /></a>
                <a href="https://github.com/JMorales1905/"><FaGithub size='1.5em' className='hover:scale-110 transition-transform ease-in-out' /></a>
                <a href="https://www.linkedin.com/in/jmorales1905/"><FaLinkedin size='1.5em' className='hover:scale-110 transition-transform ease-in-out' /></a>
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              className="flex items-center justify-center h-[600px] w-[350px] mx-[5vw]
            border-[5px] border-x-DarkSlateGray border-y-AirSuperioriyBlue rounded-sm"
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{
                delay: 1,
                type: 'spring',
                ease: "easeIn",
                duration: [.5]
              }}
            >
              <div className="flex-2">
                <Image
                  src='/images/selfport.jpg'
                  width={300}
                  height={250}
                  alt="self-portrait"
                  className="rounded-md flex-2"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
