import axios from "axios";


const requestInterceptor = (config:any)=>{
const token = localStorage.getItem("token");

if(token){
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;

}
else{
    return config;  
}
}

const responseInterceptor =(response:any)=>{
    return response;
}


axios.interceptors.request.use(requestInterceptor,  (error) => Promise.reject(error));
axios.interceptors.response.use(responseInterceptor);


export default axios;