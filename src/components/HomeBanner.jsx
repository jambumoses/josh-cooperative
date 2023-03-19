import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import banner from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM (1).jpeg";
import banner2 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.12 PM.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import logo from "../assets/images/logo.png";

import image1 from "../assets/images/apple.jpeg";
import image2 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.12 PM (1).jpeg";
import image3 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.12 PM (2).jpeg";
import image4 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.13 PM (1).jpeg";
import image5 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.13 PM (2).jpeg";
import image6 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.16 PM (1).jpeg";
import image7 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.15 PM.jpeg";
import image8 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.15 PM (2).jpeg";
import image9 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.15 PM (1).jpeg";
import image10 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM.jpeg";
import image11 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM (2).jpeg";
import image12 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.16 PM.jpeg";
import image13 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.12 PM.jpeg";

import homeFarm from "../assets/images/aboutus.png";

export default function HomeBanner() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <>
        <div className="home-logo">
          <span>
            <img src={logo} alt="" />
          </span>
        </div>

        <div className="homeBanner-blur">
        </div>

        <div className="HomeBanner-image">
          <Carousel  interval={5000} indicators={false} pause={false} style={{backgroundColor:"transparent",height: "100vh",width:"100%"}}>
            <Carousel.Item>
              <div className="HomeBanner-image-thumb">
                <img src={banner} alt="" />
              </div>
              </Carousel.Item>

              <Carousel.Item>
              <div className="HomeBanner-image-thumb">
                <img src={banner2} alt="" />
              </div>
              </Carousel.Item>
          </Carousel>
        </div>
        
        <section className="blogBanner-section" style={{background:"transparent"}}>

          <div className="blogBanner-title">
            <h3></h3>
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
              <span><Link to="/" className="a active" href="">home </Link></span>.
              <span><Link to="/blog" className="a" href="">blog</Link></span>.
              <span><Link to="/about" className="a" href="">about us </Link></span>.
              {/* <span><Link to="/services" className="a" href="">services</Link></span>. */}
              <span><Link to="/gallery" className="a" href="">gallery</Link></span>.
              <span><Link to="/contact" className="a" href="">contact us</Link></span>
            </div>
          </nav>
        </section>
      {/* <section className="homeBanner"></section> */}

      
      <section className="homebanner-about">
        <div data-aos="fade-up" className="homebanner-about-floating-image">
          <img src={homeFarm} alt="" />
        </div>

        <div data-aos="fade-up" className="homebanner-about-small-note">
          <span data-aos="fade-up" className="sub-title">about the cooperative</span>
          <span data-aos="fade-up" className="title">Ongongoja fruit growers’ cooperative society LTD</span>
          <p data-aos="fade-up">
           was started in 2012 by a group of farmers who were engaged in fruit growing to look for market for their fruits and in 2014 was registered with the republic of Uganda under permanent registration nationally in November, 2014 and it has been operational since then. However as the market for fruits became scarce, members decided to go multipurpose right from 2018 and the cooperative is engaged in multiple businesses but majorly in ...
          </p>

          <a href="/about-us" style={{textDecoration: "none"}}>
            <button data-aos="fade-up">read more</button>
          </a>
        </div>
      </section>
    </>
  );
}
