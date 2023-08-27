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
import Blogs from '../Blogs'
import LazyLoad from "react-lazyload";
import profile from "../../assets/editProfile.png";
import { Button } from "../Button";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ClipLoader, PropagateLoader } from "react-spinners";
const baseUrl = import.meta.env.VITE_SERVERURL;
const index = () => {
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
    // console.log("suggested blogs")
    // console.log(blogs)
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
        <Blogs blogs = {blogs} readmore ="/blog/" />
      </InfiniteScroll>
    </div>
  );
};

{/* <Link to={`/blog/${element._id}`}> READ MORE</Link> */}


export default index