import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  Button  from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const{name,description,img,price}=props.service 
    return (
         
<Grid item xs={4} sm={4} md={4}>
<Card sx={{ minWidth: 300 ,border:0,boxShadow:0}}> 
<CardMedia
        component="img"
        style={{width:"auto",margin:"0 auto",height:"80px"}}
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography   component="div">
          {price}
        </Typography>
         <Typography variant="body2" color="text.secondary">
           {description}
        </Typography>
        <br />
        <Link style={{textDecoration:'none'}} to="/order">
        <Button variant='contained'>Order Now</Button>
        </Link>
      </CardContent>
      
        </Card>
        </Grid>
        
    );
};


export default Service;