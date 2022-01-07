import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
 
const MakeAdmin = () => {
  const [email,setEmail]=useState('');
  const [success,setSuccess]=useState(false);

  const handleOnChange=(e)=>{
    setEmail(e.target.value)
  }

  const handleMakeAdmin=(e)=>{
    const user={email}
    fetch('https://morning-reef-69283.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount){
             setSuccess(true)
          }
        })
    e.target.reset();
    e.preventDefault();
  }
    return (
        <div>
          <h2>Make An admin</h2>  
          <form onSubmit={handleMakeAdmin}>
          <TextField
          onChange={handleOnChange}
          type='email' 
          style={{width:'40%'}}
          label="E-mail" variant="outlined" /> 
          <Button 
          type='submit'
          style={{margin:'6px'}}  variant="contained">Make It</Button>
          </form>
          <br />
          {success &&<Alert severity="success">Made an admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;