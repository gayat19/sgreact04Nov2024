import { useState } from "react";
import { UserModel } from "../../Models/User";
import { login } from "../../Services/UserService";
import { Button, TextField } from "@mui/material";
import { checkToken } from "../../Services/AuthenticatedUSerService";

export function Login() {
    const [user, setUser] = useState<UserModel>(new UserModel());
    var onLogin = () => {
       login(user).then((data) => {
            alert("Login Successful. Welcome  "+data.firstName+" "+data.lastName);  
            localStorage.setItem("token",data.accessToken)
            checkToken();
        }, (error) => { alert("Error Occured");console.log(error); });
    }
    return (
        <div>
            <h1>Login</h1>
            <form>
            <TextField
                required
                id="outlined-required"
                label="Username"
                placeholder="username"
                onChange={(e)=>{setUser({...user,username:e.target.value})}}
                />
                 <TextField
                required
                id="outlined-required"
                label="Password"
                type="password"
                onChange={(e)=>{setUser({...user,password:e.target.value})}}
                />
                <br/><br/>
                <Button onClick={onLogin} variant="contained" color="success">Login
                </Button>
            </form>
        </div>
    )
}