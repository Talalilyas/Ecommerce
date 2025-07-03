import ProductCard from "./Components/ProductCard";
import ProductCardfriday from "./Components/Productcardfriday";
import Uisectortitle from "./Components/Uisectortitle";

import UiTitle from "./Components/UiTitle";
import { Row, Col } from "antd";

export default function Blackfriday() {
  const products = [
    {
      id: 1,
      imageSrc: "https://placehold.co/100x100/FF5733/FFFFFF?text=Deal",
      title: "Incredible deals",
      description: "TVs, Home Audio, and Accessories",
    },
    {
      id: 2,

      title: "Amazing savings",
      description: "Computers, Laptops, and Tablets",
    },
    {
      id: 3,

      title: "Up to a $300 gift card",
      description: "Cell Phones and Plans",
    },
    {
      id: 4,

      title: "Save up to 44%",
      description: "Headphones and Portable Speakers",
    },
    {
      id: 5,

      title: "Hot offers",
      description: "PC Gaming",
    },
    {
      id: 6,

      title: "Save up to 33%",
      description: "Computer Accessories",
    },
    {
      id: 7,

      title: "Next-level deals",
      description: "Video Games, Consoles, and VR",
    },
    {
      id: 8,

      title: "Save up to $290",
      description: "Wearable Technology",
    },
    {
      id: 9,

      title: "Incredible offers",
      description: "Major Appliances",
    },
    {
      id: 10,

      title: "Save up to 35%",
      description: "Small Kitchen Appliances",
    },
    {
      id: 11,

      title: "Save up to $100",
      description: "Smart Security and Home Control Tech",
    },
    {
      id: 12,

      title: "Save up to $500",
      description: "Vacuums",
    },
    {
      id: 13,

      title: "All on sale",
      description: "Cooling and Air Quality",
    },
    {
      id: 14,

      title: "Save up to $400",
      description: "Electric Transportation",
    },
    {
      id: 15,

      title: "Amazing deals",
      description: "Cameras",
    },
    {
      id: 16,

      title: "Save up to $800",
      description: "Outdoor Essentials",
    },
    {
      id: 17,

      title: "All on sale",
      description: "Luggage Sets",
    },
    {
      id: 18,

      title: "Save up to $100",
      description: "Personal Care",
    },
  ];

  return (
    <div className="p-4 md:p-8 font-['Inter'] min-h-screen bg-gray-50 flex flex-col items-center">
      <UiTitle
        main="Black Friday in Summer deals on"
        highlight="select products"
        sub=""
        size=""
      />

      <Row
        gutter={[16, 16]}
        justify="start"
        style={{ paddingLeft: 40, paddingRight: 40 }}
        className="w-full max-w-7xl"
      >
        {products.map((product) => (
          <Col key={product.id} xs={8} sm={8} md={6} lg={6} xl={6}>
            <ProductCardfriday
              mainText={product.title}
              subText={product.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
