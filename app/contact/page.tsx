import NavBar from "@/components/NavBar"
import { Space_Mono } from "next/font/google"

const space = Space_Mono({ subsets: ['latin'], weight: ['400'] })

export default function Page() {
    return (
        <main className={space.className}>
            <div className="bg-Void text-White h-screen">
                <nav><NavBar /></nav>
                <div className="flex w-screen h-5/6 justify-center">
                    <div className="flex w-11/12 border-White 
                    drop-shadow-[0_5px_2px_rgba(255,255,255,0.30)] border-[1px] items-center">
                        {/* Section Title */}
                        <div className="flex-2 grid h-full text-[50px] border-[1px] border-White px-8 py-32">
                            <p>C</p>
                            <p>O</p>
                            <p>N</p>
                            <p>T</p>
                            <p>A</p>
                            <p>C</p>
                            <p>T</p>
                        </div>
                        {/* Project Grid */}
                        <div className="flex-1 grid justify-center text-center text-[20px] gap-y-8">
                            <p className="hover:text-[22px] transition-all ease-in-out hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.30)]"><a href="">Email &#8599;</a></p>
                            <p className="hover:text-[22px] transition-all ease-in-out hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.30)]"><a href="">Instagram &#8599;</a></p>
                            <p className="hover:text-[22px] transition-all ease-in-out hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.30)]"><a href="">Contact Form &#8599;</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}