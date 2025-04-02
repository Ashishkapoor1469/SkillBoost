import React from "react";
import { Button } from "../ui/button";
import { PiBookOpenThin } from "react-icons/pi";
import Link from "next/link";

const navbar: React.FC = () => {
  const routes = [
    { route:"Courses",Link:"/" },
    { route: "Pricing",Link:"courses" },
    { route: "About",Link:"pricing" },
    { route: "Log In",Link:"login" },
  ]
const backgroundcolor ="border"
  return (
    <div className={`flex justify-between fixed items-center h-12 ${backgroundcolor} w-full px-5 py-7`}>
      <div className="left flex gap-1 h-full items-center font-extrabold"><PiBookOpenThin className="text-3xl"/> EduPro</div>
      <div className="right flex gap-5 h-full items-center text-black text-sm font-semibold">
        {routes.map((route, index) => {
          return <Link href={route.Link} key={index}>{route.route}</Link>;
        })}
    <Button>Sign Up</Button>
      </div>
    </div>
  );
};
export default navbar;
