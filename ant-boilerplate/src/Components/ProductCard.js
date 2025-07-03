import React from "react";
import { Card, Tag } from "antd";

import UiText from "./UiText";
import UiRating from "./UIRating";

const ProductCard = ({ product }) => {
  return (
    <Card
      hoverable
      style={{
        margin: "0 10px",
        borderRadius: 10,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {product.deal && <Tag color={product.tagColor}>{product.deal}</Tag>}

      {product.discount && (
        <>
          <UiText type="danger" strong>
            {product.discount}
          </UiText>
          <br />
        </>
      )}

      <UiText strong style={{ fontSize: 18 }}>
        {product.price}
      </UiText>
      <br />

      <UiText>{product.title}</UiText>
      <br />

      <UiRating rating={product.rating} reviews={product.reviews} />
    </Card>
  );
};

export default ProductCard;
