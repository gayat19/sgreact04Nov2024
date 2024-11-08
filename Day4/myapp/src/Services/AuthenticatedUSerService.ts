import { BaseUrl } from "../Configs/Config";
import axios from "../Interceptors/APICallInterceptors";

export function checkToken(){
    /* providing access token in bearer */
axios.get(`${BaseUrl}/users/me`)
    .then(console.log);
}