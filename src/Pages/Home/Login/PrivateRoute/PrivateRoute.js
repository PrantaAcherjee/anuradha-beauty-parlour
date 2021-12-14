import React from 'react';
import { CircularProgress } from '@mui/material';
import { Redirect, Route } from 'react-router-dom';
import UseAuth from '../../../../Hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading}=UseAuth();
    if (isLoading) { return <CircularProgress /> }
    return (
        
        <Route
        {...rest}
        render={({ location }) =>
          user.email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;