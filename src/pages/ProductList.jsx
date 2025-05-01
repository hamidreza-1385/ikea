import React from "react";
import products from "../data/Products";
import ProductCard from "../components/ProductCard";

import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useCart } from '../context/CartContext';








function ProductList() {

  const { addToCart } = useCart();

  return (
    <Container>
    <div className="container d-flex category-slider-container  category-tabs">
    <h2 className="my-4">محصولات</h2>
    
      {products.map(product => (
        <Col key={product.id} md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                قیمت: {product.price} تومان
              </Card.Text>
              <Button 
                variant="primary" 
                onClick={() => addToCart(product)}
              >
                افزودن به سبد خرید
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    
    </div>
  </Container>
  );
}

export default ProductList;