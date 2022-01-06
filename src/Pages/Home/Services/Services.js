import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './Service';
  
const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    return (
        <Container>
            <Typography sx={{fontWeight:400,m:2}} variant="h4" component="div">
              Our Awesome Services
            </Typography>
             
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
             services.map(service=><Service
             key={service._id}
             service={service}
             ></Service>)
         }
      </Grid>
    </Box>
        </Container>
    );
};

export default Services;