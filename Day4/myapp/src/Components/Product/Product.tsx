import { Productmodel } from "../../Models/Product";

const Product = ({id,title,price,description,thumbnail}:Productmodel) => {
   
  return (
    <div>
        <h1>Product</h1>
        <div>{title}</div>
        <img src={thumbnail} height="100" width="100" alt={title} />
    </div>
  );
}

export default Product;