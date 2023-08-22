import React from "react";
import { Card, Typography } from "antd";
import { Content } from "antd/es/layout/layout";

interface CardProps {
  setOpen: () => void;
}
export const PageCard = ({ setOpen }: CardProps) => {
  const cardTitles = [
    "Punch Attendance",
    "Apply for Leave",
    "Watch Previous Record",
  ];

  return (
    <Content className="user-cards">
      {cardTitles.map((title, index) => (
        <Card key={index}>
          <Content onClick={index === 2 ? setOpen : undefined}>
            <Typography.Text>{title}</Typography.Text>
          </Content>
        </Card>
      ))}
    </Content>
  );
};
