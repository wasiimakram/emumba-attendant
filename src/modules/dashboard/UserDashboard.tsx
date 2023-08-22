import React, { useState } from "react";
import { Layout, Typography, Image } from "antd";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../app-redux/modules/auth/authSlice";
import { PageCard } from "./common/Card";
import { PageModal } from "./common/Modal";
import "./dashboard.scss";

const { Title } = Typography;

const UserDashboard: React.FC = () => {
  const [open, setOpen] = useState(false);
  const authUser = useSelector(selectAuthUser);

  return (
    <>
      <Layout className="user-dashboard-main-wrap">
        <Image className="user-image" src="assets/images/user2.png" />
        <Title level={4}>Hi! {authUser?.name || ""}</Title>
        <PageCard
          setOpen={() => {
            setOpen(true);
          }}
        />
      </Layout>
      <PageModal
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      />
    </>
  );
};
export default UserDashboard;
