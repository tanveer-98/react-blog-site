import React, { Fragment, useEffect, useMemo, useState } from "react";
// import '../../styles/main.css'
import { Bars4Icon, WindowIcon } from "@heroicons/react/24/solid";
// import logo from "/apex_logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Link as SLink, animateScroll as scroll } from "react-scroll";
// import x_mark from "/cross.svg";/
import {RiAccountCircleFill} from 'react-icons/ri'
import x_mark from "../../assets/x-mark-32.png";
import blogicon from "../../assets/blog.webp";
import background from '../../assets/background.jpg'
import editprofile from '../../assets/editProfile.png'
import profile from '../../assets/profile.png'
import { useTransition ,animated } from "react-spring";
import FirstLogin from '../../components/Home/modals/NewLogin'
import { useDispatch } from "react-redux";
import { clearBlogs } from "../../store/blog/blogSlice";


const index = () => {

  const [nav, setNav] = useState(false);
  const [color,setColor] = useState(false);
  const [profileModal,setProfile] = useState(false);
  const [tagmodal,setTagModal] = useState(JSON.parse(window.localStorage.getItem('firstlogin')!));
  const [skiptagmodal,setskipTagModal] = useState(false);
  const changeColor = ()=>{
    if(window.scrollY >= 90){
      setColor(true);
    }
    else setColor(false)
  }
  const check = ()=>{
    console.log("tagmodal: " + typeof tagmodal + "skiptagmodal: "+skiptagmodal)
    return (tagmodal==true && skiptagmodal==false)
  }
  const dispatch = useDispatch();
 // see if you can optimize this part in future
  window.addEventListener('scroll',changeColor)
  const handleToggle = () => {
    //console.log("clicked");
    setNav(!nav);
    // window.localStorage.setItem('user','')
  };
  const transition = useTransition(nav,{
    from : {x:0,y:-1500, opacity : 0.7},
    enter : {x:0,y:0,opacity : 1},
    leave : {x:0,y:-1500, opacity : 0.7},
   
  })
  const transitionProfile = useTransition(profileModal,{
    from : {x:1500,y:0, opacity : 0.7},
    enter : {x:0,y:0,opacity : 1},
    leave : {x:1500,y:0, opacity : 0.7,delay:200}
  })
  const navigate = useNavigate();
  const handleNavigate = () => {
    if(window.localStorage.getItem('user')!='')
    navigate("/app/home");
  };
  const toggleProfile = ()=>{
    setProfile(!profileModal);
  }
  const styles  = {
    link : "font-abril rounded-full hover:shadow-neon hover:text-white hover:rounded-full  text-white hover:cursor-pointer  flex justify-center  hover:bg-[#2196f3] border-zinc-300 w-[100%]  w-[160px] ease-linear duration-300"
  }
  const handletoggleskip = ()=>{
    setskipTagModal(!skiptagmodal)
  }
  const handletoggletagmodal = ()=>{
    setTagModal(!tagmodal)
  }
  return (
    <Fragment>
     <div className="" >
      {/* <div className={` bg-white absolute top-0 left-0 z-10 w-screen h-screen mix-blend-overlay object-cover `}/> */}
      <div className={` ${color?'bg-black shadow-lg shadow-slate-600 text-white':''} fixed z-10 top-0 left-0 w-full h-[90px]  transition-all duration-100 ease-linear`}>
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
              
              className="text-2xl font-bold flex flex-row items-center text-white  hover:cursor-pointer m-[20px] hover:text-slate-400 ease-linear duration-200"
            >
              <Link className={`${color?'text-white':'text-black'} ${styles.link} `} to ="/app/home">HOME</Link> 
            </li>
            <li  className=" text-2xl font-bold flex flex-row items-center text-white  hover:cursor-pointer p-2 hover:text-slate-400 ease-linear duration-200">
            <Link className={`${color?'text-white':'text-black'} ${styles.link} `} to ="/app/about">ABOUT</Link> 
            </li>
            <li className=" text-2xl font-bold flex flex-row items-center text-white  hover:cursor-pointer p-2 hover:text-slate-400 ease-linear duration-200">
               <Link className={`${color?'text-white':'text-black'} ${styles.link} `} to ="/app/write">WRITE</Link> 
            </li>
            <li  className=" text-2xl font-bold flex flex-row items-center text-white  hover:cursor-pointer p-2 hover:text-slate-400 ease-linear duration-200">
            <Link className={`${color?'text-white':'text-black'} ${styles.link}`} to ="/app/contact">CONTACT</Link> 
            </li>
         
          </ul>
   <li  className="hidden md:flex text-2xl font-bold  md:flex-row items-center text-white  hover:cursor-pointer p-2 hover:text-slate-400 ease-linear duration-100">
               <img  onClick={toggleProfile} className="shadow-md hover:shadow-orange-500 rounded-full transition-all duration-200 ease-in-out" src = {profile} height={"60px"} width={"60px"}/>
            </li>
         

          <ul className="  hidden md:flex">
            {/* <li
             onClick={()=>{
              handleToggle();
              window.localStorage.setItem('user','');
              navigate('/')
            }}
              
              className="  font-bold text-2xl flex flex-row items-center hover:cursor-pointer p-2 text-white  hover:text-slate-400 ease-linear duration-200"
            >
              <Link className={`${color?'text-white':'text-orange-400'} `} to="/">SIGN OUT</Link>
            </li> */}
          </ul>

          <div className="hoverclass md:hidden flex">
           
              <div className="w-full h-full flex justify-center items-center">
<Bars4Icon
                className=" text-orange-500 h-[50px] w-[50px] hover:cursor-pointer p-2 hover:text-orange-300 ease-linear duration-200 "
                onClick={handleToggle}
              />
              </div>
              
              <li  className="flex text-2xl font-bold  md:flex-row items-center text-white  hover:cursor-pointer p-2 hover:text-slate-400 ease-linear duration-100">
               <img  onClick={toggleProfile} className="shadow-md hover:shadow-orange-500 rounded-full transition-all duration-200 ease-in-out" src = {profile} height={"60px"} width={"60px"}/>
            </li>
          </div>
        </div>
       
       {
        transition((style,item)=>
          item? 
          
          <animated.div className=" absolute z-50 top-0 left-0 w-full flex flex-col justify-center gap-10" style = {style}>
            <ul
      
          // className={
          //   !nav ? "hidden" : "md:hidden absolute top-0 left-0 py-5 font-bold bg-zinc-150 w-full px-8"
          // }

          className="rounded-xl  m-5  py-5 font-bold bg-black shadow-lg shadow-white w-[80%] px-8"
        >
           <div className="flex items-center justify-end"><img onClick={handleToggle} src={x_mark} alt="/" className="w-7 hover:opacity-80 hover:cursor-pointer" /></div>
          <li  className="font-trispace flex justify-center">
          <Link onClick = {handleToggle}  className={styles.link} to ="/app/home">HOME</Link> 
          </li>
          <li  className="font-trispace flex justify-center">
          <Link  onClick = {handleToggle} className={styles.link} to ="/app/about">ABOUT</Link> 
          </li>
          <li  className="font-trispace flex justify-center">
          <Link onClick = {handleToggle} className={styles.link} to ="/app/write">WRITE</Link> 
          </li>
          <li className=" font-trispace flex justify-center">
          <Link  onClick = {handleToggle}  className={styles.link}to ="/app/contact">CONTACT</Link> 
          </li>
          
        </ul>
  
          </animated.div>
          : ''
        )
       }
       {
      // (profileModal && window.location.href !='http://127.0.0.1:5173/app/profile')?
      transitionProfile((style,item)=> item?<animated.div className="absolute top-[100%] right-[10%] width-[320px]" style = {style}>
      
      <div className="text-white bg-black shadow-lg shadow-black opacity-95 m-[10px]  rounded-lg">
        <div className="flex items-center mb-2 p-5">
          <img  className="w-[60px] rounded-[50%] mr-[15px]" src = {profile}/>
          <h2 className="text-2xl"> {window.localStorage.getItem('user')}</h2>
          
        </div>
        <hr className="border-0 h-[1px] mb-2 w-[100%] bg-[#ccc] "/>
        <Link onClick={()=>toggleProfile()} to="profile" className="p-4 transition-all duration-200 hover:bg-slate-400 hover:text-black flex items-center no-underline">
            <img className=" mr-[15px] p-[8px] bg-[#e5e5e5] w-[40px] rounded-[50%] " src={editprofile} alt="" />
            <p className="w-[100%] ">Edit Profile</p>
            <span className="font-bold">&gt;</span>
          </Link>
          <Link onClick={()=>toggleProfile()} to="profile" className="p-4 transition-all duration-200 hover:bg-slate-400 hover:text-black flex items-center no-underline">
            <img className=" mr-[15px] p-[8px] bg-[#e5e5e5] w-[40px] rounded-[50%] " src={editprofile} alt="" />
            <p className="w-[100%] ">My Blogs</p>
            <span className="font-bold">&gt;</span>
          </Link>
        
        <ul>
        <li
              onClick={()=>{
                // handleToggle();
                window.localStorage.setItem('user','');
                window.localStorage.setItem('isAdmin',"false");
                dispatch(clearBlogs([]))
                navigate('/')

              }}
              className="font-trispace text-white hover:cursor-pointer flex justify-center  border-zinc-300 w-full p-2 hover:text-slate-400 ease-linear duration-200"
            >
              <Link to="/">SIGN OUT</Link>
            </li>

        </ul>
      
      </div>
      
     
          </animated.div> :"")
          // :""
    }
      </div>
      
    </div>
    { check()?<FirstLogin  toggletagmodal={handletoggletagmodal} toggleskip ={handletoggleskip}/>:""}
    <div className={`${nav || check() ?'blur-md':' '}   w-full overflow-x-hidden`}>
    <Outlet/>
    </div>
    
    
    </Fragment>
  );
};

export default index;
