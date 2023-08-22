import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  selectIsLoggedIn,
  selectAuthUser,
} from "../../app-redux/modules/auth/authSlice";
import { ProtectedRouteProps } from "../../common/typings/auth";

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  component: Component,
  type,
  ...rest
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authUser = useSelector(selectAuthUser);
  const redirectTo = type === "admin" ? "/admin-login" : "/login";

  if (!isLoggedIn || authUser.type !== type) {
    return <Redirect to={redirectTo} />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;
