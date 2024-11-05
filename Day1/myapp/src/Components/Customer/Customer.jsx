import { useState } from 'react';
import './Customer.css';

const Customer=()=>{
  
    // const customer = {
    //     name: 'John Doe',
    //     age: 25,
    //     email: 'johnDoe@gmail.com',
    //     image:'https://www.w3schools.com/w3images/avatar2.png'
    // }
    //const [cname,setCname] =  useState("NO Name");
    const [customer,setCustomer]= useState( {
        name: 'John Doe',
        age: 25,
        email: 'johnDoe@gmail.com',
        image:'https://www.w3schools.com/w3images/avatar2.png'
    });
    const clickHandler = ()=>{
        alert('Button clicked');
       setCustomer({...customer,name:customer.name});
        console.log(customer);
    }
    const changeAge=(e)=>{
        //setCname("Name changed");
        //console.log(e.target.value);
        //setCname(e.target.value);
        setCustomer({...customer,age:e.target.value});
    }
    const changeName=(e)=>{
        //setCname("Name changed");
        //console.log(e.target);
        //setCname(e.target.value);
        setCustomer({...customer,name:e.target.value});
    }
    const changeCustomer=(e)=>{
        console.log(e.target.name);
        var propname = e.target.name;
        if(propname==="age")
            setCustomer({...customer,age:e.target.value});
        else if(propname==="name")
            setCustomer({...customer,name:e.target.value});
    }
    return(

        <section className='Customer'>
            <div>
            <input type='text' name="name" onChange={changeCustomer} value={customer.name}/>
            <input type='number' name="age" onChange={changeCustomer} value={customer.age}/>
            </div>
            
            <div>
                {JSON.stringify(customer)}
            </div>
            <div className="card customer-div" >
                <img className="card-img-top" src={customer.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{customer.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={clickHandler}  className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
            <div className="card customer-div" >
                <img className="card-img-top" src={customer.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{customer.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button  className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </section>
    );
}

export default Customer;