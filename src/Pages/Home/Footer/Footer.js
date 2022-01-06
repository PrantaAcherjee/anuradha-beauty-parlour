import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './Footer.css'
const Footer = () => {
    return (
        <Box className='footer-section' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={4}>
         <Box style={{padding:'5px'}}>
         <Typography>H#0004(on floor),Road (#00) Mohakahali,
              <br />
            New City, Dhaka, Bangladesh.
          </Typography>
         </Box>
        </Grid>
        <Grid item md={2}>
            <Box style={{textAlign:'justify',           padding:'5px'}}>
             <Typography>Company</Typography>
             <Typography>About</Typography>
            <Typography>Project</Typography>
             <Typography>Our Teams</Typography>
            <Typography>Terms & Condition</Typography>
             <Typography>Submiting Listing</Typography>
            </Box>
        
        </Grid>
        <Grid item md={2} >
        <Box style={{textAlign:'justify',padding:'5px'}}>
        <Typography>Quick Links</Typography>  
        <Typography>salse</Typography>  
        <Typography>Contacts</Typography>  
        <Typography>Blogs</Typography>  
        <Typography>Summary</Typography>  
        </Box>
        </Grid>
        <Grid item md={4}>
        <Typography style={{textAlign:'justify',paddingRight:'10px'}}>About Us <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam natus atque iusto dolores possimus. Alias fugit laborum voluptas? Commodi quisquam ab dolores voluptatibus minus iste deserunt ducimus exercitationem at doloremque! </Typography>
         
        
        </Grid>
      </Grid>
    </Box>
    );
};

export default Footer;