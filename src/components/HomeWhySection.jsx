import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function HomeWhySection() {
  
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <section className="home-suppermarket">
      <section  data-aos="fade-right" className="home-suppermarket-left"></section>

      <section  data-aos="fade-left" className="home-suppermarket-right">
        <span>why veggie super market?</span>
        <p data-aos="fade-left">
          we deliver fresh farm produce fruits and vegitables to our esteemed
          customers, Our team members are farm and horticulture
        </p>
        <p data-aos="fade-left">
          we deliver fresh farm produce fruits and vegitables to our esteemed
          customers, Our team members are farm and horticulture
        </p>
        <button data-aos="fade-left">purchase now</button>
      </section>
    </section>
  );
}
