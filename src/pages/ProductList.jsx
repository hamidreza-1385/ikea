import React from "react";
import products from "../data/Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus, faHeart} from '@fortawesome/free-solid-svg-icons';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useCart } from '../context/CartContext';








function ProductList() {

  const { addToCart } = useCart();

  return (
    <Container>
    <div className="container d-flex category-slider-container  category-tabs">
    
      {products.map(product => (
        <Col className='flex mb-4' key={product.id} md={4}>
          <div className="">
          <div className="img-mm ">
            <img src={product.image} className="card-img-top " alt={product.name} />
            <div className="">
              <span className="text-primary fw-bold fs-9">IKEA familly price</span>
              <h5 className="card-title">{product.name}</h5>
              
              <p className="card-text text-secondary">{product.description}</p>
              <p  className="py-0 my-0">
                <strong className='fs-4'>£{product.price}</strong> 
              </p>
              <h7 className='text-secondary fs-8'>Regular Price: £{product.regularPrice}</h7>
              <p>⭐️ {product.rating} {product.reviews}</p>
              <p className='text-secondary fs-8'>More options avalable</p>
            </div>
            <Button className="rounded-5" variant="primary"  onClick={() => addToCart(product)}><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></Button>
            <Button className="rounded-5 mx-3" variant="light" ><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></Button>
          </div>
          </div>
        </Col>
      ))}
    </div>
  </Container>
  );
}

export default ProductList;


{/* <Card>
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
          </Card> */}