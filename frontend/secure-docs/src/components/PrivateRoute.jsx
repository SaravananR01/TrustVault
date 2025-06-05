import React from 'react'
import { useEffect } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';

function PrivateRoute() {
    const isLoggedIn=localStorage.getItem('token');
    const navigate=useNavigate();

    useEffect(()=>{
        if (!isLoggedIn){
            navigate('/login');
        }
    },[isLoggedIn,navigate]);

  return isLoggedIn ? <Outlet/> :null;
}

export default PrivateRoute
