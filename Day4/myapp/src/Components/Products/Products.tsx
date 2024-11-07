import { useEffect ,useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Product from "../Product/Product";
import { Productmodel } from "../../Models/Product";

export default function Products() {
    const [products, setProducts] = useState([]);   
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(json=>{
            setProducts(json.products);
            //console.log(products)
        })

        
    },[])
  return (
    <div>
      <h1>Products</h1>
      {
        products?.length>0 ?
            products.map((product:Productmodel)=>(
                <Product key={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} id={product.id} description={product.description} />
            ))
            :  <CircularProgress />
      }
    </div>
  );
}