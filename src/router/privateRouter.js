import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { getLocalStorage } from "../const/tokenStorage";

const PrivateRouter = ({ component: Component, ...rest }) => {
  let authorize = getLocalStorage("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        authorize ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRouter;
