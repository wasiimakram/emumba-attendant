import React, { useEffect, useState } from "react";
import { Layout, Typography, Button, Form, Input } from "antd";
// import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FacebookOutlined,
  InstagramOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  attemptLogin,
  selectAuthError,
  selectAuthSuccess,
  selectAuthUser,
  selectIsFirstLogin,
  selectIsLoggedIn,
} from "../../app-redux/modules/auth/authSlice";
import { IUser } from "../../common/typings/user";
import { message } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";

const { Content } = Layout;
const { Title, Text } = Typography;

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;
  const pageTitle = pathname === "/admin-login" ? "Admin" : "User";
  const isUser = pathname === "/admin-login" ? false : true;
  const [loginAttempted, setLoginAttempted] = useState(false);

  const handleSubmitForm = async (values: IUser) => {
    const updatedValues = {
      ...values,
      type: pathname === "/admin-login" ? "admin" : "user",
    };
    await dispatch(attemptLogin(updatedValues));
    setLoginAttempted(true);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const authUser = useSelector(selectAuthUser);
  const isFirstLogin = useSelector(selectIsFirstLogin);
  const authError = useSelector(selectAuthError);
  const authSuccess = useSelector(selectAuthSuccess);
  useEffect(() => {
    // early <return></return>
    if (loginAttempted) {
      if (!isLoggedIn) {
        message.error(authError);
        setLoginAttempted(false);
      } else if (isLoggedIn) {
        message.success(authSuccess);
        if (authUser.type === "user") {
          isFirstLogin
            ? history.push("/change-password")
            : history.push("/user-dashboard");
        } else if (authUser.type === "admin") {
          history.push("/admin-dashboard");
        }
      }
    }
  }, [
    loginAttempted,
    isLoggedIn,
    authError,
    authSuccess,
    history,
    isFirstLogin,
    authUser,
  ]);
  return (
    <>
      <Layout className="user-login-main-wrap">
        <Content className="">
          <Title level={4}>Sign In as {pageTitle}</Title>
          <Content className="form-wrap">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={handleSubmitForm}
            >
              <Form.Item
                name="userName"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                <Content className="icons-wrap">
                  Or <Text>Sign in using social platforms</Text>
                  <br />
                  <FacebookOutlined className="icon" />
                  <InstagramOutlined className="icon" />
                  <GoogleOutlined className="icon" />
                  <LinkedinOutlined className="icon" />
                </Content>
                <Content className="admin-link">
                  {!isUser ? (
                    <>
                      Or Are you a User?{" "}
                      <Link to="/login">SignIn as User instead?</Link>
                    </>
                  ) : (
                    <>
                      Or Are you an Admin?{" "}
                      <Link to="/admin-login">SignIn as Admin instead?</Link>
                    </>
                  )}
                </Content>
              </Form.Item>
            </Form>
          </Content>
        </Content>
      </Layout>
    </>
  );
}
