import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectBlogList,
  selectLoading,
  fetchBlogs,
  postBlog,
  BlogType,
} from "../../store/blog/blogSlice";
import LazyLoad from "react-lazyload";
import profile from "../../assets/editProfile.png";

const Blogs = () => {
  const blogs = useAppSelector(selectBlogList);
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // loading
    dispatch(fetchBlogs())
      .then(() => {
        //console.log('successfully fetched booking')
        //console.log(blogs)
      })
      .catch((err) => {
        //console.log(err.message)
      });
  }, []);
  // const navigate = useNavigate();
  return (<div className="my-40 w-full h-full flex flex-col items-center justify-center">
     
   
   

    <div className="p-5 max-w-[460px] md:max-w-[768px] lg:max-w-[1024px] grid grid-cols-1 ">
      {blogs && blogs.length != 0 && loading != "pending" ? (
        blogs.map((element:BlogType) => {
          return (
            <LazyLoad height={200} once offset={100}>
              <div className="w-full p-6 rounded-lg shadow-lg bg-white m-2">
                <div className="flex gap-1 flex-row items-center w-full">
                  <img
                    src={element.profileurl}
                    className="w-[40px] h-[40px] rounded-full"
                    alt="notset"
                  />
                  <h5 className=" text-center text-xl font-medium  text-black ">
                    {element.title}
                  </h5>
                  <span className=""> {element.createdAt.split("T")[0]} </span>
                </div>
                <p className="p-ellipse truncate text-black  text-base mb-4 md:flex" dangerouslySetInnerHTML={{__html: element.description.replace(/<img[^>]*>/g,"")}}/> 
              </div>
            </LazyLoad>
          );
        })
      ) : blogs && blogs.length == 0 ? (
        <div className="flex justify-center items-center h-screen w-full">
          BLOGLIST EMPTY
        </div>
      ) : (
        ""
      )}
    </div>
      </div>
  );
};

export default Blogs;
