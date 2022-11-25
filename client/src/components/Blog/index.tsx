import React from 'react'
import { BlogType } from '../../store/blog/blogSlice'
interface IBlogProps{
    blog:BlogType
    readmore : string
}
import {Link} from 'react-router-dom'
import {changeDateFormat} from '../Functions/dateFormat'
const index = ({blog,readmore}:IBlogProps) => {
  return <div className="w-full p-6 rounded-lg shadow-lg bg-white m-2">
  <div className="flex gap-1 flex-row items-center w-full flex-wrap">
    <img src={blog.profileurl} className="shadow-sm shadow-black w-[40px] h-[40px] mr-2 rounded-full" alt="notset"/>
    <h5 className=" text-center text-xl font-bold  text-black ">{blog.title}</h5>
    <span className="text-gray-500 text-sm font-sans"> {changeDateFormat(blog.createdAt.split('T')[0])} </span>
  </div>
 
  <p className="p-ellipse truncate text-black  text-base mb-4 md:flex" dangerouslySetInnerHTML={{__html: blog.description.replace(/<img[^>]*>/g,"")}}/>
  

  <button type="button" className=" inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
    <Link to={`${readmore}${blog._id}`}> READ MORE</Link>
 
    </button>
</div>
}

export default index