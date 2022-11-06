import React, { useEffect } from 'react'
import {useAppDispatch,useAppSelector} from '../../store'
import {selectBlog,selectLoading,fetchBlog} from '../../store/blog/blogSlice'
import {useParams} from 'react-router-dom'
interface IViewBlogProp{
    id:string;
}
const index = () => {
    const {id} = useParams<any>();
    const blog = useAppSelector(selectBlog)
    const loading = useAppSelector(selectLoading);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchBlog(id!))
        //console.log(blog)
    },[])
  return (
    <div className="pt-[100px] text-black max-w-[400px]  sm:max-w-[600px] h-screen  md:max-w-[1024px] lg:max-w-[1240px] mx-auto flex justify-center items-center ">
      {
        blog && <div className="block rounded-lg  m-2">
        <h4 className="text-5xl leading-tight font-medium mb-2  ">{blog.title}</h4>
        <span className="font-trispace text-2xl ">Date Created : {blog.createdAt.split('T')[0]}</span>
        <div className=" my-5 text-3xl" dangerouslySetInnerHTML={{__html: blog.description}}/>
      </div>
      }
    </div>
  )
}

export default index