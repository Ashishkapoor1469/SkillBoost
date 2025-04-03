"use client";
import React from "react";
import { motion } from "motion/react";
import Cards from "./card"
const Courses = () => {
  const Data =[
    {
      tag:"Developmet",
      rate:"4.5",
      head:"Complete web..",
      dis:"Learn HTML,CSS,Javascript,React,Nodejs and become a full stack web dev....",
      price:"$99.99",
      img:'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      tag:"Marketing",
      rate:"4.8",
      head:"Digital Marketing..",
      dis:"Master Sco social media marketing,email campiagns, and analytics to grow skills....",
      price:"$89.99",
      img:"https://images.unsplash.com/photo-1639825988283-39e5408b75e8?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      tag:"Design",
      rate:"4.7",
      head:"UI/UX Design..",
      dis:"Learn the principles of user interface and experience design to create beautiful ......",
      price:"$99.99",
      img:"https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  return (
    <main className="min-w-screen min-h-screen  items-center flex flex-col">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.8 }}
        className=" flex flex-col gap-10 justify-center items-center"
      >
        <header className="flex flex-col items-center ">
          <h1 className="md:text-5xl font-bold text-4xl"> Featured Courses</h1>
          <p className="text-gray-500 font-light text-center">Explore our most popular courses and start your learning journey today.</p></header>

        <motion.section initial={{opacity:0}} whileInView={{opacity:100}} viewport={{once:true}} transition={{duration:1}} className="flex flex-wrap gap-6 justify-center items-center mt-15">
          {Data.map((name,index)=>{
            return <div className="min-[344px]:p-0 p-4" key={index}><Cards tag={name.tag} rate={name.rate} head={name.head} price={name.price} dis={name.dis} img={name.img}  /></div>
          })}
          
        </motion.section>
<button className="btn border border-black rounded">View All Courses</button>
      </motion.h1>
    </main>
  );
};

export default Courses;
