import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer_section">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="footer_title">About Us</h3>
                        <p className="footer_text">
                            CozyCoffee is a creative coffee shop for those who seek an outstanding cup of coffee. We prioritize quality in everything—skills, equipment, ingredients, and services.
                        </p>
                    </div>

                    {/* Menu Links */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="footer_title">Menu</h3>
                        <ul className="footer_menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="footer_title">Useful Links</h3>
                        <ul className="footer_links">
                            <li><a href="https://github.com/yashp1400" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
                            <li><a href="#"><FaFacebook /> Facebook</a></li>
                            <li><a href="#"><FaInstagram /> Instagram</a></li>
                            <li><a href="#"><FaTwitter /> Twitter</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="footer_title">Contact Us</h3>
                        <ul className="footer_contact">
                            <li><FaMapMarkerAlt /> Vastral, Ahmedabad</li>
                            <li><FaPhoneAlt /> +91 7567939840</li>
                            <li><FaEnvelope /> yashpanchal1408@gmail.com</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
               
            </div>

            {/* Custom Styling */}
            <style>
                {`
                .footer_section {
                    background: #181818;
                    color: white;
                    padding: 50px 0;
                }
                .footer_title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                    color: #f8f9fa;
                }
                .footer_text {
                    font-size: 1rem;
                    color: #cccccc;
                }
                .footer_menu, .footer_links, .footer_contact {
                    list-style: none;
                    padding: 0;
                }
                .footer_menu li, .footer_links li {
                    margin-bottom: 10px;
                }
                .footer_menu li a, .footer_links li a {
                    color: #bdbdbd;
                    text-decoration: none;
                    font-size: 1rem;
                    transition: color 0.3s;
                }
                .footer_menu li a:hover, .footer_links li a:hover {
                    color: #ff6f61;
                }
                .footer_contact li {
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
                    color: #bdbdbd;
                }
                .footer_contact li svg {
                    color: #ff6f61;
                }
                .footer_copyright {
                    font-size: 0.9rem;
                    color: #999999;
                }
                .footer_copyright a {
                    color: #ff6f61;
                    text-decoration: none;
                }
                `}
            </style>
        </footer>
    );
}

export default Footer;
