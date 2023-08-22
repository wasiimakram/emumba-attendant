import React from "react";
import { Input } from "antd";
import { AdminSettings } from "../../../common/typings/admin.d";
import { searchRecord } from "../../../app-redux/modules/setting/settingSlice";
import { useDispatch } from "react-redux";
interface InputProps {
  pageRecord: AdminSettings[];
}

export const InputField = ({ pageRecord }: InputProps) => {
  const dispatch = useDispatch();
  const handleSearch = (title: string) => {
    dispatch(searchRecord(title));
  };

  return (
    <Input
      placeholder="Search Here..."
      onChange={(event) => {
        handleSearch(event.target.value);
      }}
    />
  );
};
