import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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

export default function HomeService() {
  
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <section className="home-service-section">
      <h3 data-aos="fade-up">services</h3>
      <p data-aos="fade-up">
      The members of the cooperative society have access to affordable specialized services in ensuring cost-effectiveness and efficiencies of farmer members’ 
      </p>

      <div className="home-service-container">
        <div data-aos="fade-up" className="home-service-item">
          <h5>fruits & vegitables</h5>
          <span>
          we deliver fresh farm produce fruits and vegitables to our esteemed
        customers, Our team members are farm and horticulture
          </span>
          <div><img src={image4} alt="" /></div>
        </div>

        <div data-aos="fade-up" className="home-service-item">
          <h5>fruits & vegitables</h5>
          <span>
          we deliver fresh farm produce fruits and vegitables to our esteemed
        customers, Our team members are farm and horticulture
          </span>
          <div><img src={image5} alt="" /></div>
        </div>

        <div data-aos="fade-up" className="home-service-item">
          <h5>fruits & vegitables</h5>
          <span>
          we deliver fresh farm produce fruits and vegitables to our esteemed
        customers, Our team members are farm and horticulture
          </span>
          <div><img src={image6} alt="" /></div>
        </div>

        <div data-aos="fade-up" className="home-service-item">
          <h5>fruits & vegitables</h5>
          <span>
          we deliver fresh farm produce fruits and vegitables to our esteemed
        customers, Our team members are farm and horticulture
          </span>
          <div><img src={image7} alt="" /></div>
        </div>
      </div>

      <div>
        <a href="/services">
          <button data-aos="fade-up">know more</button>
        </a>
      </div>
    </section>
  );
}
