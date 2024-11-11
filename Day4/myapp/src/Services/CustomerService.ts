import { Customer } from "../Models/Customer";

export function CustomerService(customer:Customer){
    return {
        addCustomer: (customer: Customer) => {
            console.log('Customer added', customer);
        }
    }
}