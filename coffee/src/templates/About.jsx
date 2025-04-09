import React from 'react';

function About() {
    return (
        <div className="about_section layout_padding" id="AboutUs">
                <div className="row align-items-center">
                    {/* Text Content */}
                    <div className="col-lg-6 col-md-12 text-center text-lg-left">
                        <div className="about_taital_main">
                            <h2 className="about_taital">About Us :</h2>
                            <p className="about_text">
                                CozyCoffee is a creative coffee shop for those who seek an outstanding cup of coffee.
                                We are dedicated and responsible for precise and better quality coffee.
                                Quality is our first priority. This includes our skills, equipment, ingredients, and our services.
                            </p>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
                        <div className="about_img">
                            <img src="images/about-img.png" alt="About Us" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default About;
