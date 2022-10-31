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
    })
  return (
    <div className="max-w-[400px]  sm:max-w-[600px]   md:max-w-[800px] lg:max-w-[1240px] mx-auto ">
      {
        (blog && loading=='succeded') ? <div>FETCHED BLOG</div>:""
      }
    </div>
  )
}

export default index