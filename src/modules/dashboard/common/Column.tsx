import type { ColumnsType } from "antd/es/table";
import { UserTable } from "../../../common/typings/user";
export const columns: ColumnsType<UserTable> = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: "50%",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: "50%",
  },
];
