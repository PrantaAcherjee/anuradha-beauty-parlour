import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import UseFirebase from '../../../Hooks/UseFirebase';
 
const Navbar = () => {
 const{user,logOut}= UseFirebase();  
   return (
    <Box style={{marginBottom:"50px"}} xs={12} sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
         <Typography variant="h6">Anuradha Beautician</Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
        </Typography>
        <Link style={{textDecoration:"none",color:"white"}} to="/home"> <Button color="inherit">Home</Button></Link>
        
         {
           user?.email?
           <Box>
             <Link style={{textDecoration:"none",color:"white"}} to="/dashboard"> <Button color="inherit">Dashboard</Button></Link>
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