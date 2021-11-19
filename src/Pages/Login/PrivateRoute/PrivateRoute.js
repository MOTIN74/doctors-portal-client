import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }
    let location = useLocation
    if (user.email) {
        return children;
    } 
    return <Navigate to="/login" state={{from: location}} />

   
};

export default PrivateRoute;