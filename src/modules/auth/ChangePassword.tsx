import React from "react";
import { Layout, Card } from "antd";
import { PasswordForm } from "./common/PasswordForm";
import "./auth.scss";

const { Content } = Layout;
const ChangePassword: React.FC = () => {
  return (
    <Layout className="change-password-main-wrap">
      <Card title="Change Password">
        <Content className="form-wrap">
          <PasswordForm />
        </Content>
      </Card>
    </Layout>
  );
};
export default ChangePassword;
