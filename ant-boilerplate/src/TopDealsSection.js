// TopDealsSection.jsx

import React from "react";
import { Row, Col, Card, Typography, Grid } from "antd";
import Uisectortitle from "./Components/Uisectortitle";

const { Text, Link } = Typography;
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

const TopDealsSection = () => {
  const screens = useBreakpoint();

  return (
    <Row
      justify="center"
      style={{
        padding: screens.xs ? "40px 16px" : "80px 100px",
      }}
    >
      <Col xs={24} style={{ maxWidth: 1200, width: "100%" }}>
        <div
          style={{
            background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
            padding: screens.xs ? "40px 20px" : "90px 30px",
            borderRadius: "16px",
            boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          }}
        >
          <Uisectortitle main="Top deals" highlight=" on Apple" sub="" />

          <Row gutter={[24, 24]} justify="center">
            {deals.map((deal, index) => (
              <Col key={index} xs={24} sm={12} md={12} lg={6}>
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderTop: "5px solid",
                    borderImage:
                      "linear-gradient(to right, #ff416c, #ff4b2b) 1",
                    borderRadius: "12px",
                    padding: 20,
                    color: "#fff",
                    transition: "transform 0.3s ease",
                    height: "100%",
                  }}
                  bodyStyle={{ padding: 0 }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <Text
                    strong
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    {deal.title}
                  </Text>

                
                    <Link
                      style={{ color: "#4fc3f7", fontWeight: "bold" }}
                      href="#"
                    >
                      {deal.link} 
                    </Link>
                    

                  {deal.extra &&
                    deal.extra.map((line, i) => (
                      <div key={i}>
                        <Link style={{ color: "#81d4fa" }} href="#">
                          {line}
                        </Link>
                      </div>
                    ))}
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default TopDealsSection;
