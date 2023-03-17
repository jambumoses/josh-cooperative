import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import banner from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM (1).jpeg";
import banner2 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.12 PM.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

export default function HomeBanner() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <>
        <div className="homeBanner-blur"></div>

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
              <span><Link to="/" className="a" href="">home </Link></span>.
              <span><Link to="/blog" className="a active" href="">blog</Link></span>.
              <span><Link to="/about" className="a" href="">about us </Link></span>.
              <span><Link to="/services" className="a" href="">services</Link></span>.
              <span><Link to="/gallery" className="a" href="">gallery</Link></span>.
              <span><Link to="/contact" className="a" href="">contact us</Link></span>
            </div>
          </nav>
        </section>
      {/* <section className="homeBanner"></section> */}

      
      <section className="homebanner-about">
        <div data-aos="fade-up" className="homebanner-about-floating-image">
          <img src="" alt="" />
        </div>

        <div data-aos="fade-up" className="homebanner-about-small-note">
          <span data-aos="fade-up" className="sub-title">about veggie</span>
          <span data-aos="fade-up" className="title">super market</span>
          <p data-aos="fade-up">
            we deliver fresh farm produce fruits and vegitables to our esteemed
            customers, Our team members are farm and horticulture experts, who
            helps us to choose the best quality products from the farmer's house
            accorss the country.
          </p>

          <a href="/about-us" style={{textDecoration: "none"}}>
            <button data-aos="fade-up">read more</button>
          </a>
        </div>
      </section>
    </>
  );
}
