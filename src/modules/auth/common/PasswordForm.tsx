import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { attemptUpdatePassword } from "../../../app-redux/modules/auth/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const PasswordForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = async (values: any) => {
    try {
      await dispatch(attemptUpdatePassword(values));
      message.success("Password udpated successfully!");
      history.push("/user-dashboard");
    } catch (error) {
      message.error("Something went wrong!");
    }
  };
  const onCancel = () => {
    history.push("/login");
  };
  return (
    <Form name="normal_login" className="login-form" onFinish={onSubmit}>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          type="password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirm-password"
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords do not match.")
              );
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item className="form-button">
        <Button
          type="primary"
          htmlType="submit"
          className="btn-cancel"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="primary" htmlType="submit" className="btn-success">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};
