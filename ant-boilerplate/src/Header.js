import React from "react";
import {
  Layout,
  Row,
  Col,
  Space,
  Typography,
  Divider,
  Button,
  Menu,
} from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ShopOutlined,
} from "@ant-design/icons";

import BuyInput from "./Componens/BuyInput";
import BuyButton from "./Componens/BuyButton";
import BuyMenu from "./Componens/BuyMenu";
const { Header } = Layout;
const { Text } = Typography;

const whiteLabel = (text) => <span style={{ color: "white" }}>{text}</span>;
const menuItems = [
  {
   label: whiteLabel("Shop"),
    key: "shop",
    children: [
      { label: "Laptops", key: "shop:laptops" },
      { label: "Phones", key: "shop:phones" },
      { label: "Cameras", key: "shop:cameras" },
      { label: "TVs", key: "shop:tvs" },
    ],
  },
  {label: whiteLabel("Black Friday in  Summer"),
    key: "blackfriday",
    children : [{
       label : "Apple on sale" , key :"Topdeals"
    }]
  },
  {
    label: whiteLabel("Deals"),
    key: "deals",
    children : [{
       label : "Top Deals" , key :"Topdeals"
    }]
  },
  {
   label: whiteLabel("Outlet")  ,
    key: "outlet",
    children: [
      { label: "Open box product", key: "outlet:clearance" },
      { label: "Refurbished", key: "outlet:refurbished" },
      { label: "Open Box", key: "outlet:openbox" },
    ],
  },
  {
     label: whiteLabel("Service"),
    key: "services",
    children :[{
      label:"Supports and Benefits",key : " Support"
    }] 
  },
];

const Headers = () => {
  return (
    <Layout>
     
      <Row style={{ backgroundColor: "#003eb3", padding: "0 20px" }}>
        <Col span={24}>
          <Divider orientation="right" style={{ margin: 0, color: "white" }}>
            <Space size="middle">
              <Button type="link" style={{ color: "white" }}>
                Order Status
              </Button>
              <Button type="link" style={{ color: "white" }}>
                Blog
              </Button>
              <Button type="link" style={{ color: "white" }}>
                Best Buy Business
              </Button>
            </Space>
          </Divider>
        </Col>
      </Row>

     
      <Header style={{ backgroundColor: "#0046be", padding: "0 30px" }}>
        <Row justify="space-between" align="middle">
       
          <Col xs={24} sm={12} md={6} lg={4}>
            <Text strong style={{ color: "white", fontSize: 24 }}>
              BEST <span style={{ color: "#ffd700" }}>BUY</span>
            </Text>
          </Col>

         
          <Col xs={24} sm={24} md={12} lg={12}>
            <BuyInput
              placeholder="Search Best Buy"
              prefix={<SearchOutlined />}
            />
          </Col>

        
          <Col xs={24} sm={24} md={6} lg={6}>
            <Space size="middle" wrap>
              <BuyButton icon={<ShopOutlined />} label="Stores" />
              <BuyButton icon={<UserOutlined />} label="Account" />
              <BuyButton icon={<ShoppingCartOutlined />} label="Cart" />
            </Space>
          </Col>
        </Row>
      </Header>


      < BuyMenu
        mode="horizontal"
        theme="dark"
        items={menuItems}
        style={{ backgroundColor: "#0046be", fontWeight: "500" }}
      />
    </Layout>
  );
};

export default Headers;
