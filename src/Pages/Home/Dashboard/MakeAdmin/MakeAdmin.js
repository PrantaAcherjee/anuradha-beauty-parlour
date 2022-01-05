import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const MakeAdmin = () => {
  const handleMakeAdmin=(e)=>{

    e.preventDefault();
  }
    return (
        <div>
          <h2>Make An admin</h2>  
          <form onSubmit={handleMakeAdmin}>
          <TextField
          type='email' 
          style={{width:'40%'}}
          label="E-mail" variant="outlined" /> 
          <Button 
          type='submit'
          style={{margin:'6px'}}  variant="contained">Make It</Button>
          </form>
        </div>
    );
};

export default MakeAdmin;