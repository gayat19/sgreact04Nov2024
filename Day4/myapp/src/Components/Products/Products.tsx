import { useEffect ,useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Product from "../Product/Product";
import { Productmodel } from "../../Models/Product";
import { GetProducts } from "../../Services/ProductService";


export default function Products() {
    const [products, setProducts] = useState([]);   
    useEffect(()=>{
        // GetProducts()
        // .then(json=>{
        //     setProducts(json.products);
        //     //console.log(products)
        // })
         GetProducts()
        .then(json=>{
           // setProducts(json.products);
            console.log(products)
        })

        
    },[])
  return (
    <div>
      <h1>Products</h1>
      {
        products?.length>0 ?
            products.map((product:Productmodel)=>(
                // <Product key={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} id={product.id} description={product.description} />
                <Product key={product.id} product={product} />
            ))
            :  <CircularProgress />
      }
    </div>
  );
}