'use client'
import { TypeAnimation } from "react-type-animation"

export default function Intro() {
    return (
        <section id="#about" className='text-center flex items-center p-11 font-bold
        min-h-[50vw] '>
            <div className="flex-1 space-y-5 border-b-2 rounded-md p-8 shadow-xl backdrop-blur-lg bg-Gunmetal bg-opacity-30">
                <p className='text-[35px] leading-[35px] tracking-wide'>
                    <TypeAnimation
                        className="font-bold text-DarkSlateGray"
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'websites are EYE-CATCHING',
                            2000,
                            // wait 1s before replacing "Mice" with "Hamsters"
                            'websites are UNIQUE',
                            2000,
                            'websites are ELEGANT',
                            2000,
                            'websites are POWERFUL',
                            2000,
                        ]}
                        wrapper="span"
                        speed={5}
                        style={{ fontSize: '<div className="1"></div>em', display: 'inline-block' }}
                        repeat={0}
                        omitDeletionAnimation={true}
                    />
                </p>
                <p className="text-[25px]">Your site should be too</p>
            </div>
        </section>
    )
}