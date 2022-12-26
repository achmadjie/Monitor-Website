import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthLogin = () => {
  const authenticate = { userToken: localStorage.getItem("token") };

  return authenticate.userToken ? <Navigate to={"/monitoring"} /> : <Outlet />;
};

export default AuthLogin;
