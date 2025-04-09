import React from 'react'

function Services() {
    return (
      <div className="services_section layout_padding" id='Services'>
         <div className="container">
                  <div className="row">
                      <div className="col-sm-12">
                          <h1 className="services_taital">Services</h1>
                          <p className="services_text">"You are serving a customer, not a life sentence. Learn how to enjoy your work."</p>
                      </div>
                  </div>
                  <div className="services_section_2">
                      <div className="row">
                          {/* Service items */}
                          <div className="col-lg-4 col-sm-12 col-md-4">
                              <div className="box_main active">
                                  <div className="house_icon">
                                      <img src="images/icon1.png" className="image_1" alt="Service Icon" />
                                      <img src="images/icon1.png" className="image_2" alt="Service Icon" />
                                  </div>
                                  <h3 className="decorate_text">Original Coffee</h3>
                                  <p className="tation_text">"Coffee, unless it is very good and made by somebody else, is pretty intolerable at any time." </p>
                                  
                              </div>
                          </div>
                          {/* Add more service items here */}
                          <div className="col-lg-4 col-sm-12 col-md-4">
                              <div className="box_main active">
                                  <div className="house_icon">
                                      <img src="images/icon2.png" className="image_1" alt="Service Icon" />
                                      <img src="images/icon2.png" className="image_2" alt="Service Icon" />
                                  </div>
                                  <h3 className="decorate_text">10 Coffee Flavors</h3>
                                  <p className="tation_text">"What goes best with a cup of coffee? Another cup." </p>
                                  
                              </div>
                          </div>
                          <div className="col-lg-4 col-sm-12 col-md-4">
                              <div className="box_main active">
                                  <div className="house_icon">
                                      <img src="images/icon3.png" className="image_1" alt="Service Icon" />
                                      <img src="images/icon3.png" className="image_2" alt="Service Icon" />
                                  </div>
                                  <h3 className="decorate_text">Pleasant Abient</h3>
                                  <p className="tation_text">"Coffee is a kind of magic you can drink." </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      </div>
    );
  }

  export  default Services;
  