import React from "react";
import './Page.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
// import ImageService from '../after.jpg';
import Caro1 from '../carousel-1.jpg'
import Caro2 from '../carousel-2.jpg'
import PicService from '../service-1.jpg'
import PhotoService from '../service-2.jpg'

const Pages=()=>{
    return(
        <div>

<div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={Caro1} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3"  style={{maxWidth:"900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment</h1>
                            <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={Caro2} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth:" 900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment</h1>
                            <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
            <Navbar/>
            <h1>Page</h1>
            {/* <section className="page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="page__img">
                             <img src={PicService}/>
                             <img src={PhotoService}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="page__content">
                                <h2>Hlo guys</h2>
                            </div>
                        </div>

                    </div>
                </div>


            </section> */}
            <Footer/>
            
       
        </div>
    )
}
export default Pages