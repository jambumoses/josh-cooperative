import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function HomeService() {
  
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <section className="home-service-section">
      <h3 data-aos="fade-up">services</h3>
      <p data-aos="fade-up">
        we deliver fresh farm produce fruits and vegitables to our esteemed
        customers, Our team members are farm and horticulture
      </p>

      <div className="home-service-container">
        <div data-aos="fade-up" className="home-service-item"></div>
        <div data-aos="fade-up" className="home-service-item"></div>
        <div data-aos="fade-up" className="home-service-item"></div>
        <div data-aos="fade-up" className="home-service-item"></div>
      </div>

      <div>
        <a href="/services">
          <button data-aos="fade-up">know more</button>
        </a>
      </div>
    </section>
  );
}
