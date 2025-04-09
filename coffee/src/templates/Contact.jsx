import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
    return (
        <div className="contact_section layout_padding" id="Contact">
            <div className="container text-center">
                <h1 className="contact_text">Contact Us</h1>
                <p className="contact_subtext text-dark">We'd love to hear from you! Reach out to us for any queries.</p>
            </div>

            <div className="contact_section_2 layout_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Contact Form */}
                        <div className="col-lg-6 col-md-10">
                            <div className="form-container shadow p-4 rounded">
                                <h3 className="text-center mb-4">Get in Touch</h3>
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Your Email" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="tel" className="form-control" placeholder="Phone Number" required />
                                    </div>
                                    <div className="mb-3">
                                        <textarea className="form-control" placeholder="Message" rows="5" required></textarea>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="col-lg-6 col-md-10 mt-4 mt-lg-0">
                            <div className="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.850507577581!2d72.65323785044832!3d22.997592617057276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87cf76479217%3A0xbe50540453c71a8c!2sVastral%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1714919847915!5m2!1sen!2sin"
                                    width="100%"
                                    height="600"
                                    style={{ border: "0", borderRadius: "10px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for styling */}
            <style>
                {`
                .contact_section {
                    background: white;
                    color: white;
                    padding: 60px 0;
                    text-align: center;
                }
                .contact_text {
                    font-size: 2.5rem;
                    font-weight: bold;
                }
                .contact_subtext {
                    font-size: 1.2rem;
                    margin-bottom: 30px;
                    color: #f8f9fa;
                }
                .contact_section_2 {
                    padding: 50px 0;
                }
                .form-container {
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    border-radius: 10px;
                    padding: 30px;
                    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
                }
                .map-responsive iframe {
                    width: 100%;
                    height: 400px;
                    border-radius: 10px;
                }
                .btn-primary {
                    background-color: #ff7e67;
                    border: none;
                    transition: all 0.3s ease-in-out;
                }
                .btn-primary:hover {
                    background-color: #d65a50;
                    transform: translateY(-3px);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
                }
                `}
            </style>
        </div>
    );
}

export default Contact;
