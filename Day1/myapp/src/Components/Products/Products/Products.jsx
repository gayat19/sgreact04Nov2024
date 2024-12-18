import { useEffect,useState } from "react";
import Product from "../Product/Product";
import Cart from "../../Cart/Cart";
import Button from '@mui/material/Button';

export function Products(props){
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);

useEffect(()=>{
  fetch("https://dummyjson.com/products")
  .then(response=>response.json(),err=>alert("could not load data at this moment"))
  .then(data=>setProducts(data["products"]));
},[]);
//parenrt's event handler- receives the data
const addToCart=(id)=>{
    console.log("adding to cart "+id);
    if(cart.find(item=>item.id===id)){
        const newCart=cart.map(item=>{
            if(item.id===id){
                return {...item,qty:item.qty+1};
            }
            return item;
        });
        setCart(newCart);
        return;
    }
    else
        setCart([...cart,{id:id,qty:1}]);
}
const buy=()=>{
    const cartdata={products:[...cart],userId:1};
    console.log(cartdata);
    fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartdata)
      })
      .then(res => res.json())
      .then(console.log);
}
    return(
        <section className='Products'>
            <div>
                <h2>Cart</h2>
                <Button onClick={buy} variant="contained">Buy products</Button>
                    {
                        cart.length>0?
                            cart.map((item)=><Cart key={item.id} item={item}/>)
                        :
                            <li>Cart is empty</li>
                    }
            </div>
            <h2>Products</h2>
            <div>
            {
                products.length>0?
                    products.map((product,index)=><Product onCartAdd={addToCart} key={index} product={product}/>)
                :
                    <h3>loading...</h3>
            }
            </div>
            
        </section>
    );
}

export default Products;