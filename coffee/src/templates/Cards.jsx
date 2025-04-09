import React from "react";
import "./cards.css";

const Cards = ({ item, handleClick }) => {
  const { name, price, image } = item;

  return (
    <div className="card">
      <img src={image} alt="Product" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-price">₹{price}</p>
        <button className="add-to-cart-btn" onClick={() => handleClick(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
