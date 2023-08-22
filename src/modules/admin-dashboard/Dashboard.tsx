import React from "react";
import { Layout, Typography, Image } from "antd";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../app-redux/modules/auth/authSlice";
import "./dashboard.scss";
import { PageCard } from "./common/Card";

const { Title } = Typography;

const Dashboard: React.FC = () => {
  const authUser = useSelector(selectAuthUser);

  return (
    <Layout className="admin-dashboard-main-wrap">
      <Image className="user-image" src="assets/images/user2.png" />
      <Title level={4}>Hi! {authUser?.name || ""}</Title>
      <PageCard />
    </Layout>
  );
};

export default Dashboard;
