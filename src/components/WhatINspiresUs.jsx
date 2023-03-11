import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function WhatINspiresUs() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
    <>
      <span data-aos="fade-right" className="HomeWhySection-heading">
        what inspires us <span>!</span>
      </span>
      <section className="HomeWhySection">
        <div data-aos="fade-right" className="HomeWhySection-left"></div>

        <div className="HomeWhySection-right">
          <div data-aos="fade-up" className="why-top">
            <div  className="why-item">
              <span className="y-icon">
                <span className="y-icon-thumbnail">icon</span>
              </span>
              <span className="y-title">title</span>
              <span className="y-description">we deliver fresh farm produce fruits and vegitables </span>
            </div>
            <div className="why-item">
              <span className="y-icon">
                <span className="y-icon-thumbnail">icon</span>
              </span>
              <span className="y-title">title</span>
              <span className="y-description">we deliver fresh farm produce fruits and vegitables </span>
            </div>
          </div>

          <div data-aos="fade-up" className="why-bottom">
            <div className="why-item">
              <span className="y-icon">
                <span className="y-icon-thumbnail">icon</span>
              </span>
              <span className="y-title">title</span>
              <span className="y-description">we deliver fresh farm produce fruits and vegitables </span>
            </div>
            <div className="why-item">
              <span className="y-icon">
                <span className="y-icon-thumbnail">icon</span>
              </span>
              <span className="y-title">title</span>
              <span className="y-description">we deliver fresh farm produce fruits and vegitables </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
