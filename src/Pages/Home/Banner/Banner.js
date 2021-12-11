import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bannerImg from "../../../Image/banner.png";


const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
        <Grid style={{marginTop:"25px"}} item xs={12} md={6}>
              <Typography variant="h3" style={{margin:"5px"}}>BEAUTY SALON
              <br />
              FOR EVERY WOMEN
              </Typography>  
                 
              <Typography variant='h6' sx={{fontSize:15,color:'gray',px:2,fontWeight:300,textAlign:'justify'}}> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione odit sed a quam laudantium debitis aliquid iste provident animi tempore, doloribus possimus itaque officiis!     
              </Typography>
              <br />
            <Button variant="contained">Explore More Here</Button>
        </Grid>
        <Grid item xs={12} md={6} style={{marginTop:"15px"}}>
              
            <img src={bannerImg} alt=""  style={{ height: "50vh", width: "55vh" }} /> 
        </Grid>
      </Grid>
    </Box>
    );
};

export default Banner;


 
