import { useEffect,useState } from "react";
export default function Cart(props){
    const [cart,setCart]=useState();
    useEffect(()=>{
        fetch("https://dummyjson.com/products/"+props.item.id)
        .then(response=>response.json(),err=>console.log("could not load data at this moment"))
        .then(data=>{
            setCart({title:data.title,
                quantity:props.item.qty,
                img:data.thumbnail
            });
    });
        
    },[props.item]);
    return(
        <section className='Cart'>
            <div>
                <ul>
                    {
                        cart?<div>
                           <img alt={cart.title} src={cart.img} height="100" width="100"/>-  {cart.title} - {cart.quantity}
                        </div>
                        :null
                    }
                </ul>   
            </div>
        </section>
    );
}