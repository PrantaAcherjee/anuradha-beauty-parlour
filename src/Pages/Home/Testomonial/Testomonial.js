import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Testomonial = () => {
    const [testimonial,setTestimonial]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setTestimonial(data));
    },[])
    return (
<div style={{margin:'70px'}}>
     <Typography variant='h4'>Testimonials</Typography> 
     <br />      
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
        testimonial.map(test=><Grid item sm={6} md={4} key={test._id}> 
           <Typography>Name: {test.name}</Typography>
            
           
            <Rating name="half-rating-read" defaultValue={test.ratings} precision={0.5} readOnly />
             
            
           <Typography>{test.description}</Typography>
           </Grid>)
          }
        
      </Grid>
    </Box>  
 </div>
    );
};

export default Testomonial;