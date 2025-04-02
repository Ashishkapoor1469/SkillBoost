"use client";
import React from "react";
import { motion } from "motion/react";
const Courses = () => {
  return (
    <main className="min-w-screen min-h-screen justify-center flex">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold"
      >
        Courses
        
      </motion.h1>
    </main>
  );
};

export default Courses;
