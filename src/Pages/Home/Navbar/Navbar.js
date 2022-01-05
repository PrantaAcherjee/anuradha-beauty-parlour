import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import UseFirebase from '../../../Hooks/UseFirebase';
import headerIcon from '../../../Icon/headicon.png';

const Navbar = () => {
 const{user,logOut}= UseFirebase();  
   return (
    <Box style={{marginBottom:"50px"}} xs={12} sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
          <img style={{width:'15%'}} src={headerIcon} alt="" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
        </Typography>
        <Link style={{textDecoration:"none",color:"white"}} to="/home"> <Button color="inherit">Home</Button></Link>
        <Link style={{textDecoration:"none",color:"white"}} to="/dashboard"> <Button color="inherit">Dashboard</Button></Link>
         {
           user?.email?
           <Box>
  
             <Button onClick={logOut} color="inherit">Logout</Button>
           </Box>
           :
           <Link style={{textDecoration:'none',color:'white'}} to="/login">
           <Button color="inherit">Login</Button>
           </Link>
         }
          
          
         
        
      </Toolbar>
    </AppBar>
  </Box>
   );
 };
 
 export default Navbar;