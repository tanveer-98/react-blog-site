import React from 'react'
import ShowBlogs from '../ShowBlogs'
const index = () => {
  return (
    <div className="mt-[90px] w-[90%] h-full flex-col  flex justify-center mx-auto" >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <h1 className="text-6xl font-trispace text-center"> Welcome back!  <span className="inline-block w-full font-trispace text-3xl text-center text-gray-700">{window.localStorage.getItem('user')}</span></h1>
      <div>
         <h1 className="text-6xl text-center"> User Profile Image will go here</h1>
      </div>
      
      </div>

       <div className="my-10 flex justify-center items-center">
       <ShowBlogs/>
  
       </div>
      
 
        </div>
  )
}

export default index