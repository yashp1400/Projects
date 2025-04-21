import React, { useState } from "react";
import "./styles.css";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function ModernLoginSignup({ onLogin }) {
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const toggleMode = () => {
        setIsSignUpMode(!isSignUpMode);
    };

    return (
        <div className={`modern-container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    {/* Sign In Form */}
                    <form action="#" className="sign-in-form modern-form">
                        <h2 className="modern-title">Sign in</h2>
                        <div className="input-field">
                            <FaEnvelope className="input-icon" />
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <FaLock className="input-icon" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" className="modern-btn solid" />

                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>

                    {/* Sign Up Form */}
                    <form action="#" className="sign-up-form modern-form">
                        <h2 className="modern-title">Sign up</h2>
                        <div className="input-field">
                            <FaUser className="input-icon" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <FaEnvelope className="input-icon" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <FaLock className="input-icon" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" className="modern-btn" value="Sign up" />

                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="panel-content">
                        <h3>New here?</h3>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className="modern-btn transparent" onClick={toggleMode}>
                            Sign up
                        </button>
                    </div>
                    <img src="/img/log.svg" className="panel-image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="panel-content">
                        <h3>One of us?</h3>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="modern-btn transparent" onClick={toggleMode}>
                            Sign in
                        </button>
                    </div>
                    <img src="/img/register.svg" className="panel-image" alt="" />
                </div>
            </div>
        </div>
    );
}

export default ModernLoginSignup;
