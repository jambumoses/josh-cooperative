import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";



export default function HomeBanner() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <>
      {/* <section className="homeBanner"></section> */}

      
      <section className="homebanner-about">
        <div data-aos="fade-up" className="homebanner-about-floating-image">
          <img src="" alt="" />
        </div>

        <div data-aos="fade-left" className="homebanner-about-small-note">
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
