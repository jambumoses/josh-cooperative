import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import whyus from "../assets/images/undraw_questions_re_1fy7.svg";

export default function HomeWhySection() {
  
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <section className="home-suppermarket">
      <section  data-aos="fade-up" className="home-suppermarket-left">
        <img src={whyus} alt="" />
      </section>

      <section  data-aos="fade-up" className="home-suppermarket-right">
        <span data-aos="fade-up">why Ongongoja Fruit Growers’ Cooperative?</span>
        <p data-aos="fade-up">
          we deliver fresh farm produce fruits and vegitables to our esteemed
          customers, Our team members are farm and horticulture
        </p>
        <p data-aos="fade-up">
          we deliver fresh farm produce fruits and vegitables to our esteemed
          customers, Our team members are farm and horticulture
        </p>
        <button data-aos="fade-up">purchase now</button>
      </section>
    </section>
  );
}
