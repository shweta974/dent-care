import React from "react";
// import Footer from "./Footer";

import './Contact.css';

const Contact=()=>{
    return(
        <div>
            <h1>Contact Us</h1>
            <div className="banner"> <h1 className="heading text-info text-center p-6"><b>Contact us</b></h1>
                </div>
            <div className="container-fluid py-5">
        <div className="container ">
            <div className="row m-5">
                <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.1s" bg-info>
                {/* // style={"visibility: visible; animation-delay: 0.1s; animation-name: slideInUp;"} */}
                    <div className="bg-light rounded h-100 p-5 bg-color-info">
                        <div className="section-title ">
                            <h5 className="position-relative d-inline-block text-primary text-uppercase">Contact Us</h5>
                            <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                            <div className="text-start">
                                <h5 className="mb-0">Our Office</h5>
                                <span>123 Street, New York, USA</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                            <div className="text-start">
                                <h5 className="mb-0">Email Us</h5>
                                <span>info@example.com</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                            <div className="text-start">
                                <h5 className="mb-0">Call Us</h5>
                                <span>+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.3s" >
                    <form className="form m-3">
                        <div className="row g-3">
                            <div className="col-12">
                                <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{height:"55px;"}}/>
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: "55px;"}}/>
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{height:" 55px;"}}/>
                            </div>
                            <div className="col-12">
                                <textarea className="form-control border-0 bg-light px-4 py-3" rows="5" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-4 col-lg-12 wow slideInUp" data-wow-delay="0.6s" >
                    <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
                
                {/* <Footer/> */}
            </div>

       
    )
}
export default Contact;