import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
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

  const merchantData = useSelector(state=>state.constant.data.merchant);

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[]);

  return (
    <section>
        <div className="contactBanner-image">
            <iframe id="gmap_canvas" src={merchantData.company.mapURL} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
        </div>
        <section className="contactBanner-section">

        <div className="contactBanner-title">
            <h3>contact us</h3>
        </div>
        
        <nav>
            <div className='nav-socials'>
                {
                    merchantData.socials.map(function(item){
                        return(
                            <a href={item.link} key={item._id}><i className={item.icon}></i></a>
                        )
                    })
                }
            </div>
            <div>
                <span><Link to="/" className="a" href="">home </Link></span>.
                <span><Link to="/blog" className="a" href="">blog</Link></span>.
                <span><Link to="/about" className="a" href="">about us </Link></span>.
                {/* <span><Link to="/services" className="a" href="">services</Link></span>. */}
                <span><Link to="/gallery" className="a" href="">gallery</Link></span>.
                <span><Link to="/contact" className="a active" href="">contact us</Link></span>
            </div>
        </nav>
        </section>


        <section className='contactInformation-section'>
            {
                merchantData.contact.map(function(item){
                    return(
                        <div key={item._id} data-aos="fade-up" className='contactInformation-item'>
                            <span className='contactInformation-item-icon'><i className={item.icon}></i></span>
                            <span className='contactInformation-item-title'>{item.title}</span>
                            <span className='contactInformation-item-content'>{item.link}</span>
                        </div>
                    )
                })
            }
        </section>

        <section className='offices-section'>
            <h5>
                <span data-aos="fade-left"><i className="fa fa-building"></i></span> 
                <span data-aos="fade-left">our offices</span>
            </h5>
            <p data-aos="fade-right">
                The cooperative is in Katakwi District with its main offices is located at Abarata Keere Weekly Market, Okuda Trading Center, Ongongoja Sub-County Katakwi District Eastern Uganda.
            </p>
        </section>

        <div className='get-in-touch'>
            <h3 data-aos="fade-up">Get in touch</h3>
            <p data-aos="fade-up">
            Cooperative Society Ltd Was Founded In 2012 Cooperative Society Ltd Was Founded In 2012
            </p>
        </div>

        <section className='contactInformation-form-section'>
            <section data-aos="fade-up" className='contactInformation-form-bg'>
                <img src={contactImage} alt="" />
            </section>

            <section data-aos="fade-up" className='contactInformation-form'>
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

        <section className="contact-map-section">
            <iframe id="gmap_canvas" src={merchantData.company.mapURL} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
        </section>
    </section>
  )
}
