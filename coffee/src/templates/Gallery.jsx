import React, { useState } from 'react';

function Gallery({ handleClick }) {
  const [coffees, setCoffees] = useState([
    { id: 1, name: "MILK COFFEE", image: "images/cf8.jpeg", quantity: 0 },
    { id: 2, name: "BLACK COFFEE", image: "images/cf7.webp", quantity: 0 },
    { id: 3, name: "IRISH COFFEE", image: "images/cf1.jpeg", quantity: 0 },
    { id: 4, name: "TOFFEE NUT", image: "images/cf2.jpg", quantity: 0 },
    { id: 5, name: "VANILLA", image: "images/cf3.jpg", quantity: 0 },
    { id: 6, name: "DOUBLE CHOC MOCHA", image: "images/cf4.jpg", quantity: 0 },
    { id: 7, name: "CAPPUCCINO", image: "images/cf5.jpeg", quantity: 0 },
    { id: 8, name: "CAPPUCCINO UNSWEETENED", image: "images/cf6.jpg", quantity: 0 },
  ]);

  const updateQuantity = (id, amount) => {
    setCoffees(coffees.map(coffee => (
      coffee.id === id ? { ...coffee, quantity: Math.max(coffee.quantity + amount, 0) } : coffee
    )));
  };

  return (
    <div className="gallery_section layout_padding">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="gallery_title">Order Our Coffee</h1>
          <p className="gallery_text">
            Enjoy the best quality coffee, from strong espresso to creamy lattes, crafted for coffee lovers.
          </p>
        </div>

        <div className="row">
          {coffees.map((coffee) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={coffee.id}>
              <div className="card text-center p-3">
                <img src={coffee.image} alt={coffee.name} className="img-fluid rounded coffee-image" />
                <h5 className="mt-3">{coffee.name}</h5>
                <div className="quantity-controls d-flex justify-content-center align-items-center mt-2">
                  <button className="btn btn-outline-secondary" onClick={() => updateQuantity(coffee.id, -1)}>-</button>
                  <input type="text" className="form-control text-center mx-2" value={coffee.quantity} readOnly style={{ width: '50px' }} />
                  <button className="btn btn-outline-secondary" onClick={() => updateQuantity(coffee.id, 1)}>+</button>
                </div>
                <button className="btn btn-dark mt-3" onClick={() => handleClick(coffee.name)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <a href="#" className="btn btn-primary">See More</a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
