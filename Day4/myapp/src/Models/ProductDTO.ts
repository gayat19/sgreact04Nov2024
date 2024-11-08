import { Productmodel } from "./Product";

export class ProductDTO{
    //product:Productmodel;
    constructor(public product:Productmodel=new Productmodel()) {
        this.product=product;
    }
}