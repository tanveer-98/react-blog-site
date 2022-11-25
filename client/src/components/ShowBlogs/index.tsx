import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import {useAppDispatch,useAppSelector} from '../../store'
import {selectBlogList,selectLoading,fetchBlogs,postBlog} from '../../store/blog/blogSlice'
import Blogs from '../Blogs/index'
import profile from '../../assets/editProfile.png'
import {changeDateFormat} from '../Functions/dateFormat'
const index = () => {
  const blogs = useAppSelector(selectBlogList);
 const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch()
  useEffect(()=>{
    // loading
    dispatch(fetchBlogs())
    .then(()=>{
      //console.log('successfully fetched booking')
      //console.log(blogs)
    })
    .catch(err=>{
      //console.log(err.message)
    })
  },[])
  // const navigate = useNavigate();
  return (
      <>
      {(blogs && blogs.length!=0 && loading!='pending')  ?<Blogs readmore="/app/blog/" blogs={blogs}/>: (blogs && blogs.length==0)?<div className='flex justify-center items-center h-screen w-full'>BLOGLIST EMPTY</div>:""}
      </>
  )
}

export default index