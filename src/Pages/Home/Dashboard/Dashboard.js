import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton'; 
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
 import { Link } from 'react-router-dom';
 import dashIcon from '../../../Icon/headicon.png';
 
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import GiveReviews from './GiveReviews/GiveReviews';
import BookingList from './BookingList/BookingList';
import AddProducts from './AddProducts/AddProducts';
import UseAuth from './../../../Hooks/UseAuth';
import AdminRoute from './../AdminRoute/AdminRoute';
 
 

const drawerWidth = 200;
function Dashboard(props) {
  const {admin}= UseAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let {path,url}=useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    
  };

  const drawer = (
    <div>
      <Toolbar />
      
      <Divider />

    <Link style={{textDecoration:'none',color:'grey',fontWeight:'bold'}}  to={`${url}`}>Dashboard</Link>
      <br />
       
    <Link style={{textDecoration:'none',color:'grey',fontWeight:'bold'}} to={`${url}/review`}> Review </Link> 
    <br />
    <Link style={{textDecoration:'none',color:'grey',fontWeight:'bold'}} to={`${url}/bookinglist`}> Booking List </Link> 

    {
      admin && <Box>
        <Link style={{textDecoration:'none',color:'grey',fontWeight:'bold'}}  to={`${url}/makeAdmin`}>Make Admin</Link>
       <br /> 
        <Link style={{textDecoration:'none',color:'grey',fontWeight:'bold'}}  to={`${url}/addServices`}>Add Services</Link>

      </Box>
    }  
    </div>
  );

   const container = window !== undefined ? () => window().document.body : undefined;

  return(
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img style={{width:'10%'}} src={dashIcon} alt="" />
           
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin> 
        </AdminRoute>
         <Route path={`${path}/review`}>
          <GiveReviews></GiveReviews> 
         </Route>
         <Route path={`${path}/bookinglist`}>
           <BookingList></BookingList>
         </Route>
         <AdminRoute path={`${path}/addservices`}>
            <AddProducts></AddProducts>
         </AdminRoute>
      </Switch>
           
      </Box>
    </Box>
  );
}

 

export default Dashboard;
