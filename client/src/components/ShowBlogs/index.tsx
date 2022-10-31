import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import {useAppDispatch,useAppSelector} from '../../store'
import {selectBlogList,selectLoading,fetchBlogs,postBlog} from '../../store/blog/blogSlice'
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
  const navigate = useNavigate();
  return (
    <div className="p-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
      {(blogs && loading!='pending')  ? 
        blogs.map(element=>{
          return (
            <div className="">
  <div className="block p-6 rounded-lg shadow-lg bg-slate-800 max-w-sm m-2">
    <h5 className="text-xl leading-tight font-medium mb-2 text-white ">{element.title}</h5>
    <div className="text-white  text-base mb-4" dangerouslySetInnerHTML={{__html: element.description}}/>
    

    <button type="button" className=" inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
      <Link to={`/app/blog/${element._id}`}> READ MORE</Link>
   
      </button>
  </div>
</div>
          )
        }):""
      }
    </div>
  )
}

export default Blogs