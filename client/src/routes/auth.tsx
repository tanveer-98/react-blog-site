import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import Auth from '../components/Auth'
const auth = () => {
  return (
    <>
     <Auth/>
      <Outlet/>
    </>
  )
}

export default auth