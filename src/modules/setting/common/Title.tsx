import { Typography } from "antd";
import React from "react";
interface TitleProps {
  title: string;
}
export const PageTitle = ({ title }: TitleProps) => {
  return (
    <Typography.Title className="modal-title" level={3}>
      {title}
    </Typography.Title>
  );
};
