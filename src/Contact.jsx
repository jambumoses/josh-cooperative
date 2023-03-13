import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import banner from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM (1).jpeg";
import { constantActions } from './store/constantSlice';
import contactImage from "./assets/images/undraw_wind_turbine_x-2-k4.svg";

export default function Contact() {

    const dispatch = useDispatch();
    const companyName = useSelector(state=>state.constant.companyTitle)
  
    dispatch(constantActions.updatePageTitles(companyName+" . "+"Contact Us")); // company name here
    dispatch(constantActions.setCurrentPage("Contact"));

  return (
    <section>
        <div className="contactBanner-image">
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=african%20queen&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
        </div>
        <section className="contactBanner-section">

        <div className="contactBanner-title">
            <h3>contact us</h3>
        </div>
        
        <nav>
            <div className='nav-socials'>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-facebook"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-linkedin"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
            </div>
            <div>
                <span><Link to="/" className="a" href="">home </Link></span>.
                <span><Link to="/blog" className="a" href="">blog</Link></span>.
                <span><Link to="/about" className="a" href="">about us </Link></span>.
                <span><Link to="/services" className="a" href="">services</Link></span>.
                <span><Link to="/gallery" className="a" href="">gallery</Link></span>.
                <span><Link to="/contact" className="a active" href="">contact us</Link></span>
            </div>
        </nav>
        </section>


        <section className='contactInformation-section'>
            <div className='contactInformation-item'>
                <span className='contactInformation-item-icon'><i className="fa fa-phone"></i></span>
                <span className='contactInformation-item-title'>phone</span>
                <span className='contactInformation-item-content'>0708093144</span>
            </div>

            <div className='contactInformation-item'>
                <span className='contactInformation-item-icon'><i className="fa fa-envelope"></i></span>
                <span className='contactInformation-item-title'>Email</span>
                <span className='contactInformation-item-content'>jambcareer@gmail.com</span>
            </div>

            <div className='contactInformation-item'>
                <span className='contactInformation-item-icon'><i className="fa fa-location-dot"></i></span>
                <span className='contactInformation-item-title'>address</span>
                <span className='contactInformation-item-content'>Cooperative Society Ltd Was Founded In 2012</span>
            </div>

            <div className='contactInformation-item'>
                <span className='contactInformation-item-icon'><i className="fa fa-phone"></i></span>
                <span className='contactInformation-item-title'>whatsUp</span>
                <span className='contactInformation-item-content'>0708093144</span>
            </div>
        </section>

        <div className='get-in-touch'>
            <h3>Get in touch</h3>
            <p>
            Cooperative Society Ltd Was Founded In 2012 Cooperative Society Ltd Was Founded In 2012
            </p>
        </div>

        <section className='contactInformation-form-section'>
            <section className='contactInformation-form-bg'>
                <img src={contactImage} alt="" />
            </section>

            <section className='contactInformation-form'>
                <span className='contactInformation-form-input-cont'>
                    <span className='contactInformation-form-lebal'>your name :</span>
                    <span className='contactInformation-form-inputs'>
                        <input type="text" name="" id="" placeholder='First name' />
                        <input type="text" name="" id="" placeholder='Last name' />
                    </span>
                </span>

                <span className='contactInformation-form-input-cont'>
                    <span className='contactInformation-form-lebal'>e-mail :</span>
                    <span className="contactInformation-form-inputs">
                        <input type="email" name="" id="" placeholder='Enter Email Address'/>
                    </span>
                </span>

                <span className='contactInformation-form-input-cont'>
                    <span className='contactInformation-form-lebal'>phone:</span>
                    <span className="contactInformation-form-inputs">
                        <input type="text" placeholder='Enter Phone Number'/>
                    </span>
                </span>

                <span className='contactInformation-form-input-cont'>
                    <span className='contactInformation-form-lebal'>you message :</span>
                    <span className='contactInformation-form-inputs'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Enter Your Message Here'></textarea>
                    </span>
                </span>

                <span className='contactInformation-form-input-cont'>
                    <span className='contactInformation-form-inputs'>
                        <button type='button'>send</button>
                    </span>
                </span>
            </section>
        </section>
    </section>
  )
}
