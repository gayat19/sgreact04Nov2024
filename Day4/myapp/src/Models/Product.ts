export class Productmodel {
    id:number;
    title: string;
    price: number;
    description: string;
    thumbnail: string;
    
    constructor(id:number =0,title: string ="", price: number=0, description: string="", thumbnail: string=""){
        this.id=id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.thumbnail = thumbnail;
    }
}