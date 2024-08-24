import React from "react";
import './Footer.css'

const Footer=()=>{
    return(
        <div className="footer">
            <div className="container-fluid  ">
                <div className="row text-white m-0 p-4 ">
                    <div className="col-md-3 ml-10">
                        <h1>Quick Links</h1>
                        <ul className="list-unstyled">
                            <li><a >Home</a></li>
                            <li><a >Contact Us</a></li>
                            <li><a >About us</a></li>
                            <li><a >our services</a></li>
                            <li><a>Latest Blog</a></li>
                           
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h1>Popular Links</h1>
                        <ul className="list-unstyled">
                        <li ><a >Home</a></li>
                            <li><a >Contact Us</a></li>
                            <li><a >About us</a></li>
                            <li><a >our services</a></li>
                            <li><a>Latest Blog</a></li>
                           
                           

                        </ul>
                    </div>
                    <div className="col-md-3 gap-2">
                        <h1>Get In Touch</h1>
                         <p> <i className="fa-regular fa-location-dot "></i>123 Street,New York,USA </p>
                         <p><i className="fa-regular fa-phone "></i>Phone: +123 456 7890</p>
                         <p><i className="fa-regular fa-envelope "></i>Email: info@yourdomain.com</p>
                        
                    </div>
                    <div className="col">
                        <h1>Follow Us</h1>
                        <ul className="list-icons d-flex list-unstyled">
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-google"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Footer;