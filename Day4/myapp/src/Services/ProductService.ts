
import axios from "axios";
import { BaseUrl } from "../Configs/Config";
import { Productmodel } from "../Models/Product";

// export function GetProducts() {
//     return fetch(`${BaseUrl}/products`).then(response => response.json());
// }
export function GetProducts() {
    return axios.get(`${BaseUrl}/products`).then(response => response);
}

export function CreateProduct(product:Productmodel) {
    return axios.post(`${BaseUrl}/products/add`, product).then(response => response.data);
}