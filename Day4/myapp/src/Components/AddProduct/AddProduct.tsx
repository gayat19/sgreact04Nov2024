import { Productmodel } from "../../Models/Product";
import {useState} from "react";
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { CreateProduct } from "../../Services/ProductService";
const AddProduct = () => {
    const [product, setProduct] = useState(new Productmodel());
    var onAddProduct = () => {
        CreateProduct(product).then((data) => {
         alert("Product Added Successfully "+data.title);  
    }, (error) => { alert("Error Occured") });
}
    return (

        <div>
            <h1>Add Product</h1>
            <form>
                <Chip label="Product Name" />
                <TextField id="standard-basic" onChange={(e)=>{setProduct({...product,title:e.target.value})}} label="Standard" variant="standard" />
                <br/><Chip label="Product Price" />
                <TextField id="standard-basic" onChange={(e)=>{setProduct({...product,price:parseInt(e.target.value)})} } label="Standard" variant="standard" />
                <br/><Chip label="Product Description" />
                <TextField id="standard-basic" onChange={(e)=>{setProduct({...product,description:e.target.value})} } label="Standard" variant="standard" />
                <br/><Button onClick={onAddProduct} variant="outlined">Outlined</Button>
            </form>
        </div>
    );
};

export default AddProduct;