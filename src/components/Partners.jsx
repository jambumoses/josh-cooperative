import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import naads from "../assets/images/naads.png";


export default function Partners(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

  return (
    <section className='partners-section'>
        <h5 data-aos="fade-up">our sponsors</h5>
        <div className='partners-container'>
            <span data-aos="fade-up"> <img src={naads} alt="" /></span>
            <span data-aos="fade-up"> <img src={naads} alt="" /></span>
            <span data-aos="fade-up"> <img src={naads} alt="" /></span>
            <span data-aos="fade-up"> <img src={naads} alt="" /></span>
        </div>
    </section>
  )
}
