import axios from 'axios'
const baseUrl = import.meta.env.VITE_SERVERURL_LOCAL;
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
    console.log("INSIDE AXIOS FUNCTION")
    console.log(data)
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
}

export function postUserBlog(data:IPostUserBlog){
    return axios.post(`${baseUrl}/blogs/me`,data,{
        withCredentials : true,
    })
}
