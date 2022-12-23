import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return (
    <div>
      <h1>PrivateRoute</h1>
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
