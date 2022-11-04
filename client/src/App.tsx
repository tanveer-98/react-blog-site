import  React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import './input.css'
import {Routes,Route} from 'react-router-dom'
import Home from './routes/home'
import Navbar from './routes/navbar'
import Auth from './routes/auth'
import Login from './routes/login'
import Register from './routes/register'
import ViewBlog from './components/ViewBlog'
import Profile from './routes/profile'
import {useLocation} from 'react-router-dom'
import {useTransition , animated} from 'react-spring'

const LazyWrapper = (str:string) => React.lazy(()=>import(str));

const LazyAbout  = LazyWrapper('./routes/about')
const LazyContact = LazyWrapper('./routes/contact')
import Write from './routes/write';
const LazyLogin = LazyWrapper('./routes/login')
const LazyRegister = LazyWrapper('./routes/register')


const Wrapper = ({children}:any)=>{
  return <React.Suspense fallback="Loaading...">
    {children}
  </React.Suspense>
}

function App() {
  return (
   <Routes>
  <Route index path="/" element = { <Auth />}/>
   <Route path = '/app' element = { <Navbar/> }>
     <Route  path="/app/home" element = { <Home/>}/>
     <Route  path="/app/about" element = {
      <Wrapper>
        <LazyAbout/>
      </Wrapper>
       }/>
     <Route  path="/app/contact" element = {
       <Wrapper>
         <LazyContact/>
       </Wrapper>
       }/>
     <Route  path="/app/write" element = { 
<Write/>
}/>
     <Route  path ="/app/blog/:id" element = {<ViewBlog/>}/>  
     <Route  path ="/app/profile" element = {<Profile/>}/>  
   </Route>
   <Route path = "login" element = { 
   <Wrapper>
    <LazyLogin/>
   </Wrapper>
   }/>
   <Route path = "register" element = { 
   <Wrapper>
<LazyRegister/>
   </Wrapper>
    }/>
   </Routes>
  )
}

export default App
