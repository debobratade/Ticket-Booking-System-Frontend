import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
    const data = localStorage.getItem('name')
  return data? <Outlet />: <Navigate to='/signup'/>
};

export default PrivateComponent;
