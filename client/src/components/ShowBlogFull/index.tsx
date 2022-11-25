import React, { useEffect,useReducer, useLayoutEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  selectBlogList,
  selectLoading,
  fetchBlogs,
  postBlog,
  selectAllBlogs,
  fetchAllBlogs,
  fetchAllBlogs_withLimit,
  selectAllBlogsLimit,
  clearBlogs,
  BlogType,
} from "../../store/blog/blogSlice";
import LazyLoad from "react-lazyload";
import profile from "../../assets/editProfile.png";
import { Button } from "../Button";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ClipLoader ,PropagateLoader} from "react-spinners";
import { changeDateFormat } from "../Functions/dateFormat";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import Blogs from '../Blogs'
const baseUrl = import.meta.env.VITE_SERVERURL;
const index = () => {
  
  const blogs = useAppSelector(selectAllBlogsLimit);
  
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();
  const dispatch2 = useDispatch();
  const [noMore,setNoMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchMoreData = () => {
    setTimeout(()=>{
      dispatch(fetchAllBlogs_withLimit(currentPage + 1)).
      then(response=>{
        console.log("BLOGS:"+blogs);
        if(response.payload.length==0)
        setNoMore(false);
      })
    },1000)
    setCurrentPage(currentPage + 1);
  };
  useLayoutEffect(() => {
    dispatch(fetchAllBlogs_withLimit(currentPage))
  }, []);
  return (
    <div className=" w-full grid grid-cols-1 ">
      <InfiniteScroll
        style ={{padding:'5px',overflow:'hidden',marginBottom:'300px'}}
        
        dataLength={blogs.length}
        next={fetchMoreData}
        hasMore={noMore}
        loader={<h4 className=" font-bold mt-10 text-center"><ClipLoader color="#2196f2"/></h4>}
      >
         <Blogs readmore="/blog/" blogs={blogs}/>
      </InfiniteScroll>
    </div>
    
  );
};

{/* <Link to={`/blog/${element._id}`}> READ MORE</Link> */}

export default index;
