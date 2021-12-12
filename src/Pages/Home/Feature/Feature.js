import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import treatment from "../../../Image/treatment.png";

const Feature = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{paddingTop:"30px"}} columns={12}>
        <Grid item xs={12} md={6}>
           <img src={treatment} alt="" style={{height:"50vh",width:"55vh"}} />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h4" sx={{textAlign:"justify"}}>Let Us Handle Your
         <br /> Screen Professionally
         </Typography>
         <br />
         <Typography sx={{textAlign:"justify",fontSize:"15px",color:"gray",paddingRight:"20px"}}>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla deleniti sequi quidem, totam eveniet natus doloremque ipsa, itaque eum harum excepturi iure pariatur, numquam praesentium doloribus ipsam sunt iste similique aspernatur! Inventore repudiandae quae neque? Ipsum quisquam quibusdam veritatis temporibus eius sunt.
         </Typography>
         <br />
            <Box>
            <Grid container spacing={3}>
             <Grid item xs>
                <Typography variant='h4'>
                    500 +
                </Typography>
                <Typography variant='p'>
                     Happy Customers
                </Typography>
            </Grid>
            <Grid item xs>
                <Typography variant='h4'>
                    16 +
                </Typography>
                <Typography variant='p'>
                     Total Services
                </Typography>
            </Grid>
            </Grid>
            </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default Feature;