import React, { useEffect, useLayoutEffect, useState } from 'react'
import {useAppDispatch,useAppSelector} from '../../store'
import {selectBlogList,selectLoading,fetchBlogs,postBlog} from '../../store/blog/blogSlice'
const Blogs = () => {
  const blogs = useAppSelector(selectBlogList);

  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchBlogs())
    .then(()=>{
      console.log('successfully fetched booking')
      console.log(blogs)
    })
    .catch(err=>{
      console.log(err.message)
    })
  },[])
  return (
    <div className="p-5">
      {
        blogs.map(element=>{
          return (
            <div className="flex justify-center">
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{element.title}</h5>
    <p className="text-gray-700 text-base mb-4">
      { element.description}
    </p>
    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
  </div>
</div>
          )
        })
      }
    </div>
  )
}

export default Blogs