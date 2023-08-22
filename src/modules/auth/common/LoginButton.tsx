import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Layout, Typography, Button, Form } from "antd";
import { Link } from "react-router-dom";
const { Text } = Typography;
const { Content } = Layout;

interface ButtonProps {
  isUser: boolean;
}
export const LoginButton = ({ isUser }: ButtonProps) => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
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
        Or Are you a {isUser ? "Admin?" : "User?"}{" "}
        <Link to={isUser ? "/admin-login" : "/login"}>
          SignIn as {isUser ? "Admin" : "User"} instead?
        </Link>
      </Content>
    </Form.Item>
  );
};
