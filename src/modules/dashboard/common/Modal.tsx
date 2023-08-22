import React from "react";
import { DatePicker, DatePickerProps, Modal, Table } from "antd";
import Title from "antd/es/typography/Title";
import { selectAuthUser } from "../../../app-redux/modules/auth/authSlice";
import { useSelector } from "react-redux";
import { columns } from "./Column";
import { userTableRecord } from "../../../app-data/user.table.data";

interface ModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}
export const PageModal = ({ open, onOk, onCancel }: ModalProps) => {
  const authUser = useSelector(selectAuthUser);
  const [pageRecord, setpageRecord] = React.useState(userTableRecord);
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    dateString !== ""
      ? filterRecord(dateString)
      : setpageRecord(userTableRecord);
  };
  const filterRecord = (date: string) => {
    const filteredData = userTableRecord.filter(
      (record) => record.date === date
    );
    setpageRecord(filteredData);
  };
  return (
    <Modal
      centered
      open={open}
      onOk={onOk}
      onCancel={onCancel}
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
  );
};
