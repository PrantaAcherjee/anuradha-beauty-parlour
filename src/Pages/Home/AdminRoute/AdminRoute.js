import React from 'react';
import { CircularProgress } from '@mui/material';
import { Redirect, Route } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user,isLoading,admin}=UseAuth();
    if (isLoading) { return <CircularProgress /> }
    return (
        
        <Route
        {...rest}
        render={({ location }) =>
          user.email && admin? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;