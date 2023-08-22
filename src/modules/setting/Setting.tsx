import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { AdminSettings } from "../../common/typings/admin.d";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  selectAllUsers,
} from "../../app-redux/modules/setting/settingSlice";
import { AddButton } from "./common/AddButton";
import { SettingTable } from "./common/Table";
import { InputField } from "./common/Input";
import SettingModal from "./common/SettingModal";
import DeleteModal from "./common/DeleteModal";
import "./setting.scss";
import { PageTitle } from "./common/Title";

const Setting: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<AdminSettings | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const pageRecord = useSelector(selectAllUsers);

  const handleAddUser = () => {
    setSelectedUser(null);
    setIsAddModal(true);
    setIsModalOpen(true);
  };
  return (
    <Layout className="setting-main-wrap">
      <PageTitle title="Setting" />
      <InputField pageRecord={pageRecord} />
      <AddButton addUser={handleAddUser} />
      <SettingTable
        setSelectedUser={setSelectedUser}
        setIsAddModal={setIsAddModal}
        setIsModalOpen={setIsModalOpen}
        setSelectedKey={setSelectedKey}
        setIsDeleteModal={setIsDeleteModal}
        pageData={pageRecord}
      />
      <SettingModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedUser={isAddModal ? null : selectedUser}
        isAddModal={isAddModal}
      />
      {selectedKey && (
        <DeleteModal
          isOpen={isDeleteModal}
          setOpen={setIsDeleteModal}
          deleteKey={selectedKey}
        />
      )}
    </Layout>
  );
};
export default Setting;
