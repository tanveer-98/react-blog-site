import React, { Fragment, useState } from "react";
// import '../../styles/main.css'
import { Bars4Icon } from "@heroicons/react/24/solid";
// import logo from "/apex_logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Link as SLink, animateScroll as scroll } from "react-scroll";
// import x_mark from "/cross.svg";/
import x_mark from "../../assets/x-mark-32.png";
import blogicon from "../../assets/blog.webp";
const index = () => {
  const [nav, setNav] = useState(false);
  const handleToggle = () => {
    console.log("clicked");
    setNav(!nav);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("blog/home");
  };
  return (
    <Fragment>
      <div className="fixed top-0 left-0 w-full h-[80px]  bg-gradient-to-b from-zinc-300 to-slate-100 drop-shadow-lg">
        <div className="px-2 flex justify-around  w-full h-full">
          <div className="flex justify-center items-center">
            <img
              src={blogicon}
              alt="/"
              onClick={handleNavigate}
              className="w-[70px] h-[70px]  hover:cursor-pointer hover:opacity-80"
            />
          </div>

          <ul className="hidden md:flex">
            <li
              
              className=" font-bold flex flex-row items-center hover:cursor-pointer p-2 hover:text-slate-400 ease-out duration-200"
            >
              HOME
            </li>
            <li  className=" font-bold flex flex-row items-center hover:cursor-pointer p-2 hover:text-slate-400 ease-out duration-200">
              ABOUT
            </li>
            <li className=" font-bold flex flex-row items-center hover:cursor-pointer p-2 hover:text-slate-400 ease-out duration-200">
              WRITE
            </li>
            <li  className=" font-bold flex flex-row items-center hover:cursor-pointer p-2 hover:text-slate-400 ease-out duration-200">
              CONTACT
            </li>
          </ul>

         

          <div className="hoverclass md:hidden">
            {nav ? (
              <div className="flex  h-full justify-center items-center"><img onClick={handleToggle} src={x_mark} alt="/" className="w-7 hover:opacity-80 hover:cursor-pointer" /></div>
            ) : (
              <div className="w-full h-full flex justify-center items-center">
<Bars4Icon
                className="h-[50px] w-[50px] hover:cursor-pointer p-2 hover:text-slate-400 ease-out duration-200 "
                onClick={handleToggle}
              />
              </div>
              
            )}
          </div>
        </div>
        <ul
          className={
            !nav ? "hidden" : "md:hidden absolute py-5 font-bold bg-zinc-100 w-full px-8"
          }
        >
          <li onClick = {handleToggle} className="hover:cursor-pointer flex justify-center border-b-2 border-zinc-300 w-full p-2 hover:text-slate-400 ease-out duration-200">
            HOME
          </li>
          <li className="hover:cursor-pointer flex justify-center border-b-2 border-zinc-300 w-full p-2 hover:text-slate-400 ease-out duration-200">
            ABOUT
          </li>
          <li className="hover:cursor-pointer flex justify-center border-b-2 border-zinc-300 w-full p-2 hover:text-slate-400 ease-out duration-200">
            WRITE
          </li>
          <li className=" hover:cursor-pointer flex justify-center border-b-2 border-zinc-300 w-full p-2 hover:text-slate-400 ease-out duration-200">
            CONTACT
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default index;
