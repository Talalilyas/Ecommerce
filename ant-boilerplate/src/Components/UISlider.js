import React from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Row, Col } from "antd";

const NextArrow = ({ onClick }) => (
  <Button
    shape="circle"
    icon={<RightOutlined />}
    type="default"
    size="large"
    onClick={onClick}
    style={{
      position: "absolute",
      right: -20,
      top: "40%",
      zIndex: 2,
      background: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    }}
  />
);

const PrevArrow = ({ onClick }) => (
  <Button
    shape="circle"
    icon={<LeftOutlined />}
    type="default"
    size="medium"
    onClick={onClick}
    style={{
      position: "absolute",
      left: -20,
      top: "40%",
      zIndex: 2,
      background: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    }}
  />
);

const UiSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Row justify="center" style={{ padding: "40px 20px" }}>
      <Col xs={24} style={{ maxWidth: 1300, width: "100%", position: "relative" }}>
        <Slider {...settings}>{children}</Slider>
      </Col>
    </Row>
  );
};

export default UiSlider;
