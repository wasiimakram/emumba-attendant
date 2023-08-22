import React from "react";
import { Table } from "antd";
import Columns from "./Columns";
import { AdminSettings, TableProps } from "../../../common/typings/admin.d";

export const SettingTable = ({
  setSelectedUser,
  setIsAddModal,
  setIsModalOpen,
  setSelectedKey,
  setIsDeleteModal,
  pageData,
}: TableProps) => {
  const handleUserSelection = (user: AdminSettings) => {
    setSelectedUser(user);
    setIsAddModal(false);
    setIsModalOpen(true);
  };
  const handleDelete = (key: string) => {
    setSelectedKey(key); // Set the selected key before opening the delete modal
    setIsDeleteModal(true);
  };
  return (
    <Table
      columns={Columns(handleUserSelection, handleDelete)}
      dataSource={pageData}
    />
  );
};
