import React from "react";
import './Home.css';
// import './Services.css'
import ImageService from '../after.jpg'
import PicService from '../service-1.jpg'
import PhotoService from '../service-2.jpg'
import Service from '../service-3.jpg'
import Service2 from '../service-4.jpg'
import Team1 from  '../team-1.jpg'
import Team2 from  '../team-2.jpg'



const Home = () => {
    return (
        <div className="home">
            <div className="hero-container text-xxl-center p-6 ">

                <div className="hero-content text-align-center">
                    <p className="para  text-center mt-20">KEEP YOUR TEETH HEALTHY</p>
                    <h1>Take The Best Qualityt</h1>
                    <h1>Dental Treatment</h1>
                    <div className="hero-actions">
                        <button className="hero-button">Appointment</button>
                        <button className="hero-button">Contact us</button>
                    </div>
                    {/* {/* </div> */}
                </div>
                {/* </div> */}
                
            </div>

            {/* card */}



            <div>
                            <div className="container-fluid"  style={{marginTop:"5%"}}>
                                <div className="row  m-5  p-4 ">
                                    <div className="col-sm-4 md-4 text-white  p-3 bg-primary ">
                                        <h2>Opening Houre</h2>
                                        <h4>Mon-fri    9:00-10:30am</h4>
                                        <h4>Mon-fri    9:00-10:30am</h4>
                                        <h4>Mon-fri    9:00-10:30am</h4>
                                        <button className="hero-button">Appointment</button>
                                         </div>
                                    <div className="col-sm-4  md-4 text-white  bg-dark">
                                        <h2>Search A Doctor</h2>
                                        <input type="text" placeholder="appointemnt Date" style={{padding:"5px",margin:"4px"}}/>
                                        <br/>
                                        <input type="text" placeholder="Doctor Name" style={{padding:"5px",margin:"4px"}} />
                                        <br/>
                                        <button className="hero-button">Search</button>
                                    </div>
                                    <div className="col-sm-4  md-4 text-white bg-danger">
                                        <h2>Make Appointment</h2>
                                        <p>lorem ispum ihfdkd  iyriryer  iuorepr sdhfdf dfkd</p>
                                        <h3>+123 345 566</h3>
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
            {/* < div className="container-fluid mt-3 bg-body-white ">
             
                <div className="row p-5 m-0  align-content-center " style={{height: "300px",marginLeft:"10%", marginTop:"-20%" }}>
                    <div className="col-sm-3  bg-primary text-white  ml-10 mt-5 p-4">
                        <h2 className="class-head p-2  bg-dark text-white p-3 ml-3 ">Opening Hours</h2>
                        <h5 className="class-head p-2" >Mon - Sat 11:00 AM - 23:00 PM</h5>
                        <h5 className="class-head p-2">Mon - Sat 11:00 AM - 23:00 PM</h5>
                        <h5 className="class-head p-2 " >Mon - Sat 11:00 AM - 23:00 PM</h5>
                        <button className="hero-button bg-black text-white  m-5">Appointment</button>


                    </div>
                    <div className="col-sm-3 p-4 bg-info text-white   mt-5 p-4 ">
                        <h2 className="doctor bg-dark text-white p-3 ml-3">Search A Doctor</h2>
                        <input type="text" placeholder="Appointment Date" className="m-3 p-2" />
                        <input type="text" placeholder="Appointment Time" className="m-3 p-2" />
                        <button className="hero-button bg-black text-white m-3">Search Doctor</button>

                    </div>
                    <div className="col-sm-3 p-4 bg-warning text-white  mt-5 p-4">
                        <h2 className="doctor bg-dark text-white p-3 ml-3" >Make Appointment</h2>
                        <h3 className="para m-3 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</h3>
                        <h3 className="para  ">+123 455 6979</h3>
                        <button className="hero-button bg-black text-white m-4">Confirm</button>

                    </div>

                </div>
            </div> */}







           
                     {/* about */}

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

                    <div className="hero-image">
                        <img src="/about.jpg" />
                    </div>
                </div>

            </section>
          {/* services */}

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


            {/* //services part2 */}
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
                        <div className="bottom " style={{ margin: "3%", padding: "5px" }}>
                            <img src={Service} />
                            <h3 className="para text-center">Dental Implants</h3>
                        </div>
                        <div>
                            <img src={Service2} />
                            <h3 className="para text-center">Dental Implants</h3>
                          
                        </div>
                        <div>

                            <div class="container  m-4 text-bg-info">
                                <div class="row p-3" style={{width:"300px"}}>
                                    <div class="col- sm-3 md-3  p-4  ">
                                        
                                                <h3>Make Appointment</h3>
                                                <p>Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                                                <h4>+123 345 789</h4>
                                           
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


                    </div>
                </div>

            {/* //contact */}
            <h1 className="about text-info m-3 text-lg-start ">Contact</h1>
            <div className="container-fluid py-5">
                <div className="container ms-5 mb-5 ">
                    <div className="row g-5">
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
                                        <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{ height: "55px;" }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{ height: "55px;" }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{ height: " 55px;" }} />
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


            {/* <div class="container-fluid-1 banner mb-5 m-5">
        <div class="container">
            <div class="row gx-0">
                <div class="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                    <div class="bg-primary d-flex flex-column p-5" style={{height: "300px;"}}>
                        <h3 class="text-white mb-3">Opening Hours</h3>
                        <div class="d-flex justify-content-between text-white mb-3">
                            <h6 class="text-white mb-0">Mon - Fri</h6>
                            <p class="mb-0"> 8:00am - 9:00pm</p>
                        </div>
                        <div class="d-flex justify-content-between text-white mb-3">
                            <h6 class="text-white mb-0">Saturday</h6>
                            <p class="mb-0"> 8:00am - 7:00pm</p>
                        </div>
                        <div class="d-flex justify-content-between text-white mb-3">
                            <h6 class="text-white mb-0">Sunday</h6>
                            <p class="mb-0"> 8:00am - 5:00pm</p>
                        </div>
                        <a class="btn btn-light" href="">Appointment</a>
                    </div>
                </div>
                <div class="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                    <div class="bg-dark d-flex flex-column p-5" style={{height: "300px;"}}>
                        <h3 class="text-white mb-3">Search A Doctor</h3>
                        <div class="date mb-3" id="date" data-target-input="nearest">
                            <input type="text" class="form-control bg-light border-0 datetimepicker-input"
                                placeholder="Appointment Date" data-target="#date" data-toggle="datetimepicker" style={{height:"40px"}}/>
                        </div>
                        <select class="form-select bg-light border-0 mb-3" style={{height:"40px;"}}>
                            <option selected>Select A Service</option>
                            <option value="1">Service 1</option>
                            <option value="2">Service 2</option>
                            <option value="3">Service 3</option>
                        </select>
                        <a class="btn btn-light" href="">Search Doctor</a>
                    </div>
                </div>
                <div class="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                    <div class="bg-secondary d-flex flex-column p-5" style={{height: "300px;"}}>
                        <h3 class="text-white mb-3">Make Appointment</h3>
                        <p class="text-white">Ipsum erat ipsum dolor clita rebum no rebum dolores labore, ipsum magna at eos et eos amet.</p>
                        <h2 class="text-white mb-0">+012 345 6789</h2>
                    </div>
                </div>
            </div>
        </div>
    </div> */}


        </div>

        //   </div>




        // </div>






    )
}

export default Home;

