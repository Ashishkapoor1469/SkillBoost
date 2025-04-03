'use client'

import React, { useState } from "react";
import { Button } from "../ui/button";
import { PiBookOpenThin } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface RouteType {
  route: string;
  Link: string;
}

type Routes = RouteType[];

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const routes: Routes = [
    { route: "Courses", Link: "/" },
    { route: "Pricing", Link: "/courses" },
    { route: "About", Link: "/pricing" },
    { route: "Login", Link: "/login" },
  ];

  return (
<div className={`flex fixed justify-between items-center h-12 border w-full px-5 py-7`}>
      <div className="left flex gap-1 h-full items-center font-bold"><PiBookOpenThin className="text-3xl"/> EduPro</div>
      <nav className="flex gap-x-4 justify-center items-center">
        {/* Desktop Links with Underline Animation */}
        <ul className="hidden sm:flex gap-x-6">
          {routes.map((route, index) => (
            <li
              key={index}
              className="text-md relative"
              
            >
              <Link href={route.Link}>{route.route}</Link>
              <motion.div
                className="absolute left-0 bottom-0 h-[2px] bg-blue-600 w-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                variants={{
                  hover: { scaleX: 1, transition: { duration: 0.3 } },
                  initial: { scaleX: 0 },
                }}
              />
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex">
          <Button className="hidden sm:flex">Login</Button>
          <motion.button
            className="sm:hidden p-2 rounded-full"
            onClick={handleVisible}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CiMenuFries />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 bg-black/50 z-50 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsVisible(false)}
          >
            <motion.div
              className="fixed inset-0 bg-white w-full h-full flex flex-col items-center justify-center gap-6"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                className="absolute top-5 right-5 text-3xl"
                onClick={() => setIsVisible(false)}
              >
                ✕
              </Button>

              <ul className="flex flex-col items-center gap-4 text-lg font-semibold">
                {routes.map((route, index) => (
                  <li
                    key={index}
                  >
                    <Link href={route.Link} onClick={() => setIsVisible(false)}>
                      {route.route}
                    </Link>
                    <motion.div
                      className="absolute left-0 bottom-0 h-[2px] bg-blue-600 w-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      variants={{
                        hover: { scaleX: 1, transition: { duration: 0.3 } },
                        initial: { scaleX: 0 },
                      }}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
