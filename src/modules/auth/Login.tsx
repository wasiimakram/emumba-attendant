import React, { useEffect, useState, useCallback } from "react";
import { Layout, Typography } from "antd";
import { useSelector } from "react-redux";
import { message } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import {
  selectAuthError,
  selectAuthSuccess,
  selectAuthUser,
  selectIsFirstLogin,
  selectIsLoggedIn,
} from "../../app-redux/modules/auth/authSlice";
import "./auth.scss";
import { PageForm } from "./common/Form";

const { Content } = Layout;
const { Title } = Typography;

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;
  const pageTitle = pathname === "/admin-login" ? "Admin" : "User";
  const isUser = pathname === "/admin-login" ? false : true;
  const [loginAttempted, setLoginAttempted] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authUser = useSelector(selectAuthUser);
  const isFirstLogin = useSelector(selectIsFirstLogin);
  const authError = useSelector(selectAuthError);
  const authSuccess = useSelector(selectAuthSuccess);

  const handleLoginAttempt = useCallback(() => {
    if (!isLoggedIn) {
      message.error(authError);
      setLoginAttempted(false);
    } else {
      message.success(authSuccess);
      if (authUser.type === "user") {
        isFirstLogin
          ? history.push("/change-password")
          : history.push("/user-dashboard");
      } else if (authUser.type === "admin") {
        history.push("/admin-dashboard");
      }
    }
  }, [isLoggedIn, authError, authSuccess, history, isFirstLogin, authUser]);

  useEffect(() => {
    if (loginAttempted) {
      handleLoginAttempt();
    }
  }, [loginAttempted, handleLoginAttempt]);

  return (
    <>
      <Layout className="user-login-main-wrap">
        <Content className="">
          <Title level={4}>Sign In as {pageTitle}</Title>
          <Content className="form-wrap">
            <PageForm isUser={isUser} loginAttempted={setLoginAttempted} />
          </Content>
        </Content>
      </Layout>
    </>
  );
};
export default Login;
