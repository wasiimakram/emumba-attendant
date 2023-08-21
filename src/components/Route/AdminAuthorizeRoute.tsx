import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { selectIsLoggedIn, selectAuthUser } from '../../app-redux/modules/auth/authSlice';
import { message } from 'antd';

interface AdminAuthorizeRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}
const AdminAuthorizeRoute: FC<AdminAuthorizeRouteProps> = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authUser = useSelector(selectAuthUser);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          if (authUser?.type === 'admin') {
            return <Component {...props} />;
          } else {
            if (authUser) {
              message.error('You do not have permission to access this page');
            }
            return <Redirect to="/admin-login" />;
          }
        } else {
          return <Redirect to="/admin-login" />;
        }
      }}
    />
  );
};

export default AdminAuthorizeRoute;
