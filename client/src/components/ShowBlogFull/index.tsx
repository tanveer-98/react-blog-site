import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import {useAppDispatch,useAppSelector} from '../../store'
import {selectBlogList,selectLoading,fetchBlogs,postBlog} from '../../store/blog/blogSlice'
import LazyLoad from 'react-lazyload'


const Blogs = () => {
  const blogs = useAppSelector(selectBlogList);
 const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch()
  useEffect(()=>{
    // loading
    dispatch(fetchBlogs())
    .then(()=>{
      console.log('successfully fetched booking')
      console.log(blogs)
    })
    .catch(err=>{
      
      console.log(err.message)
    })
  },[])
  // const navigate = useNavigate();
  return (
    <div className="p-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
      {(blogs && blogs.length!=0 && loading!='pending')  ? 
        blogs.map(element=>{
          return (
            <LazyLoad height={200} once offset={100}>
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-2">
    <h5 className="text-xl leading-tight font-medium mb-2 text-black ">{element.title}</h5>
    <div className="text-black  text-base mb-4" dangerouslySetInnerHTML={{__html: element.description}}/>
    

    <button type="button" className=" inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
      <Link to={`/app/blog/${element._id}`}> READ MORE</Link>
   
      </button>
  </div>
</LazyLoad>
          )
        }): (blogs && blogs.length==0)?<div className='flex justify-center items-center h-screen w-full'>BLOGLIST EMPTY</div>:""
      }
    </div>
  )
}

export default Blogs