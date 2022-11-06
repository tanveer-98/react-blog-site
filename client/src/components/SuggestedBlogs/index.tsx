import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectLoading,
  fetchAllBlogs_withLimit,
  selectAllBlogsLimit,
  selectBlogsSuggested,
  fetchSuggestedBlogs
} from "../../store/blog/blogSlice";
import LazyLoad from "react-lazyload";
import profile from "../../assets/editProfile.png";
import { Button } from "../Button";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ClipLoader, PropagateLoader } from "react-spinners";
const baseUrl = import.meta.env.VITE_SERVERURL;
const Blogs = () => {
  const blogs = useAppSelector(selectBlogsSuggested);
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();
  const dispatch2 = useDispatch();
  const [noMore,setNoMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchMoreData = () => {
    setTimeout(()=>{
      dispatch(fetchSuggestedBlogs(currentPage + 1)).
      then(response=>{
        if(response.payload.length==0)
        setNoMore(false);
      })
    },1500)
    setCurrentPage(currentPage + 1);
  };
  useLayoutEffect(() => {
    dispatch(fetchSuggestedBlogs(currentPage))
    console.log("suggested blogs")
    console.log(blogs)
  }, []);
  return (
    <div id="targetDiv" className=" w-full grid grid-cols-1 overflow-y-auto scrollbar scrollbar-thumb-blue-600">
      <InfiniteScroll
        scrollableTarget="div_1"
        style ={{padding:'5px',overflowX:'hidden',marginBottom:'300px'}}
        
        dataLength={blogs.length}
        next={fetchMoreData}
        hasMore={noMore}
        loader={<h4 className=" font-bold mt-10 text-center"><ClipLoader color="#2196f2"/></h4>}
      >
        {blogs.map((element:any) => (
          <div className="my-2 w-[90%] mx-auto p-6 rounded-lg">
            <div className="my-2 flex gap-1 flex-row items-center w-full">
              <img src={profile} className="w-[40px] h-[40px]" alt="notset" />
              <span className="text-[18px]"> {element.ownerName} </span>
            </div>
            <h5 className=" my-2 font-sans font-bold text-left text-[24px] text-black ">
              {element.title}
            </h5>
            <div>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <Link to={`/blog/${element._id}`}> READ MORE</Link>
              </button>
              <span className="pl-5 text-xl">
                {" "}
                {element.createdAt.split("T")[0]}{" "}
              </span>
            </div>
            <hr className="mt-5"></hr>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};


export default Blogs;
