"use client";
import React, { useState, useEffect } from "react";
import anime from "animejs";
import { easeIn, easeInOut, motion } from "framer-motion";
import { Space_Mono } from "next/font/google";

const space = Space_Mono({ subsets: ['latin'], weight: ['400'] })

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.3,
        duration: 1100,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 1000,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        duration: 1000,
      })
      .add({
        targets: "#logo",
        opacity: 0,
        duration: 2000,
        easing: 'easeInOutExpo'
      })
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  });

  return (
    <div
      className={`${space.className} cursor-pointy2 text-[40px] grid h-screen items-center content-center justify-center bg-Void`}
      isMounted={isMounted}
    >
      <div id="logo">
        <div
          className="w-full h-fit stroke-White p-[4%] border-solid border-2 border-White"
          style={{
            border: "none",
            padding: "0",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <motion.svg
            style={{ width: "100%", height: "100%" }}
            viewBox="-50 -50 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 7 }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: 0,
                repeatType: "loop",
                repeatDelay: 1,
              }}
              strokeWidth={2}
              strokeDasharray="0 1"
              fill="transparent"
              stroke={"pink"}
              fillOpacity={0.7}
              d={
                "M511.955,204.025c-0.427-13.474-11.307-24.32-24.789-24.781l-3.55-0.043c-8.277,0-31.258,0.802-59.674,6.332    c-5.086-38.4-15.386-65.664-16.239-67.84c-2.526-6.511-7.612-11.699-14.063-14.37c-3.14-1.297-6.468-1.946-9.796-1.946    c-3.516,0-7.023,0.725-10.308,2.167c-1.877,0.828-22.554,10.146-48.35,28.305c-22.605-43.008-48.759-70.733-50.679-72.738    c-4.838-5.052-11.52-7.902-18.5-7.902c-6.98,0-13.662,2.85-18.492,7.893c-1.92,2.005-28.109,29.773-50.722,72.823    c-25.737-18.108-46.438-27.563-48.307-28.39c-3.285-1.442-6.793-2.167-10.308-2.167c-3.328,0-6.656,0.648-9.796,1.946    c-6.451,2.671-11.529,7.868-14.063,14.37c-0.845,2.176-11.145,29.431-16.23,67.84c-28.433-5.538-51.405-6.323-59.682-6.323    l-3.567,0.043c-13.474,0.461-24.363,11.307-24.789,24.781c-0.154,4.796-2.876,118.349,67.746,188.979    c64.521,64.521,165.769,67.789,185.412,67.789l2.628-0.034c0.051,0,0.102,0.034,0.154,0.034c0.051,0,0.102-0.034,0.154-0.034    l2.628,0.034c19.644,0,120.892-3.268,185.412-67.789C514.83,322.382,512.108,208.829,511.955,204.025z M383.844,126.969    c0,0,10.257,26.863,14.942,64.563c-14.831,4.156-30.242,9.737-45.542,17.203c-3.968-19.055-9.916-36.915-16.922-53.248    C362.468,136.543,383.844,126.969,383.844,126.969z M128.168,126.969c0,0,21.376,9.523,47.539,28.467    c-7.023,16.384-12.996,34.313-16.964,53.436c-15.3-7.467-30.686-13.133-45.525-17.297    C117.902,153.858,128.168,126.969,128.168,126.969z M85.911,374.905C22.303,311.298,25.64,204.836,25.64,204.836    s0.964-0.026,2.756-0.026c13.414,0,73.199,2.133,126.182,30.677c-0.614,6.733-0.973,13.568-0.973,20.514    c0,78.805,42.769,145.374,67.268,177.075C184.172,428.716,126.402,415.396,85.911,374.905z M256.569,434.596    c-0.495-0.162-0.981-0.316-1.613-0.546c-9.011-9.822-75.75-85.76-75.75-178.048c0-98.97,76.8-179.2,76.8-179.2    s76.8,80.23,76.8,179.2C332.806,350.969,262.286,428.469,256.569,434.596z M426.109,374.905    c-40.491,40.491-98.261,53.811-134.963,58.172c24.491-31.701,67.26-98.27,67.26-177.075c0-6.989-0.358-13.867-0.99-20.642    c52.983-28.518,112.794-30.558,126.199-30.558c1.792,0,2.756,0.026,2.756,0.026S489.708,311.298,426.109,374.905z"
              }
            />
          </motion.svg>
        </div>
      </div>
      <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1], transition:{duration:3, ease: 'easeInOut'} }}
      className="text-pink-200 flex justify-center">
        IkigaiJAM <span className="text-[20px] flex items-end p-2">/Jose Morales</span>
      </motion.p>
    </div>
  );
};

export default SplashScreen;
