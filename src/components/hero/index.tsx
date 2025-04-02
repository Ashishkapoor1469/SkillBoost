"use client"
import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Image from "next/image";
import Img from "../../../public/Bg1.png"
import { PiSealCheckDuotone } from "react-icons/pi";

const Hero:React.FC = () => {
  return (
    <main
      className={`h-auto   mt-0 md:mt-25   min-w-screen flex md:flex-row flex-col-reverse md:justify-evenly items-center xl:p-0 px-10 `}
    >
      <div className="right w-full md:w-130 h-full flex flex-col">
        <motion.h1 initial={{x:-100,opacity:0}} animate={{x:0,opacity:100}} transition={{duration:0.6}} className="md:text-5xl text-3xl font-bold py-2">
          Unlock Your Potential with Expert-Led Courses
        </motion.h1>
        <motion.p initial={{x:-200,opacity:0}} animate={{x:0,opacity:100}} transition={{duration:0.8}} className="font-light py-2">
          Learn from industry experts and tranform your skills our
          comprehernsin=ve online courses
        </motion.p>
        <motion.div initial={{y:200,opacity:0}} animate={{y:0,opacity:100}} transition={{duration:0.8}} className="flex flex-row gap-3 pt-4 py-2">
          <Button variant="default">Browse Courses</Button>
          <Button variant="outline">View Pricing</Button>
        </motion.div>
        <motion.div initial={{y:200,opacity:0}} animate={{y:0,opacity:100}} transition={{duration:1}} className="text-[13px] flex gap-2 px-1">
          <div className="very flex gap-0.5 items-center">
            <PiSealCheckDuotone className="text-green-600" />
            30-day guarantee
          </div>
          <div className="very flex gap-0.5 items-center">
            <PiSealCheckDuotone className="text-green-600" />
            Lifetime access
          </div>
        </motion.div>
      </div>
      <motion.div initial={{x:200,opacity:0}} animate={{x:0,opacity:100}} transition={{duration:0.8}} className="left w-full sm:w-130  h-full flex items-center justify-center md:mt-0 mt-16">
        <Image src={Img} width={300} height={300} alt="BG.IMG"/>
      </motion.div>
    </main>
  );
};

export default Hero;
