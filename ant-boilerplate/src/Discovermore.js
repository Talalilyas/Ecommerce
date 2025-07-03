import React from "react";
import { Row, Col, Typography, Button, Grid } from "antd";
import Uisectortitle from "./Components/Uisectortitle";
import UiSlider from "./Components/UISlider";
import AppleDealCard from "./Components/AppleDealCard";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const deals = [
  {
    title: "Save up to $200 on select MacBook Air models.",
    link: "Shop now",
  },
  {
    title: "Save up to $575 on select iPad models.",
    link: "Shop now",
  },
  {
    title: "Get up to a $150 gift card with select iPhone activations.*",
    extra: ["Plus, get more exclusive deals in-store.", "Explore the deals ›"],
  },
  {
    title: "Save up to $300 on select open box Apple Watch models.",
    link: "Shop now",
  },
];

const Discovermore = () => {
  const screens = useBreakpoint();

  return (
    <Row
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        borderRadius: 16,
        boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        margin: "0 auto",
        padding: "40px 20px",
        width: "100%",
        maxWidth: screens.lg ? "1200px" : "100%",
      }}
      gutter={[24, 24]}
      justify="center"
    >
      {/* Slider Section */}
      <Col xs={24} md={12}>
        <UiSlider>
          {deals.map((deal, index) => (
            <AppleDealCard key={index} {...deal} />
          ))}
        </UiSlider>
      </Col>

      {/* Text + Button Section */}
      <Col xs={24} md={12}>
        <Uisectortitle main="Top deals" highlight=" on Apple" sub="" />
        <Text strong style={{ color: "#fff", fontSize: 16 }}>
          Discover limited-time savings on your favorite Apple products.
        </Text>
        <br />
        <br />
        <Button
          type="primary"
          style={{
            backgroundColor: "#4fc3f7",
            borderColor: "#4fc3f7",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Shop Now
        </Button>
      </Col>
    </Row>
  );
};

export default Discovermore;
