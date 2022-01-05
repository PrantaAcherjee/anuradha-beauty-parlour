import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './Service';
 
const services=[
    {
        id: 1,
        name:' Anti Age Face Treatment',
        description:'loreum loreum loreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreum',
        img:  'https://i.ibb.co/LxWpswH/anti.png',
        price:'TK 199'
    },
    {
        id:2,
        name:' Hair Color & Styling',
        description:'loreum loreum loreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreum',
        img:  'https://i.ibb.co/GW6vkJY/hair.png',
        price:'TK 99'
    },
    {
        id:3,
        name:' Skin Care Treatment',
        description:'loreum loreum loreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreum',
        img:  'https://i.ibb.co/GszRYzZ/skin.png',
        price:'TK 299'
    }
]
 
  
const Services = () => {
    return (
        <Container>
            <Typography sx={{fontWeight:400,m:2}} variant="h4" component="div">
              Our Awesome Services
            </Typography>
             
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
             services.map(service=><Service
             key={service.name}
             service={service}
             ></Service>)
         }
      </Grid>
    </Box>
        </Container>
    );
};

export default Services;