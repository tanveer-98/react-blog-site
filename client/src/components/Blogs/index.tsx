import React from 'react'
import { BlogType } from '../../store/blog/blogSlice'
import Blog from '../Blog'
interface IBlogProps{
    blogs:BlogType[],
    readmore:string
}
import LazyLoad from 'react-lazyload'
import {Link} from 'react-router-dom'
import {changeDateFormat} from '../Functions/dateFormat'
const index = ({blogs,readmore}:IBlogProps) => {
  return (
    <div className="p-5 w-full grid grid-cols-1 ">
      {blogs.map(element=><LazyLoad height={200} once offset={100}><Blog readmore={readmore} blog={element}/></LazyLoad>)}
    </div>
  )
}

export default index