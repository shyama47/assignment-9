import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import Loading from './Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    // console.log(user)
    const location =useLocation();
    // console.log(location)
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location?.pathname} to='/login'></Navigate>
};

export default PrivateRoute;