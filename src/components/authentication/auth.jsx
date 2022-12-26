import React from "react";
import { Navigate, Outlet } from "react-router";

const auth = () => {
  const authenticate = { userToken: localStorage.getItem("token") };
  
  return authenticate.userToken ? <Outlet /> : <Navigate to={"/login"} />
};

export default auth;
