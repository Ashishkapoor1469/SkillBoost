"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { PiSealCheckDuotone } from "react-icons/pi"

const Hero: React.FC = () => {
  const fadeInLeft = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6 },
  }

  const fadeInRight = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7 },
  }

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
  }

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden scroll-none">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-20 -right-20 hidden lg:block"
        >
          <Image src="/Bg1.png" width={500} height={500} alt="Background decoration" className="opacity-70" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -bottom-40 -left-20 hidden lg:block"
        >
          <Image src="/Bg2.png" width={400} height={400} alt="Background decoration" className="opacity-70" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-5 md:px-20">

          <motion.div
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
          >
            <motion.h1 {...fadeInLeft} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Unlock Your Potential with Expert-Led Courses
            </motion.h1>

            <motion.p
              {...fadeInLeft}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-500 max-w-xl mx-auto md:mx-0 nunito-n"
            >
              Learn from industry experts and transform your skills with our comprehensive online{" "}
              <span className="text-green-500 font-medium">courses</span>.
            </motion.p>

            <motion.div {...fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="font-medium">
                Browse Courses
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                View Pricing
              </Button>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start text-sm"
            >
              <div className="flex items-center gap-1.5">
                <PiSealCheckDuotone className="text-green-600 text-lg" />
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <PiSealCheckDuotone className="text-green-600 text-lg" />
                <span>Lifetime access</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="w-full md:w-1/2" {...fadeInRight}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image src="/Bg1.png" fill alt="Online learning illustration" className="object-contain" priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

