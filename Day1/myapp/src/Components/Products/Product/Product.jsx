import './Product.css';

const Product=(props)=>{
    const clickHandler=()=>{
        //alert("you clicked on "+props.product.id);
        props.onCartAdd(props.product.id);//raise an event to parent
    }
    return(
        <div className="card product-div" >
            <img className="card-img-top" src={props.product.thumbnail} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}</p>
                <button onClick={clickHandler}   className="btn btn-primary">buy @ &#x20b9;{props.product.price}</button>
            </div>
        </div>
    )

}
export default Product;

