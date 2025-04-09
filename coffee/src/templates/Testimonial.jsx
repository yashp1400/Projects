import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Testimonial() {
    useEffect(() => {
        const bootstrap = require("bootstrap");
        new bootstrap.Carousel(document.getElementById("testimonialCarousel"), {
            interval: 3000,
            pause: "hover",
            wrap: true, // Ensures the carousel loops
        });
    }, []);

    return (
        <div className="client_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="client_taital">Testimonial</h1>
                        <p className="client_text">Our Happy Customers</p>
                    </div>
                </div>
            </div>

            {/* Bootstrap Carousel */}
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    {/* Client 1 */}
                    <div className="carousel-item active">
                        <div className="client_section_2 d-flex justify-content-center align-items-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 col-md-10 col-12">
                                        <div className="testimonial_section_2 p-4 shadow rounded">
                                            <h4 className="client_name_text">
                                                Tapasya  
                                                <span className="quick_icon ms-2">
                                                    <img src="images/quick-icon.png" alt="Quick Icon" className="img-fluid" />
                                                </span>
                                            </h4>
                                            <p className="customer_text">
                                                I would probably say that this coffee shop is a must for coffee lovers! The service was good, and the variety of coffee served in the ambiance was very satisfying. If you like your coffee shops, then this is a must-visit! We will be back again!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Client 2 */}
                    <div className="carousel-item">
                        <div className="client_section_2 d-flex justify-content-center align-items-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 col-md-10 col-12">
                                        <div className="testimonial_section_2 p-4 shadow rounded">
                                            <h4 className="client_name_text">
                                                Rajesh  
                                                <span className="quick_icon ms-2">
                                                    <img src="images/quick-icon.png" alt="Quick Icon" className="img-fluid" />
                                                </span>
                                            </h4>
                                            <p className="customer_text">
                                                This coffee shop serves the best espresso I’ve ever had! The staff is friendly, and the atmosphere is just perfect. Highly recommended for coffee enthusiasts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Client 3 */}
                    <div className="carousel-item">
                        <div className="client_section_2 d-flex justify-content-center align-items-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 col-md-10 col-12">
                                        <div className="testimonial_section_2 p-4 shadow rounded">
                                            <h4 className="client_name_text">
                                                Priya  
                                                <span className="quick_icon ms-2">
                                                    <img src="images/quick-icon.png" alt="Quick Icon" className="img-fluid" />
                                                </span>
                                            </h4>
                                            <p className="customer_text">
                                                I love the variety of coffee flavors available here. The ambiance is so cozy, and the customer service is top-notch. Will definitely visit again!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Custom CSS to Fix Button Visibility */}
            <style>
                {`
                    .carousel-control-prev, 
                    .carousel-control-next {
                        width: 5%; /* Adjust button width */
                        opacity: 1; /* Make sure the buttons are fully visible */
                    }
                    
                    .carousel-control-prev-icon, 
                    .carousel-control-next-icon {
                        background-color: rgba(0, 0, 0, 0.5); /* Dark background for better visibility */
                        border-radius: 50%;
                        padding: 10px;
                    }
                `}
            </style>
        </div>
    );
}

export default Testimonial;
