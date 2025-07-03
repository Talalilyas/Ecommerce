import React from "react";
import { Card, Typography, Image, Row, Col } from "antd";

import UiText from "./UiText";

const { Title } = Typography; 
const ProductCardfriday = ({ imageSrc, mainText, subText }) => {
  return (
    <Card
      className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col items-center text-center p-4 bg-white border border-gray-200"
      bordered={false}
    >
      <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center rounded-md overflow-hidden border border-gray-100 bg-gray-50">
        <Image
          src={imageSrc}
          alt={mainText}
          className="object-cover w-full h-full p-1"
          preview={false}
        />
      </div>

      <UiText
        strong
        style={{
          marginTop: "8px",
          marginBottom: "4px",
          color: "#1a202c",
          lineHeight: "tight",
          fontSize: "1rem",
          "@media (min-width: 768px)": { fontSize: "1.125rem" },
        }}
      >
        {mainText}
      </UiText>

      <UiText
        style={{
          color: "#4a5568",
          fontSize: "0.875rem",
          "@media (min-width: 768px)": { fontSize: "1rem" },
          paddingLeft: "8px",
          paddingRight: "8px",
          paddingBottom: "8px",
        }}
      >
        {subText}
      </UiText>
    </Card>
  );
};

export default ProductCardfriday;
