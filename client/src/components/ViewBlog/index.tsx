import React, { useEffect } from 'react'
import {useAppDispatch,useAppSelector} from '../../store'
import {selectBlog,selectLoading,fetchBlog} from '../../store/blog/blogSlice'
import {useParams} from 'react-router-dom'
import LikesDisLikes from '../LikeDislikes'
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
    <div className="flex rounded-md   justify-center items-center mt-[90px] h-screen pt-[100px]  max-w-[400px]  mx-auto  shadow-xl shadow-black text-darkGrayishBlue md:max-w-[1024px] sm:max-w-[600px] lg:max-w-5xl ">
      {
        blog && <div className=" w-full rounded-lg  m-2">
        <h3 className=" leading-tight mx-10  ">{blog.title}</h3>
        <span className="font-trispace text-2xl mx-10 ">Date Created : {blog.createdAt.split('T')[0]}</span>
        <p className="my-5 text-3xl mx-10" dangerouslySetInnerHTML={{__html: blog.description}}/>
      </div>
      }
      {/* <LikesDisLikes/> */}
    </div>
  )
}

export default index