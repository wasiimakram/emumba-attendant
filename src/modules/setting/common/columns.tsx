import React from "react";
import { Button, Space } from "antd";
import { AdminSettings } from "../../../common/typings/admin.d";

type HandleUserSelectionFunction = (user: AdminSettings) => void;
type HandleUserDeleteFunction = (key: string) => void;

const Columns = (
  handleEdit: HandleUserSelectionFunction,
  handleDelete: HandleUserDeleteFunction
) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Total Hours",
    dataIndex: "hours",
    key: "hours",
  },
  {
    title: "Daily Average Hrs",
    dataIndex: "average_hours",
    key: "average_hours",
  },
  {
    title: "Action",
    key: "action",
    render: (record: AdminSettings) => (
      <Space className="action-button">
        <Button
          className="delete"
          onClick={() => handleDelete(record.key || "")}
        >
          Delete
        </Button>
        <Button className="edit" onClick={() => handleEdit(record)}>
          Edit
        </Button>
      </Space>
    ),
  },
];
export default Columns;
