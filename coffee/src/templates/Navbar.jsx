import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar({ toggleComponent, login, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand" href="index.html">
        <h3>COZYCOFFEE</h3>
      </a>
      <button className="navbar-toggler" type="button" onClick={handleToggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} justify-content-end`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#Order">Order</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#AboutUs">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">Contact Us</a>
          </li>
          <li className="nav-item">
            {login ? (
              <button className="btn btn-outline-danger" onClick={onLogout}>Logout</button>
            ) : (
              <button className="btn btn-outline-primary" onClick={toggleComponent}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
