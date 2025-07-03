import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Uisectortitle = ({ main, highlight, sub ,size}) => (
  <Title level={3} style={{ textAlign: "center", marginBottom: 30 ,color:"Background" }}>
    {main} 
    <span style={{ fontWeight: 900 ,color:"Background"}}>{highlight}</span>
    {sub}
    {size}
  </Title>
);

export default Uisectortitle;
