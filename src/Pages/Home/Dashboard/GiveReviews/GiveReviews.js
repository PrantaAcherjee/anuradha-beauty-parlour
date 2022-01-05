import React from 'react';
import './GiveReviews.css';
import TextField from '@mui/material/TextField';

const GiveReviews = () => {
    const handleAddReview=(e)=>{

        
    e.preventDefault();
    }
    return (
        <div className='review-section'>
          <h2>Drop Your Review Below</h2>
        <form onSubmit={handleAddReview}>
          <TextField
           
           style={{width:'40%'}}
          label="Name" variant="standard" />
          <br />
          <TextField
           
           style={{width:'40%'}} 
          label="Rating up to 5"
          type="number"          
          variant="standard"
          />
          <br />
          <br />
          <TextField
          
           style={{width:'40%'}}
          label="Comments"
          multiline
          variant="standard"
         />        
    </form>  
    </div>
    );
};

export default GiveReviews;