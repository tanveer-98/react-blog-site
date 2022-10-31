import React, { Fragment, useMemo, useState } from "react";
// import '../../styles/main.css'
import { Bars4Icon } from "@heroicons/react/24/solid";
// import logo from "/apex_logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Link as SLink, animateScroll as scroll } from "react-scroll";
// import x_mark from "/cross.svg";/
import x_mark from "../../assets/x-mark-32.png";
import blogicon from "../../assets/blog.webp";
import background from '../../assets/background.jpg'
import { useTransition ,animated } from "react-spring";
const index = () => {
  const [nav, setNav] = useState(false);
  const [color,setColor] = useState(false);

  const changeColor = ()=>{
    if(window.scrollY >= 90){
      setColor(true);
    }
    else setColor(false)
  }
 // see if you can optimize this part in future
  window.addEventListener('scroll',changeColor)

  
  const handleToggle = () => {
    console.log("clicked");
    setNav(!nav);
    window.localStorage.setItem('user','')
  };
  const transition = useTransition(nav,{
    from : {x:0,y:-1500, opacity : 0.7},
    enter : {x:0,y:0,opacity : 1},
    leave : {x:0,y:-1500, opacity : 0.7}
  })
  const navigate = useNavigate();
  const handleNavigate = () => {
    if(window.localStorage.getItem('user')!='')
    navigate("/app/home");
  };
  return (
    <Fragment>
     <div className="" >
      {/* <div className={` bg-white absolute top-0 left-0 z-10 w-screen h-screen mix-blend-overlay object-cover `}/> */}
      <div className={` ${color?'bg-orange-300 text-white shadow-md':''} fixed z-10 top-0 left-0 w-full h-[80px]  transition-all duration-100 ease-linear`}>
        <div className="px-2 flex justify-around  w-full h-full">
          <div className="flex justify-center items-center">
            <img
              src={blogicon}
              alt="/"
              onClick={handleNavigate}
              className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] hover:cursor-pointer hover:opacity-80"
            />
          </div>

          <ul className="hidden md:flex ">
            <li
              
              className="text-2xl font-bold flex flex-row items-center text-white  hover:cursor-pointer p-2 hover:text-slate-400 ease-linear duration-200"
            >
              <Link className={`${color?'text-white':'text-orange-400'} font-trispace p-2 rounded-full w-[150px] hover:text-white text-center hover:bg-orange-500 transition-all ease-linear duration-300`} to ="/app/home">HOME</Link> 
            </li>
            <li  className=" text-2xl font-bold flex flex-row items-center text-white  hover:cursor-pointer p-2 hover:text-slate-400 ease-linear duration-200">
            <Link className={`${color?'text-white':'text-orange-400'} font-trispace p-2 rounded-full w-[150px] hover:text-white text-center hover:bg-orange-500 transition-all ease-linear duration-300`} to ="/app/about">ABOUT</Link> 
            </li>
            <li className=" text-2xl font-bold flex flex-row items-center text-white  hover:cursor-pointer p-2 hover:text-slate-400 ease-linear duration-200">
               <Link className={`${color?'text-white':'text-orange-400'} font-trispace p-2 rounded-full w-[150px] hover:text-white text-center hover:bg-orange-500 transition-all ease-linear duration-300`} to ="/app/write">WRITE</Link> 
            </li>
            <li  className=" text-2xl font-bold flex flex-row items-center text-white  hover:cursor-pointer p-2 hover:text-slate-400 ease-linear duration-200">
            <Link className={`${color?'text-white':'text-orange-400'} font-trispace p-2 rounded-full w-[150px] hover:text-white text-center hover:bg-orange-500 transition-all ease-linear duration-300`} to ="/app/contact">CONTACT</Link> 
            </li>
          </ul>

          <ul className="  hidden md:flex">
            <li
              onClick={handleToggle}
              className="  font-bold text-2xl flex flex-row items-center hover:cursor-pointer p-2 text-white  hover:text-slate-400 ease-linear duration-200"
            >
              <Link className={`${color?'text-white':'text-orange-400'} font-trispace p-2 rounded-full w-[150px] hover:text-white text-center hover:bg-orange-500 transition-all ease-linear duration-300`} to="/">SIGN OUT</Link>
            </li>
          </ul>

          <div className="hoverclass md:hidden">
           
              <div className="w-full h-full flex justify-center items-center">
<Bars4Icon
                className=" text-orange-500 h-[50px] w-[50px] hover:cursor-pointer p-2 hover:text-orange-300 ease-linear duration-200 "
                onClick={handleToggle}
              />
              </div>
              
            
          </div>
        </div>
       
       {
        transition((style,item)=>
          item? 
          
          <animated.div className="md:hidden absolute z-50 top-0 left-0 w-full flex justify-center" style = {style}>
            <ul
      
          // className={
          //   !nav ? "hidden" : "md:hidden absolute top-0 left-0 py-5 font-bold bg-zinc-150 w-full px-8"
          // }

          className="rounded-xl  m-5  py-5 font-bold bg-orange-200 w-[80%] px-8"
        >
           <div className="flex items-center justify-end"><img onClick={handleToggle} src={x_mark} alt="/" className="w-7 hover:opacity-80 hover:cursor-pointer" /></div>
          <li onClick = {handleToggle} className="font-trispace  text-orange-600 hover:cursor-pointer flex justify-center  border-zinc-300 w-full p-2 hover:text-slate-400 ease-linear duration-200">
          <Link to ="/app/home">HOME</Link> 
          </li>
          <li onClick = {handleToggle} className="font-trispace text-orange-600 hover:cursor-pointer flex justify-center  border-zinc-300 w-full p-2 hover:text-slate-400 ease-linear duration-200">
          <Link to ="/app/about">ABOUT</Link> 
          </li>
          <li onClick = {handleToggle} className="font-trispace text-orange-600 hover:cursor-pointer flex justify-center border-zinc-300 w-full p-2 hover:text-slate-400 ease-linear duration-200">
          <Link to ="/app/write">WRITE</Link> 
          </li>
          <li onClick = {handleToggle} className=" font-trispace text-orange-600 hover:cursor-pointer flex justify-center  border-zinc-300 w-full p-2 hover:text-slate-400 ease-linear duration-200">
          <Link to ="/app/contact">CONTACT</Link> 
          </li>
          <li
              onClick={()=>{
                handleToggle();
                window.localStorage.setItem('user','');
                navigate('')
              }}
              className=" text-orange-600 hover:cursor-pointer flex justify-center  border-zinc-300 w-full p-2 hover:text-slate-400 ease-linear duration-200"
            >
              <Link to="/">SIGN OUT</Link>
            </li>
        </ul>
  
          </animated.div>
          : ''
        )
       }
        
      </div>
    </div>
    <div className={`${nav?'blur-md':' '} h-screen  w-full shadow-md`}>
    <Outlet/>
    
    </div>
    </Fragment>
  );
};

export default index;
