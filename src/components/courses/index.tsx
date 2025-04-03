"use client";
import React from "react";
import { motion } from "motion/react";
import Cards from "./card"
const Courses = () => {
  return (
    <main className="min-w-screen min-h-screen justify-center flex">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.8 }}
        className=" "
      >
        <header className="flex flex-col items-center ">    
            <h1 className="text-5xl font-bold"> Featured Courses</h1>
          <p className="text-gray-500 font-light">Explore our most popular courses and start your learning journey today.</p></header>

          <section>
<Cards/>
          </section>
      </motion.h1>
    </main>
  );
};

export default Courses;
