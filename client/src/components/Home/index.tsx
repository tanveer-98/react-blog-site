import React from 'react'
import ShowBlogs from '../ShowBlogs'
import  TEMPicon from '../../assets/usericon.webp'
const index = () => {
  return (
    <div className="mt-[90px] w-[90%] h-full flex-col  flex justify-center mx-auto" >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-[40px]">
      <h1 className="text-6xl font-abril text-center"> Welcome !  <span className=" font-abril inline-block w-full  text-3xl text-center text-gray-700">{window.localStorage.getItem('user')}</span></h1>
      <div>
         <h1 className="text-6xl text-center font-abril"> <img src={TEMPicon}  alt ="icon not found"/></h1>
      </div>
      
      </div>
      <h3 className=" mt-10 font-abril text-4xl md:text-5xl border-b-2 pb-5 border-collapse border-black"> Suggested Blogs </h3>
      <div className="w-full h-[600px] overflow-x-auto">

      </div>
      <h3 className="font-abril text-4xl md:text-5xl border-b-2 pb-5 border-collapse border-black"> {window.localStorage.getItem('user')}'s Blogs</h3>
       <div className="my-10 flex justify-center items-center">
        
       <ShowBlogs/>
  
       </div>
      
 
        </div>
  )
}

export default index