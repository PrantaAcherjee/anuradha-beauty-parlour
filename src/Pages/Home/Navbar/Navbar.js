import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
 
const Navbar = () => {
   return (
    <Box  xs={12} sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
         <Typography variant="h6">Anuradha Beauty Parlour</Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
   );
 };
 
 export default Navbar;