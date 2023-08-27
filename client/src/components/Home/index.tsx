import React, { useEffect } from "react";
import ShowBlogs from "../ShowBlogs";
import TEMPicon from "../../assets/usericon.webp";
import FirstLogin from "../../components/Home/modals/NewLogin";
import SuggestedBlogs from "../../components/SuggestedBlogs";
import background from "../../assets/background-headphone.jpg";
const index = () => {
  useEffect(() => {
    // console.log("PROFILE URL : " + window.sessionStorage.getItem("profileurl"));
  }, []);
  return (
    <div
      className={` mt-[90px] w-full h-full px-10 flex-col bg-darkImg  bg-scroll flex justify-center mx-auto`}
    >
      {/* <img src={background}  className={`absolute -z-20 top-0 left-0 w-full h-[600px] mix-blend-overlay object-cover transition-all ease-linear duration-150`} alt="" /> */}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-[40px]">
      <h1 className="text-6xl  font-abril text-center"> Welcome !  <span className=" font-abril inline-block w-full  text-3xl text-center text-gray-500">{window.localStorage.getItem('user')}</span></h1>
      <div>
         <h1 className="text-6xl  text-center font-sans "> <img className="rounded-full max-w-[200px] max-h-[200px]" src={`${window.sessionStorage.getItem('profileurl')}`}  alt ="icon not found"/></h1>
      </div>
      
      </div> */}

      <div>
        <h3 className=" mt-10  text-3xl md:text-5xl border-b-2 pb-5 text-black">
          Suggested Blogs
        </h3>
        <hr />
        <div
          id="div_1"
          className="w-full h-[600px] my-10 overflow-y-auto scrollbar scrollbar-thumb-blue-600 scrollbar-thumb-rounded-full "
        >
          <SuggestedBlogs />
        </div>
      </div>
      <div>
        <h3 className=" mt-10  text-3xl md:text-5xl border-b-2 pb-5 text-black">
          Your Blogs
        </h3>
        <hr />
        <div className="my-10 flex justify-center items-center">
          <ShowBlogs />
        </div>
      </div>
    </div>
  );
};

export default index;
