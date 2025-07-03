import React from "react";
import { ConfigProvider, Menu } from "antd";

const BuyMenu = ({ items }) => {
  return (
   
      <Menu
        mode="horizontal"
        
        items={items}
        style={{
          backgroundColor: "#0046be",
          fontWeight: "500",
        }}
      />
   
  );
};

export default BuyMenu;
