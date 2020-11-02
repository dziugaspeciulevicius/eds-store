import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.component";
import axios from 'axios';

import "../sass/pages/HomePage.styles.scss";

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Latest products</h1>
      <Row>
      {/* Looping through products to list them in our homepage. For each product we want to show column and list our Product component for each product */}
      {/* Element needs a unique key prop, because we have access to each product */}
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
