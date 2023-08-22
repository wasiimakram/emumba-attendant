import React from "react";
import { Card } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

export const PageCard = () => {
  const cardTitles = [
    { title: "Today's Availibility", link: "/availability" },
    { title: "Overall Stats", link: "/stats" },
    { title: "Settings", link: "/setting" },
  ];

  return (
    <Content className="user-cards">
      {cardTitles.map((item, index) => (
        <Card key={index}>
          <Content>
            <Link to={item.link}>{item.title}</Link>
          </Content>
        </Card>
      ))}
    </Content>
  );
};
