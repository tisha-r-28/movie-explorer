import React from "react";
import { Outlet, Navigate } from "react-router";

function PrivateRoute (){
    const token = JSON.parse(localStorage.getItem('token'));

    return token ? <Outlet /> : <Navigate to='/login' replace />;

}

export default PrivateRoute;