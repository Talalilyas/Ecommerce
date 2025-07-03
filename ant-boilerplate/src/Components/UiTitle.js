import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const UiTitle = ({ main, highlight, sub ,size}) => (
  <Title level={3} style={{ textAlign: "center"}}>
    {main} <br />
    <span style={{ fontWeight: 900 }}>{highlight}</span> <br />
    {sub}
    {size}
  </Title>
);

export default UiTitle;
