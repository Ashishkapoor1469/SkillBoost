"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { PiBookOpenThin } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLargeLine } from "react-icons/ri";
import Link from "next/link";
import Button1 from "../buttons/button1";

interface RouteType {
  route: string;
  link: string; // Fixed: Changed "Link" to "link"
}

const routes: RouteType[] = [
  { route: "Courses", link: "/" },
  { route: "Pricing", link: "/courses" },
  { route: "About", link: "/pricing" },
  { route: "Login", link: "/login" },
];

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="flex justify-between fixed items-center h-16 w-full md:px-12 lg:px-12 xl:px-12 px-6 py-7 bg-white/30 backdrop-blur-md z-[999]">
      <div className="left flex gap-1 h-full items-center font-extrabold scale-[1.3]">
        <PiBookOpenThin className="text-3xl" /> SkillBoost
      </div>

      <nav className="flex gap-x-4 justify-center items-center">
        <ul className="hidden sm:flex gap-x-6">
          {routes.map((route, index) => (
            <li key={index} className="text-md relative">
              <Link href={route.link}>{route.route}</Link>
              <motion.div
                className="absolute left-0 bottom-0 h-[2px] bg-blue-600 w-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1, transition: { duration: 0.3 } }}
              />
            </li>
          ))}
        </ul>
        <li className="list-none"><Button1/></li>
        {/* Buttons */}
        <div className="">
          <button className="hidden sm:flex btn">Login</button>
          <Button className="sm:hidden p-2 btn" variant="outline" onClick={handleVisible}>
            <CiMenuFries />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="mobile-menu"
            className="inset-0 h-screen z-50 sm:hidden fixed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsVisible(false)}
          >
            <motion.div
              className="fixed inset-0 bg-white backdrop-blur-lg w-full h-screen flex flex-col items-center justify-center gap-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col items-center gap-4 text-lg font-semibold">
                {routes.map((route, index) => (
                  <li key={index}>
                    <Link href={route.link} onClick={() => setIsVisible(false)}>
                      {route.route === "Login" ? <Button className="mt-4">{route.route}</Button> : route.route}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Close Button */}
              <div className="absolute bottom-[4rem]">
                <motion.div
                  initial={{ rotateX: 35, opacity: 1 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: 35, opacity: 0 }} // Fixed exit opacity
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <RiCloseLargeLine size={32} onClick={() => setIsVisible(false)} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
