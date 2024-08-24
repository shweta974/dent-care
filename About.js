import React from "react";
import './About.css'
import Team1 from  '../team-1.jpg'
import Team2 from  '../team-2.jpg'
import Team3 from '../team-3.jpg'
import Team4 from '../team-4.jpg'
import Team5 from '../team-5.jpg'

   




const About = () => {
    return (

<div className="about" id="about">





<section className="hero">
                <div className="heading">
                    <h1 className="about text-info m-3 text-lg-start">About us</h1>
                </div>
                <div className="container bg-light m-3">
                    <div className="hero-content">
                        <h1 className="g-2"><b>The World's Best Dental Clinic That You Can Trust</b></h1>
                        <h3 className="para text-warning">Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore
                        </h3>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor
                            eirmod magna dolore erat amet</p>

                            <button className="hero-button m-3">Learn More</button>
                        <button className="btn">Make Appointment</button>
                    </div>

                    <div className="hero-iamge">
                        <img src="/about.jpg" />
                    </div>
                </div>

            </section>

            <div className="container-services"  >
                <div className="services-left text-bg-secondary">
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

           {/* services */}

           <div className="box">
                        <div className="box-content">
                            <div className="box-left">
                                <div className="box-left-info">
                                   <h2 className="text-info ">Our Dentist</h2>
                                   <h1 className="head text-dark"><b>Meet Our Certified &
                                     Experienced Dentist </b></h1>
                                   <button className="hero-button p-2 bg-white text-dark m-3 rounded">Appointment</button>

                            
                       
                                </div>
                                
                                </div>
                            <div className="box-mid m-5"> 
                            <div className="box-mid-info">
                                    <img src={Team1}/>
                                    <ul className="list-icons d-flex gap-4 text-center text-white p-2 m-2 ">
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-google"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                        <h3>Dr John Joe</h3>
                        <h4>Dental Implants</h4>
                                </div>
                                
                                
                                </div>
                            <div className="box-right m-5">
                                
                            <div className="box-right-info">
                                    <img src={Team2}/>
                                    <ul className="list-icons d-flex gap-4 text-center text-white p-2 m-2 ">
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-google"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                        <h3>Dr John Joe</h3>
                        <h4>Dental Implants</h4>
                                </div>
                                </div>
                        </div>

                        <div className="box-content">
                            <div className="box-left">
                                <div className="box-left-info">
                                 <img  src={Team3}/>
                                 <ul className="list-icons d-flex gap-4 text-center text-white p-2 m-2 ">
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-google"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                        <h3>Dr John Joe</h3>
                        <h4>Dental Implants</h4>

                            
                       
                                </div>
                                
                                </div>
                            <div className="box-mid m-5"> 
                            <div className="box-mid-info">
                                    <img src={Team4}/>
                                    <ul className="list-icons d-flex gap-4 text-center text-white p-2 m-2 ">
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-google"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                        <h3>Dr John Joe</h3>
                        <h4>Dental Implants</h4>
                                </div>
                                
                                
                                </div>
                            <div className="box-right m-5">
                                
                            <div className="box-right-info">
                                    <img src={Team5}/>
                                    <ul className="list-icons d-flex gap-4 text-center text-white p-2 m-2 ">
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-google"></i></a></li>
                            <li className="icons bg-light p-2"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                        <h3>Dr John Joe</h3>
                        <h4>Dental Implants</h4>
                                </div>
                                </div>
                        </div>


                    </div>
            

       

               
            
        

       </div>
    )
}

export default About;