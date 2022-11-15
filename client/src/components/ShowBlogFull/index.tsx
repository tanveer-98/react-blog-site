import React, { useEffect, useLayoutEffect, useState } from "react";
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
} from "../../store/blog/blogSlice";
import LazyLoad from "react-lazyload";
import profile from "../../assets/editProfile.png";
import { Button } from "../Button";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ClipLoader ,PropagateLoader} from "react-spinners";
import { changeDateFormat } from "../Functions/dateFormat";
// const Blogs = () => {

//   const blogs = useAppSelector(selectAllBlogsLimit);
//  const loading = useAppSelector(selectLoading);
//  const [percall,setpercall] = useState(5);
//  const [counter,setCounter] = useState(1);
//   const dispatch = useAppDispatch()
//   useEffect(()=>{
//     dispatch(fetchAllBlogs_withLimit(counter))
//     .then(()=>{
//       //console.log('successfully fetched booking')
//       //console.log(blogs)
//     })
//     .catch(err=>{

//       //console.log(err.message)
//     })
//   },[counter])
//   const loadMoreHandler = () => {
//     setCounter(counter+1);
//   }
//   // const navigate = useNavigate();
//   return (
//     <div className="p-5 w-full grid grid-cols-1">
//       {(blogs && blogs.length!=0 && loading!='pending')  ?
//         blogs.map(element=>{
//           return (
//             <LazyLoad height={200} once offset={100}>
//   <div className="my-2 w-full p-6 rounded-lg  m-2">
//     <div className="my-2 flex gap-1 flex-row items-center w-full">
//       <img src={profile} className="w-[40px] h-[40px]" alt="notset"/>
//       <span className="text-[18px]"> {element.ownerName} </span>

//     </div>
//     <h5 className=" my-2 font-sans font-bold text-left text-[24px] text-black ">{element.title}</h5>

//     {/* {//console.log(element.description.replace(/"<p>"+"<img[^>]*>"+"</p>"/g,"").match(/<p[^>]*>/).input)} */}
//     {/* {element!=null ? <div className="hidden md:flex text-black  text-base mb-4" dangerouslySetInnerHTML={{__html:  element.description.replace(/<img[^>]*>/g,"")}} />:""} */}

//     <div>
//     <button type="button" className=" inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
//       <Link to={`/app/blog/${element._id}`}> READ MORE</Link>

//       </button>
//     <span className="pl-5 text-xl"> {element.createdAt.split('T')[0]} </span>
//     </div>

//   </div>
// </LazyLoad>
//           )
//         }): (blogs && blogs.length==0)?<div className='flex justify-center items-center h-screen w-full'>BLOGLIST EMPTY</div>:""
//       }

//       <div className="flex justify-center ">

//       <Button  onClick={loadMoreHandler} className="mt-10 w-[400px] font-abril shadow-black shadow-lg border-[3px] border-transparent  text-white  hover:shadow-black  hover:border-[3px] bg-black hover:border-white">LOAD MORE</Button>
//       </div>

//     </div>
//   )
// }
const baseUrl = import.meta.env.VITE_SERVERURL;
const Blogs = () => {
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
        if(response.payload.length==0)
        setNoMore(false);
      })
    },1500)
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
         {blogs.map((element:any) => (
          <div className="my-2 w-[90%] mx-auto p-6 rounded-lg">
            <div className="my-2 flex gap-1 flex-row items-center w-full">
              <img src={profile} className="w-[40px] h-[40px]" alt="notset" />
              <span className="text-[18px]"> {element.ownerName} </span>
            </div>
            <h5 className=" my-2 font-sans font-bold text-left text-[24px] text-black ">
              {element.title}
            </h5>
            <>
             <p className="truncate md:flex text-black  text-base mb-4" dangerouslySetInnerHTML={{__html:  element.description.replace(/<img[^>]*>/g,"")}} ></p>
            </>

            <div>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <Link to={`/blog/${element._id}`}> READ MORE</Link>
              </button>
              <span className="pl-5 text-sm text-gray-400">
                {" "}
                {changeDateFormat(element.createdAt.split("T")[0])}{" "}
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
