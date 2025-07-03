
import React from "react";
import { Button } from "antd";

const BuyPButton = ({ icon, label, onClick, type = "link", style }) => {
  return (
    <Button
      icon={icon}
      onClick={onClick}
      type={type}
      style={{ color: "white", ...style }}
    >
      {label}
    </Button>
  );
};

export default BuyPButton;
