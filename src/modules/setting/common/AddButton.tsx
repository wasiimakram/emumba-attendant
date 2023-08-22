import { Button } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { AddButtonProps } from "../../../common/typings/admin.d";

export const AddButton = ({ addUser }: AddButtonProps) => {
  return (
    <Content className="sortable">
      <Button className="edit" onClick={addUser}>
        Add New Record
      </Button>
    </Content>
  );
};
