import React, { useState, useEffect } from 'react';
import Navbar from './templates/Navbar';
import Banner from './templates/Banner';
import About from './templates/About';
import Gallery from './templates/Gallery';
import Services from './templates/Services';
import Testimonial from './templates/Testimonial';
import Contact from './templates/Contact';
import Footer from './templates/Footer';
import './templates/amazon.css';
import 'animate.css/animate.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import 'jquery-ui-dist/jquery-ui.css';
import LoginSignup from './templates/LoginSignup';
import Cart from './templates/Cart';
import Amazon from './templates/Amazon';
import CartFooter from './templates/CartFooter';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
    const [showComponent, setShowComponent] = useState(false);
    const [islogin, setIslogin] = useState(false);

    const toggleComponent = () => {
        setShowComponent(!showComponent);
    };
    const handleLogout = () => {
      setIslogin(false);
      setShowComponent(false);  // Hide the LoginSignup component after login
  };
    const handleLogin = () => {
        setIslogin(true);
        setShowComponent(false);  // Hide the LoginSignup component after login
    };

    // Cart function
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const handleClick = (coffee) => {
        console.log('card added');
        let isPresent = false;
        cart.forEach((product) => {
            if (coffee.id === product.id) isPresent = true;
        });
        if (isPresent) {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 2000);
            return;
        }
        setCart([...cart, coffee]);
    };

    const handleChange = (item, d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if (data.id === item.id) ind = index;
        });
        const tempArr = cart;
        tempArr[ind].amount += d;
        if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
        setCart([...tempArr]);
    };

    return (
        <div className="App">
            <Navbar toggleComponent={toggleComponent} login={islogin} onLogout={handleLogout} />
            {showComponent ? (
                <LoginSignup onLogin={handleLogin} />
            ) : show ? (
                <>
                    <Banner />
                    <About />
                    <Amazon handleClick={handleClick} />
                    {warning && <div className='warning'>Item is already added to your cart</div>}
                    <Services />
                    <Testimonial />
                    <Contact />
                    <Footer />
                    {cart.length === 0 ? null : <CartFooter amount={cart.length} setShow={setShow} />}
                </>
            ) : (
                <Cart
                    cart={cart}
                    setCart={setCart}
                    handleChange={handleChange}
                    setShow={setShow}
                    toggleComponent={toggleComponent}
                    login={islogin}
                />
            )}
        </div>
    );
}

export default App;
