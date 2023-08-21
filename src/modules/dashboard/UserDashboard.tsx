import React, { useState } from "react";
import {
  Layout,
  Typography,
  Card,
  Image,
  Modal,
  Table,
  DatePicker,
} from "antd";
import type { DatePickerProps } from "antd";
import { columns } from "./common/Column";
import { useSelector } from "react-redux";
import { selectAuthUser } from "../../app-redux/modules/auth/authSlice";
import { userTableRecord } from "../../app-data/user.table.data";
const { Content } = Layout;
const { Title, Text } = Typography;

export default function UserDashboard() {
  const [open, setOpen] = useState(false);
  const authUser = useSelector(selectAuthUser);
  const [pageRecord, setpageRecord] = useState(userTableRecord);
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    dateString !== ""
      ? filterRecord(dateString)
      : setpageRecord(userTableRecord);
  };
  const filterRecord = (date: string) => {
    //'2023-08-16'
    const filteredData = userTableRecord.filter(
      (record) => record.date === date
    );
    setpageRecord(filteredData);
  };
  return (
    <>
      <Layout className="user-dashboard-main-wrap">
        <Image className="user-image" src="assets/images/user2.png" />
        <Title level={4}>Hi! {authUser ? authUser?.name : ""}</Title>
        <Content className="user-cards">
          <Card>
            <Content>
              <Text>Punch Attendance</Text>
            </Content>
          </Card>
          <Card>
            <Content>
              <Text>Apply for Leave</Text>
            </Content>
          </Card>
          <Card>
            <Content onClick={() => setOpen(true)}>
              <Text>Watch Previous Record</Text>
            </Content>
          </Card>
        </Content>
      </Layout>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        className="user-dashboard-modal"
        footer={null}
      >
        <Title className="modal-title" level={3}>
          Attendance Record
        </Title>
        <Title level={5}>{authUser ? authUser?.name : ""}</Title>
        <DatePicker onChange={onChange} />
        <Table columns={columns} dataSource={pageRecord} />
      </Modal>
    </>
  );
}
