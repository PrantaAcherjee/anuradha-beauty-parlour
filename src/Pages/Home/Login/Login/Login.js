import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
 import UseAuth from '../../../../Hooks/UseAuth';
import { CircularProgress } from '@mui/material';
 
const Login = () => {
const [logInData,setLogInData]=useState({});
const location= useLocation();
const history=useHistory();

const {googleSignIn,loginUser,isLoading}=UseAuth();

const handleGoogleSignIn=()=>{
 googleSignIn(location,history);
 }

const handleOnChange=(e)=>{
    const field =e.target.name;
    const value=e.target.value;
    const newLogInData={...logInData};
    newLogInData[field]=value;
    setLogInData(newLogInData);
}
    const handleLogIn=e=>{
         loginUser(logInData.email,logInData.password,location,history);
         
        e.preventDefault();
        
    }
    return (
        <div>
             <h2>Please Login Here</h2>
            {!isLoading &&
                <form onSubmit={handleLogIn}>
              <TextField
                            sx={{ width: '30%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" 
                            required/>
                            <br />
              <TextField
                             sx={{ width: '30%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" 
                            required/>
                            <br />
                            <Button type='submit' variant='contained'>Submit</Button>
            </form>
             
            }
            {isLoading && <CircularProgress />}
            <br />
            <p> -----------OR-------------- </p>
            <Button onClick={handleGoogleSignIn} variant='contained'>Continue with google</Button>
            <br />
            <br />
            <Link style={{textDecoration:"none",color:""}} to="/register">
              Dont't have an account? Create an account
            </Link>
            
        </div>
    );
};

export default Login;