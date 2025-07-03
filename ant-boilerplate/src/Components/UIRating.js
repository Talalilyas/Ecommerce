import React from "react";
import { Rate, Typography } from "antd";

const { Text } = Typography;

const UiRating = ({ rating, reviews }) => {
  return (
    <>
      <Rate disabled defaultValue={rating} />
      <Text> ({reviews})</Text>
    </>
  );
};

export default UiRating;
