import { Productmodel } from "../../Models/Product";
import { ProductDTO } from "../../Models/ProductDTO";

// const Product = ({id,title,price,description,thumbnail}:Productmodel) => {
    const Product = ({product}:ProductDTO) => { 
  return (
    <div>
        <h1>Product</h1>
        <div>{product.title}</div>
        <img src={product.thumbnail} height="100" width="100" alt={product.title} />
    </div>
  );
}

export default Product;