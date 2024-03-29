import React, { Fragment, useEffect, useState } from "react";
// import '../../styles/main.css'
import { Bars4Icon } from "@heroicons/react/24/solid";
// import logo from "/apex_logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Link as SLink, animateScroll as scroll } from "react-scroll";
import { useTransition, animated } from "react-spring";
import Blogs from "../ShowBlogFull";
// import
// import x_mark from "/cross.svg";/
import background from "../../assets/background-headphone.jpg";
import x_mark from "../../assets/x-mark-32.png";
import blogicon from "../../assets/blog.webp";
import { clearBlogs ,fetchDistictTags_,selectBlog,selectBlogTags, selectLoading} from "../../store/blog/blogSlice";
import { useDispatch } from "react-redux";
import Tag from "./shared/Tag";
import {useAppDispatch,useAppSelector} from '../../store'

const tags = [
{id:1,tag:'Gaming'},
{id:2,tag:'Food'},
{id:3,tag:'Cycling'},
{id:4,tag:'Cooking'},
{id:5,tag:'Apex Legends'},
{id:6,tag:'Politics'},
{id:7,tag:'stock market'}]


const index = () => {
  const blogTags = useAppSelector(selectBlogTags);
  const loading = useAppSelector(selectLoading)
  const [color, setColor] = useState(false);
  const [nav, setNav] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 400) {
      setColor(true);
    } else setColor(false);
  };
  const hoverNeonClass = {
    hover: "",
    linkstyle: `p-2 rounded-full w-[150px] ${
      color ? "text-white" : ""
    } hover:text-white text-center  hover:bg-[#2196f2] hover:shadow-neon transition-all ease-linear duration-300`,
  };

  // see if you can optimize this part in future
  window.addEventListener("scroll", changeColor);

  const transition = useTransition(nav, {
    from: { x: 0, y: -1000, opacity: 0.7 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -1000, opacity: 0.7 },
  });
  const handleToggle = () => {
    //console.log("clicked");
    setNav(!nav);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (window.localStorage.getItem("user") != "") navigate("app/home");
    else navigate("/login");
  };
  const dispatch = useDispatch();
  const async_dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(clearBlogs([]));
    async_dispatch(fetchDistictTags_()).then((response)=>{

      // console.log("BLOG TAGS"+blogTags)
    })
  }, []);
  return (
    <div className={``}>
      <img
        src={background}
        className={`${
          nav ? "blur-md" : " "
        } absolute top-0 left-0 w-full h-[600px] mix-blend-overlay object-cover transition-all ease-linear duration-150`}
        alt=""
      />
      <div
        className={`${
          color ? "bg-black shadow-md shadow-black" : ""
        } fixed opacity-90 z-10  transition-all ease-in-out  duration-300 top-0 left-0 w-full h-[80px]`}
      >
        <div className="px-2 flex justify-around  w-full h-full">
          <div className="flex justify-center items-center">
            <img
              src={blogicon}
              alt="/"
              onClick={handleNavigate}
              className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] hover:cursor-pointer hover:opacity-80"
            />
            <h3 className=" p-3  h-full text-white"> BlogWiz</h3>
          </div>

          <ul className="  hidden md:flex">
            <li
              onClick={handleToggle}
              className="font-abril font-bold text-2xl flex flex-row items-center hover:cursor-pointer p-2 text-white  hover:text-slate-400 ease-out duration-200"
            >
              <Link className={hoverNeonClass.linkstyle} to="login">
                LOGIN
              </Link>
            </li>
            <li className="font-abril text-2xl font-bold flex flex-row items-center hover:cursor-pointer p-2 text-white  hover:text-slate-400 ease-out duration-200">
              <Link className={hoverNeonClass.linkstyle} to="register">
                {" "}
                REGISTER
              </Link>
            </li>
          </ul>

          <div className="hoverclass md:hidden">
            <div className="w-full h-full flex justify-center items-center">
              <Bars4Icon
                className=" text-white h-[50px] w-[50px] hover:cursor-pointer p-2 hover:text-slate-400 ease-out duration-200 "
                onClick={handleToggle}
              />
            </div>
          </div>
          {transition((style, item) =>
            item ? (
              <animated.div
                className=" absolute z-10  top-0 left-0 w-full flex justify-center"
                style={style}
              >
                <ul
                  // className={
                  //   !nav ? "hidden" : "md:hidden absolute top-0 left-0 py-5 font-bold bg-zinc-100 w-full px-8"
                  // }

                  className="rounded-xl  m-1  py-5 font-bold bg-black w-[80%] px-8"
                >
                  <div className="flex  items-center justify-end">
                    <img
                      onClick={handleToggle}
                      src={x_mark}
                      alt="/"
                      className="w-7 hover:opacity-80 hover:cursor-pointer"
                    />
                  </div>
                  <li
                    onClick={handleToggle}
                    className=" font-abril text-xl text-white hover:cursor-pointer flex justify-center  border-zinc-300 w-full p-2 hover:text-slate-400 ease-out duration-200"
                  >
                    <Link className="font-abril" to="login">
                      LOGIN
                    </Link>
                  </li>
                  <li
                    onClick={handleToggle}
                    className="font-abril text-xl text-white hover:cursor-pointer flex justify-center  border-zinc-300 w-full p-2 hover:text-slate-400 ease-out duration-200"
                  >
                    <Link to="register"> REGISTER</Link>
                  </li>
                </ul>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>

        <hr
          className={`h-[1px] w-[90%] shadow-white shadow-sm rounded-lg mx-auto ${
            color ? "bg-white" : "bg-black"
          }my-2`}
        ></hr>
      </div>

      {/* randomized blogs until user logs in and sets the localStorage interests */}

      <div
        className={`${
          nav ? "blur-md" : " "
        } grid grid-cols-1 md:grid-cols-2 gap-4  mt-[650px] max-w-xl md:max-w-3xl mx-auto`}
      >
        <div className="">
          <h3 className="uppercase text-center"> Trending</h3>

          <div className="max-w-xl md:max-w-3xl flex  justify-center">
            <Blogs />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="   w-full h-screen ">
            <div className="flex items-center flex-col">
              <h3 className="text-center ">Topics that might interest you</h3>
              {/* LIST RECOMMENDED TOPICS AS TAGS */}
              <div className="flex flex-wrap gap-1">
                {
                  (blogTags && loading!="pending")? blogTags.map((tag,idx):any=>{ 
                    console.log("tag"+ tag);
                    return <Tag key={idx} tag={tag}/>}):" Loading ..."
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default index;
