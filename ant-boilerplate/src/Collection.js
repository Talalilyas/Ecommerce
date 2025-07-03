import React from "react";
import { Card, Col, Row, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

const shopCollections = [
  { name: "Dyson", linkText: "All Dyson On Sale*", link: "#" },
  { name: "Sony", linkText: "All Sony OLED TVs and Sound Bars On Sale*", link: "#" },
  { name: "Breville", linkText: "All Breville On Sale*", link: "#" },
  { name: "Google Pixel", linkText: "All Google Pixel Smartwatches On Sale*", link: "#" },
  { name: "Fitbit", linkText: "All Fitbit On Sale*", link: "#" },
  { name: "Sennheiser", linkText: "All Sennheiser Headphones On Sale*", link: "#" },
  { name: "Segway", linkText: "All Segway E-Scooters On Sale*", link: "#" },
  { name: "Insignia", linkText: "All Insignia Major Appliances On Sale*", link: "#" },
  { name: "Thinkware", linkText: "All Thinkware Dash Cams On Sale*", link: "#" },
  { name: "Canon", linkText: "All Canon Printers On Sale*", link: "#" },
  { name: "Arlo", linkText: "All Arlo Security Cameras And Doorbells On Sale*", link: "#" },
  { name: "Manscaped", linkText: "All Manscaped On Sale*", link: "#" },
];

const Collections = () => (
  <Row justify="center" align="middle" style={{ padding: "40px 0" }}>
    <Col xs={24}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
        Shop all on sale collections
      </Title>
-
   
      <Row gutter={[24, 24]} justify="space-around" align="middle">
        {shopCollections.map(({ name, linkText, link }, index) => (
          <Col
            key={index}
            xs={12}
            sm={12}
            md={8}
            lg={6}
            xl={6}
            style={{ display: "flex", }}
          >
            <Card
              hoverable
              bodyStyle={{
                padding: "12px 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              style={{
                width: 220,
                minHeight: 130,
                display: "flex",
                alignItems: "center",
                justifyContent: "center", 
              }}
            >
              <Card.Meta
                title={
                  <Text
                    strong
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontSize: 14,
                      marginBottom: 5,
                    }}
                  >
                    {name}
                  </Text>
                }
                description={
                  <Text
                    style={{
                      display: "block",
                      textAlign: "center",
                      fontSize: 13,
                      color: "#1890ff",
                    }}
                  >
                    <a href={link} style={{ textDecoration: "none" }}>
                      {linkText}
                    </a>
                  </Text>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>


      <Row justify="center" style={{ marginTop: 40 }}>
       
      </Row>
    </Col>
  </Row>
);

export default Collections;
