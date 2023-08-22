import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { useLocation } from "react-router-dom";
import { LoginButton } from "./LoginButton";
import { attemptLogin } from "../../../app-redux/modules/auth/authSlice";
import { User } from "../../../common/typings/user";
import { useDispatch } from "react-redux";

interface FormProps {
  isUser: boolean;
  loginAttempted: (value: boolean) => void;
}
export const PageForm = ({ isUser, loginAttempted }: FormProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const handleSubmitForm = async (values: User) => {
    try {
      const updatedValues = {
        ...values,
        type: pathname === "/admin-login" ? "admin" : "user",
      };
      await dispatch(attemptLogin(updatedValues));
      loginAttempted(true);
    } catch (error) {
      // message.error(error);
    }
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      onFinish={handleSubmitForm}
    >
      <Form.Item
        name="userName"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <LoginButton isUser={isUser} />
    </Form>
  );
};
