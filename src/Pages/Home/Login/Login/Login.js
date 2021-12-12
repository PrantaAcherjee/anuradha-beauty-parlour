import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../../../../Hooks/UseFirebase';
 

const Login = () => {
    const {googleSignIn}=UseFirebase();
    const handleGoogleSignIn=()=>{
        googleSignIn();
    }
    return (
        <div>
            <br />
            <h2>Please Login Here</h2>
            <br />
            <p> -----------OR-------------- </p>
            <Button onClick={handleGoogleSignIn} variant='contained'>Google Login</Button>
            <br />
            <br />
            <Link style={{textDecoration:"none",color:""}} to="/register">
              Dont't have an account? Create an account
            </Link>
            
        </div>
    );
};

export default Login;