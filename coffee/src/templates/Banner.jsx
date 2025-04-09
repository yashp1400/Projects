import React from 'react';

function Banner() {
    return (
        <div className="banner_section layout_padding">
            <div className="container">
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row text-center">
                                <div className="col-lg-8 col-md-10 col-sm-12">
                                    <div className="banner_taital">
                                        <h1 className="outstanding_text">Outstanding</h1>
                                        <h1 className="coffee_text">CoffeeCozy</h1>
                                        <p className="there_text">
                                            "It's always good to have a little creamer with your morning coffee. It will sweeten you up in no time."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
