import axios from 'axios'
import { AiOutlineConsoleSql } from 'react-icons/ai';
const baseUrl = import.meta.env.VITE_SERVERURL;
axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL: `${baseUrl}`,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});

export function register (data:any){
    return axios.post(`${baseUrl}/users/signup`,data, {
        headers : {
            'Content-Type': 'application/json'
        }
    })
}


export function login (data : any){
    return axios.post(`${baseUrl}/users/login`,data, {
        headers : {
            'Content-Type': 'application/json'
        }
    })
}


export function getCookie(data: any){
    return axios.post(`${baseUrl}/users/getCookie`,data ,{
        withCredentials:true,
        headers : {
            'Content-Type': 'application/json'
        }
    })
    //console.log("INSIDE AXIOS FUNCTION")
    //console.log(data)
    return api.post("/users/getCookie",data);
}

 // GETS USER DATA 

 export function getUserData(){
    return axios.get(`${baseUrl}/users/me`,{
        withCredentials:true
    })
}

// more on withCredentials : true == https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
// if i am not wrong , it needs to be set as true is a 3rd party is creating a cookie for our domain
// withCredentials  never affects same-origin requests.

// FOR TESTING  : DONOT USE 
export function accessCookie (){
    return axios.post(`${baseUrl}/cookies`,{},{
        withCredentials :true
    })
}



// get user blogs 

export function getUserBlogs(){
    return axios.get(`${baseUrl}/blogs/me`,{
        withCredentials : true 
    })
}

export interface IPostUserBlog {
    title : string ; 
    description : string ;
    tags : string[];
}

export function postUserBlog(data:IPostUserBlog){
    return axios.post(`${baseUrl}/blogs/me`,data,{
        withCredentials : true,
    })
}

export function getUserBlog(id:string){
    return axios.get(`${baseUrl}/blogs/${id}`,{
        withCredentials : true 
    })
}

export function getAllBlogs(){
    return axios.get(`${baseUrl}/blogsAll`)
}

export function getAllBlogsWithLimit(index:string){
    return axios.get(`${baseUrl}/blogsAll?index=${index}`)
}

////// 

export function  setFirstlogin (){
    return axios.post(`${baseUrl}/users/toggleFistLogin`,{
        withCredentials : true 
    })
}

interface IsetUsertags{
    tags:string[];
}

export function setUserInterests(data:IsetUsertags) {
    return axios.post(`${baseUrl}/users/me/interest?firstlogin=${window.localStorage.getItem('firstlogin')}`,data,{
        withCredentials : true,
    })
}

export function  getUserInterests() {
    return axios.get(`${baseUrl}/users/me/interest`,{
        withCredentials : true,
    })
}

////



export function getSuggestedBlogs (index:string){
    return axios.get(`${baseUrl}/userInterested?index=${index}`,{
        withCredentials : true,
    })
}


export const getBookingUploadSign = () => {
    return axios.get(`${baseUrl}/cloudinary/booking`);
}


export const updateUserProfile = (data:any) =>{
    return axios.patch(`${baseUrl}/users/me/updateProfile`,data,{
        withCredentials : true,
    })
}

export const updateLike = (id : string)=>{
     const data = {
        blogId: id
     }
    return axios.post(`${baseUrl}/users/me/updateLike`, data ,{
        withCredentials : true,
    })
}

export const updateDisLike = (id : string)=>{
    const data = {
       blogId: id
    }
   return axios.post(`${baseUrl}/users/me/updateDislike`, data ,{
       withCredentials : true,
   })
}

export const deleteBlog  = (id: string)=>{
    return axios.delete(`${baseUrl}/blogs/me/:id`,{
        withCredentials : true,
    })
}

export const fetchDistinctTags = async ()=>{
    // console.log('Called')
   const data =  await axios.get(`${baseUrl}/blogs/get/AllTags`)
//    console.log(data)
   return data;
}