import React, { useState } from "react";
import { Layout, Typography, Input, Table } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { statsColumns, statsTable } from "../../app-data/admin.dashbaord.data";
import { AdminStats } from "../../common/typings/admin.d";
import "./stats.scss";
const { Title } = Typography;
const { Content } = Layout;

const Stats: React.FC = () => {
  const [pageData, setPageData] = useState(statsTable);

  // Search logic
  const handleSearch = (title: string) => {
    setPageData(filterRecords(statsTable, title));
  };
  const filterRecords = (recordArray: AdminStats[], query: string) => {
    return recordArray.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };
  // Sort logic
  const handleSort = (order: string) => {
    setPageData(sortRecords(pageData, order));
  };
  const sortRecords = (recordArray: AdminStats[], order: string) => {
    return [...recordArray].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return order === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  };
  return (
    <Layout className="stats-main-wrap">
      <Title className="modal-title" level={3}>
        Overall Stats
      </Title>
      <Input
        placeholder="Search Here..."
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      />
      <Content className="sortable-buttons">
        <CaretUpOutlined onClick={() => handleSort("asc")} />
        <CaretDownOutlined onClick={() => handleSort("desc")} />
      </Content>
      <Table columns={statsColumns} dataSource={pageData} />
    </Layout>
  );
};
export default Stats;
