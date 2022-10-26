import axios from 'axios'
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
    console.log("INSIDE AXIOS FUNCTION")
    console.log(data)
    return api.post("/users/getCookie",data);
}
// more on withCredentials : true == https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
// if i am not wrong , it needs to be set as true is a 3rd party is creating a cookie for our domain
// withCredentials  never affects same-origin requests.