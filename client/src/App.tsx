import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './input.css'
import {Routes,Route} from 'react-router-dom'
import Home from './routes/home'
import Navbar from './routes/navbar'
import Auth from './routes/auth'
import About from './routes/about'
import Contact from './routes/contact'
import Write from './routes/write'
import Login from './routes/login'
import Register from './routes/register'
import ViewBlog from './components/ViewBlog'
import Profile from './routes/profile'
function App() {

  return (
   <Routes>
  <Route index path="/" element = { <Auth />}/>
   <Route path = '/app' element = { <Navbar/> }>
     <Route  path="/app/home" element = { <Home/>}/>
     <Route  path="/app/about" element = { <About/>}/>
     <Route  path="/app/contact" element = { <Contact/>}/>
     <Route  path="/app/write" element = { <Write/>}/>
     <Route  path ="/app/blog/:id" element = {<ViewBlog/>}/>  
     <Route  path ="/app/profile" element = {<Profile/>}/>  
      
   </Route>
   <Route path = "login" element = { <Login/> }/>
   <Route path = "register" element = { <Register/> }/>
   
   </Routes>
  )
}

export default App
