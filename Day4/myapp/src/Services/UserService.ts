import axios from "axios";
import { UserModel } from "../Models/User";
import { BaseUrl } from "../Configs/Config";



    export function login(user:UserModel){
        return axios.post(`${BaseUrl}/users/login`, user).then(response => response.data);
        
    }
