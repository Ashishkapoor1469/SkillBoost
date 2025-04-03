"use client";
import React from "react";
import { motion } from "motion/react";
const Courses = () => {
  return (
    <main className="min-w-screen min-h-screen mt-14 items-center flex flex-col">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.8 }}
        className="md:text-5xl text-3xl font-bold"
      >
        Featured Courses
        
      </motion.h1>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 1 }}
        className="text-neutral-600 w-full text-center"
      >
        Explore put most courses and start your learning journey today
        
      </motion.h1>
    </main>
  );
};

export default Courses;
