import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const UiText = ({ children, strong, type, style }) => {
  return (
    <Text strong={strong} type={type} style={style}>
      {children}
    </Text>
  );
};

export default UiText;
