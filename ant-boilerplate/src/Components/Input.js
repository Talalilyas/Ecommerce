
import React from "react";
import { Input } from "antd";

const BuyInput = ({ placeholder, prefix, style }) => {
  return (
    <Input
      placeholder={placeholder}
      prefix={prefix}
      style={{ borderRadius: 4, ...style }}
    />
  );
};

export default BuyInput;
