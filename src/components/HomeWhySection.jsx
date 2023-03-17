import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function HomeWhySection() {
  
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <section className="home-suppermarket">
      <section  data-aos="fade-up" className="home-suppermarket-left">
        <img src="" alt="" />
      </section>

      <section  data-aos="fade-up" className="home-suppermarket-right">
        <span data-aos="fade-up">why veggie super market?</span>
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
