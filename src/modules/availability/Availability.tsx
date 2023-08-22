import React, { useState } from "react";
import { Layout, Typography, Input, Card } from "antd";
import { availablityData } from "../../app-data/admin.dashbaord.data";
import { AdminAvailablity, Data } from "../../common/typings/admin.d";
import "./availablity.scss";
const { Title } = Typography;
const { Content } = Layout;

const Availability: React.FC = () => {
  const [filteredData, setFilteredData] = useState(availablityData);

  const handleSearch = (value: string) => {
    const categories: Data = {};
    for (const category in availablityData) {
      categories[category] = filter(availablityData[category], value);
    }
    setFilteredData(categories);
  };

  const filter = (recordArray: AdminAvailablity, query: string) => {
    return recordArray.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <Layout className="availability-main-wrap">
      <Title className="modal-title" level={3}>
        Today's Availability
      </Title>
      <Input
        placeholder="Search Here..."
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      />
      <Content className="user-cards">
        {Object.keys(availablityData).map((category) => (
          <Card title={category} key={category}>
            <Content>
              {filteredData[category].length !== 0 ? (
                filteredData[category].map((item: string, index: number) => (
                  <p key={index}>{item}</p>
                ))
              ) : (
                <p className="no-record">No Record Found...</p>
              )}
            </Content>
          </Card>
        ))}
      </Content>
    </Layout>
  );
};
export default Availability;
