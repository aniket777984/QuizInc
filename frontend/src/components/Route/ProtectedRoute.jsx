import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import {useAlert} from "react-alert";

const ProtectedRoute = ({isAdmin , isState , component: Component, ...rest }) => {


  const alert = useAlert();
  const { loading, isAuthenticated,user} = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Redirect to="/login" />;
            }

            if (isAdmin === true && user.role !== "admin") {
              alert.error("You are not an Admin")
              return <Redirect to="/login" />;
            }

            if (isState === true && user.state !== 0) {
              alert.error("You have already played the Ongoing Quiz");
              return <Redirect to="/login" />;
            }
            

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;