import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth";

const PrivateRoute = () => {
  //let loggedIn = true;

  if (isLoggedIn()) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }

  //   return (
  //     <div>
  //       <h1>PrivateRoute</h1>
  //       <Outlet />
  //     </div>
  //   );
};

export default PrivateRoute;
