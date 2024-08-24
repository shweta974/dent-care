import React from "react";
import './Services.css';
import ImageService from '../after.jpg'
import PicService from '../service-1.jpg'
import PhotoService from '../service-2.jpg'
import Service from '../service-3.jpg'
import Service2 from '../service-4.jpg'
// import Service3 from '../service-5.jpg'

const Services = () => {
    return (
        <div className="services">
            <div className="hero-services-1">
                <div className="container-services-1">
                    <div className="services-left">
                        <h1 className="head text-white" >We Are A Certified and</h1>
                        <h1>Award Winning Dental</h1>
                        <h1>Clinic You Can Trust</h1>
                        <p>Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum.
                            Dolor ea et dolore et at sea ea at dolor, justo ipsum
                            duo rebum sea invidun
                            t voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt
                            lorem. Elitr ut dolores magna sit.
                            Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                    </div>
                    <div className="services-right ">
                        <h1>MAke Appointment</h1>
                        <form className="input-field ">
                            <input type="text" placeholder="Select a Services" className="name" />
                            <input type="text" placeholder="Select a Doctor" className="email" />
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Your Email" />
                            <input type="text" placeholder="Appointment Date" />
                            <input type="text" placeholder="Appointment time" /><br />
                            <button className="hero-button">Make Appointment</button>
                        </form>



                    </div>
                </div>
            </div>

            <section>
                {/* <div className="services-mid">
                    <div className="container-services-mid">
                  
                        <div className="services-mid-left">
                            <img src={ImageService} style={{width:"400px", margin:"5%"}}/>
                        </div>

                        <div className="services-mid-right">
                            
                         
                            <div className="services-mid-right-img"> Our Services

                                <img src={PicService} style={{width:"300px", padding:"5PX"}}/>
                                <p>dgdjf</p>
                            </div>
                            <div>
                                <img src={PhotoService}/>
                                <p>sheyr</p>
                            </div>
                          

                    
                        
                         
                          
                             </div>
                    </div>

                </div> */}

                <div className="mountain">
                    <div className="mountainer-container">
                        <div className="left-side">
                            <img src={ImageService} style={{ width: "400px", margin: "5%" }} />
                        </div>
                        <div className="right-side" style={{ margin: "10%", paddingBlockStart: "4%" }}>
                            <div className="heading">
                                <h2 className="4 text-info">Our Services</h2>
                                <h1>We Offer The Best Quality Dental Services</h1>

                            </div>
                            <div className="right-side-part1">
                                <div className="ice">
                                    <div className="img-ice">
                                        <img src={PicService} />
                                        <h3 className="para text-center">Cosmetic Dentistry</h3>
                                    </div>
                                    <div className="img-ice">
                                        <img src={PhotoService} alt="photo" />
                                        <h3 className="para text-center">Dental Implants</h3>
                                    </div>


                                </div>



                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="top" >
                        <div className="bottom " style={{ margin: "4%", padding: "5px" }}>
                            <img src={Service} />
                        </div>
                        <div>
                            <img src={Service2} />
                        </div>
                        <div>

                            <div class="container  m-4 text-bg-info">
                                <div class="row p-3">
                                    <div class="col- sm-4 md-6  p-4  ">
                                        <div class="card">

                                            <div class="card-body">
                                                <h3>Make Appointment</h3>
                                                <p>Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                                                <h4>+123 345 789</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container-fluid-med" >
                        <div class="row  bg-info" style={{width:"600px",padding:"10px" }}>
                            <div class="col- sm-4 md-2  p-4  ">
                       

                                 
                                        <h1>Save 30% On Your First Dental Checkup</h1>
                                        <p>Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et 
                                            dolore et at sea ea at dolor justo ipsum duo 
                                            rebum sea. Eos vero eos vero ea et dolore eirmod diam duo 
                                            lorem magna sit dolore sed et.</p>
                                         <button className="hero-btn p-2 bg-white text-dark m-3 rounded">Appointment</button>
                                         <button className="hero-btn p-2 bg-white text-dark m-3 rounded">Read More</button>
                                    
                               
                            </div>
                        </div>
                    </div>

                   
                </div>
            </section>


        </div>


    )
}

export default Services;