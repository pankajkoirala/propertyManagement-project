import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getLocalStorage } from "../const/tokenStorage";
import { token_key } from "../const/base_URL";


const PrivateRouter = ({ component: Component, ...rest }) => {
  let authorize = getLocalStorage(token_key);
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
