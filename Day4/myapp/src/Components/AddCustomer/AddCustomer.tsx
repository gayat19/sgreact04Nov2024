import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { Customer } from "../../Models/Customer";
import { CustomerError } from "../../Models/CustomerError";
import { CustomerService } from "../../Services/CustomerService";


export default function AddCustomer(){
    const [customer, setCustomer] = useState(new Customer());
    const [customerError,setCustomerError] = useState<CustomerError>(new CustomerError());
    const [myCities,setMyCities] = useState<string[]>();
    const states=[
        {id: 1, name: 'Andhra Pradesh'},
        {id: 2, name: 'Arunachal Pradesh'},
        {id: 3, name: 'Assam'},
        {id: 4, name: 'Bihar'},
        {id: 5, name: 'Chhattisgarh'}
    ]
    const cities=[

        {id:1, city:['Vijayawada', 'Vishakhapatnam', 'Guntur']}, 
        {id:2, city:['Itanagar', 'Naharlagun', 'Pasighat']},
        {id:3, city:['Dispur', 'Guwahati', 'Silchar']},
        {id:4, city:['Patna', 'Gaya', 'Bhagalpur']},
        {id:5, city:['Raipur', 'Bhilai', 'Durg']}

    ]
    const checkChangeEmail=(e:any)=>{
        const email = e.target.value;
        if(email.length===0){

            setCustomerError({...customerError, emailError: 'Email is required'});
        }
        else if(!email.includes('@')){
            setCustomerError({...customerError, emailError: 'Email should contain @'});
        }
        else{

            setCustomer({...customer, email: email});
            setCustomerError({...customerError, emailError: ''});
    }
}
const getCities=(e:any)=>{
    console.log(e.target.value);
    const  stateId:any = e.target.value??0;
    for(let i=0;i<cities.length;i++){
        if(cities[i].id==stateId){
            setMyCities(cities[i].city);
        }
    }
}
const addCustomer=()=>{
    let isError=false;
    if(customerError.nameError.length!=0)
        isError=true;
    
         if(!isError){
          CustomerService(customer).addCustomer(customer);
         }
        else
            alert('Please enter valid data');
   }


    return (
        <section>
            <h1>Add Customer</h1>
            <form>
            <TextField
                error={customerError.nameError.length!=0}
                id="outlined-error-helper-text"
                label="Customer Name"
                placeholder="Enter Customer Name"
                onChange={(e)=>{
                    if(e.target.value.length<3){
                        setCustomerError({...customerError, nameError: 'Name should be atleast 3 characters'});
                    }
                    else{
                    setCustomer({...customer, name: e.target.value})
                    setCustomerError({...customerError, nameError: ''});
                    }
                }}
                helperText={customerError.nameError.length!=0?'Name is required':''}
                />
               <TextField
                error={customerError.emailError?.length!=0}
                id="outlined-error-helper-text"
                label="Customer Email"
                placeholder="sample@email.com"
                onChange={checkChangeEmail}
                helperText={customerError.emailError}
                />

            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select"
                label="State"
                defaultValue="-1"
                onChange={getCities}
                autoWidth
            >
                <MenuItem selected  value="-1">
                --select state--
                </MenuItem>
                {states?.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                        {option.name}
                        </MenuItem>
                    ))}
                
            </Select>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select"
                label="City"
                defaultValue="select"
                onChange={e=>customer.city=e.target.value}
                autoWidth
            >
                <MenuItem selected  value="select">
                --select city--
                </MenuItem>
                {myCities?.map((option) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                    ))}
                
            </Select>
            <Button onClick={addCustomer} variant="contained" color="secondary">
                Add Customer
                </Button>
            </form>
        </section>
    )
}