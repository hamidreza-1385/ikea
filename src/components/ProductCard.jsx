import React from "react";
import '../../src/index.css';


function ProductCard({ product }) {
  return (
    <div className="img-mm  ">
      <img src={product.image} className="card-img-top " alt={product.name} />
      <div className="">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p>
          <strong>£{product.price}</strong> <del>£{product.regularPrice}</del>
        </p>
        <p>⭐️ {product.rating} ({product.reviews})</p>
      </div>
    </div>
  );
}

export default ProductCard;
