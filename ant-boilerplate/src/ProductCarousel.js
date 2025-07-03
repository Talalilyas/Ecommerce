import React from "react";
import { Col, Row } from "antd";
import UiSlider from "./Components/UISlider";
import UiTitle from "./Components/UiTitle";
import ProductCard from "./Components/ProductCard";

const products = [
  {
    title: "TCL 75'' 4K UHD HDR Roku",
    price: "$599.99",
    discount: "SAVE $400",
    deal: "Top Deal",
    rating: 3,
    reviews: 6,
    tagColor: "red",
  },
  {
    title: "HP 15.6'' Laptop - i5",
    price: "$599.99",
    discount: "SAVE $200",
    deal: "Top Deal",
    rating: 0,
    reviews: 0,
    tagColor: "red",
  },
  {
    title: "Google Pixel 9 128GB",
    price: "$1,099.99",
    deal: "Gift With Purchase",
    rating: 4,
    reviews: 33,
    tagColor: "blue",
  },
  {
    title: "Sony Noise Cancelling Headphones",
    price: "$174.99",
    discount: "SAVE $175",
    deal: "Top Deal",
    rating: 5,
    reviews: 298,
    tagColor: "red",
  },
  {
    title: "Hisense Portable AC",
    price: "$279.99",
    discount: "SAVE $270",
    deal: "Top Deal",
    rating: 3,
    reviews: 3,
    tagColor: "red",
  },
  {
    title: "Dyson Cordless Vacuum",
    price: "$949.99",
    discount: "SAVE $250",
    deal: "Top Deal",
    rating: 4,
    reviews: 2302,
    tagColor: "red",
  },
];

const ProductCarousel = () => {
  return (
    <Row justify="center">
      <Col
        lg={19}
        className="carousel-container"
        style={{ overflow: "hidden" }}
      >
        <UiTitle
          main="Black Friday in Summer"
          highlight="Big savings"
          sub="on top brands."
        />
        <UiSlider>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </UiSlider>
      </Col>
    </Row>
  );
};

export default ProductCarousel;
