import React from "react";
import { Card, Typography } from "antd";

const { Text, Link } = Typography;

const AppleDealCard = ({ title, link, extra }) => (
  <Card
    hoverable
    bordered={false}
    style={{
      background: "rgba(255,255,255,0.05)",
      borderTop: "5px solid",
      borderImage: "linear-gradient(to right, #ff416c, #ff4b2b) 1",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
      height: "100%",
      color: "#fff",
      textAlign: "center",
    }}
    bodyStyle={{ padding: 0 }}
  >
    <Text
      strong
      style={{
        color: "#fff",
        fontSize: "16px",
        display: "block",
        marginBottom: "10px",
      }}
    >
      {title}
    </Text>
    {link && (
      <Link style={{ color: "#4fc3f7", fontWeight: "bold" }} href="#">
        {link} &gt;
      </Link>
    )}
    {extra &&
      extra.map((line, i) => (
        <div key={i}>
          <Link style={{ color: "#81d4fa" }} href="#">
            {line}
          </Link>
        </div>
      ))}
  </Card>
);

export default AppleDealCard;
