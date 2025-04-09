import * as Components from "./Components";
import React, { useState, useEffect } from "react";
import "./cart.css";

const Cart = ({ cart, setCart, handleChange, setShow, toggleComponent, login }) => {
    const [price, setPrice] = useState(0);

    const handleOrder = () => {
        if (login) {
            alert("🎉 Order Placed Successfully!");
            setCart([]);
            setPrice(0);
        } else {
            alert("⚠️ Please Login First");
            toggleComponent();
        }
    };

    const handlePrice = () => {
        let ans = 0;
        cart.forEach((item) => {
            ans += item.amount * item.price;
        });
        setPrice(ans);
    };

    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    useEffect(() => {
        handlePrice();
    }, [cart]);

    useEffect(() => {
        if (cart.length === 0) {
            setShow(true);
        }
    }, [cart]);

    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="empty-cart">🛒 Your cart is empty. Start shopping now!</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="cart-img">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cart-details">
                                <h4>{item.name}</h4>
                                <p>Price: ₹{item.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => handleChange(item, +1)}> + </button>
                                    <span>{item.amount}</span>
                                    <button onClick={() => handleChange(item, -1)}> - </button>
                                </div>
                            </div>
                            <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total Price:</h3>
                        <span>₹{price}</span>
                    </div>
                    <div className="order-button">
                        <a><Components.GhostButton onClick={handleOrder}>Place Order</Components.GhostButton></a>
                    </div>
                </>
            )}

            <style>
                {`
                .cart-container {
                    max-width: 900px;
                    margin: auto;
                    padding: 20px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                .cart-title {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .empty-cart {
                    font-size: 1.2rem;
                    color: #888;
                }
                .cart-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 15px;
                    margin: 10px 0;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s;
                }
                .cart-item:hover {
                    transform: translateY(-3px);
                }
                .cart-img img {
                    width: 70px;
                    height: 70px;
                    border-radius: 10px;
                    object-fit: cover;
                }
                .cart-details {
                    flex: 1;
                    margin-left: 15px;
                    text-align: left;
                }
                .quantity-controls {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .quantity-controls button {
                    background: #ff7e67;
                    border: none;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .quantity-controls button:hover {
                    background: #d65a50;
                }
                .remove-btn {
                    background: red;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .remove-btn:hover {
                    background: darkred;
                }
                .cart-total {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;
                    padding: 15px;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                }
                .order-button {
                    margin-top: 20px;
                 
                }
                    
                `}
            </style>
        </div>
    );
};

export default Cart;
