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
    <div className="my-[100px] max-w-[400px]  sm:max-w-[600px] h-screen  md:max-w-[800px] lg:max-w-[1240px] mx-auto flex justify-center items-center ">
      {
        blog && <div className="block p-6 rounded-lg shadow-lg bg-slate-800 max-w-sm m-2">
        <h4 className="text-xl leading-tight font-medium mb-2 text-white ">{blog.title}</h4>
        <span className="font-trispace text-white ">Date Created : {blog.createdAt.split('T')[0]}</span>
        <div className="text-white  text-base mb-4" dangerouslySetInnerHTML={{__html: blog.description}}/>

    
      </div>
      }
    </div>
  )
}

export default index