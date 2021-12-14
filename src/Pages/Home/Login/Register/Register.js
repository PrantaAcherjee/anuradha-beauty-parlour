import React from 'react';
import { Link,useLocation, useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
 
import { useState } from 'react';
import UseAuth from '../../../../Hooks/UseAuth';
import { CircularProgress } from '@mui/material';
const Register = () => {
const [registerData,setRegisterData]=useState({});
const {registerWithEmailPassword,googleSignIn,isLoading}=UseAuth();
const location= useLocation();
const history=useHistory();


const handleGoogleSignIn=()=>{
    googleSignIn(location,history);
}

const handleOnChange=(e)=>{
    const field=e.target.name;
    const value=e.target.value;
    const newRegisterData={...registerData};
    newRegisterData[field]=value;
    setRegisterData(newRegisterData);
}
const handleOnRegister=e=>{
    if(registerData.password!==registerData.password2){
        alert('Your password did not match');
        return;
    }
    registerWithEmailPassword(registerData.email,registerData.password,registerData.name,history);
    e.target.reset();
    e.preventDefault();
}

    return (
        <div>
            <br /> 
            <h2>Create an account</h2>
            {!isLoading &&
                <form onSubmit={handleOnRegister}>
                <TextField style={{width:"25%"}} id="standard-basic" label="Name" variant="standard"
                type="text"
                name='name'
                onChange={handleOnChange}
                required />
                <br />
                <TextField style={{width:"25%"}}
                id="standard-basic" label="Email" variant="standard"
                type="Email"
                name='email'
                onChange={handleOnChange}
                required />
                <br />
                <TextField style={{width:"25%"}}
                id="filled-password-input"
                label="Password"
                type="password"
                name='password'
                onChange={handleOnChange}
                variant="standard"
                required
                />
                <br />
                <TextField style={{width:"25%"}}
                id="filled-password-input"
                label="Confirm Password"
                type="password"
                name='password2'
                onChange={handleOnChange}
                variant="standard"
                required
                />
                <br />
                <br />
                <Button variant='contained' type="submit">Create an account</Button>
                </form>
            }
            {isLoading && <CircularProgress />}
            <br />
            <Link style={{textDecoration:"none"}} to="/login">
            Already have an account? Login
            </Link>
             
            <p>----------OR----------</p>
            <Button onClick={handleGoogleSignIn} variant='contained'>Continue with Google</Button>
        </div>
    );
};

export default Register;