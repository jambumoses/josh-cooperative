import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function OurFarmers() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="ourFarm-section">
      <h3 data-aos="fade-up">our farmers</h3>
      <span data-aos="fade-up" className="farm-subtitle">veggleSupermarket</span>
      <span data-aos="fade-up" className="farm-note-description">
        we deliver fresh farm produce fruits and vegitables to our esteemed
        customers, Our team members are farm and horticulture
      </span>

      <section className="farms-container">
        <div data-aos="fade-up" className="farmer-profile">
          <span className="farmer-profile-image">
            <span className="farmer-profile-image-thumbnail"><img src="" alt="" /></span>
          </span>
          <span className="farmer-profile-name">nicole jonshon</span>
          <span className="farmer-profile-role">organic farmer</span>
          <span className="farmer-profile-description">
            we deliver fresh farm produce fruits and vegitables to our esteemed
            customers, Our team members are farm and horticulture
          </span>
          <a href="/know more">
            <button>know more</button>
          </a>
        </div>

        <div data-aos="fade-up" className="farmer-profile">
          <span className="farmer-profile-image">
            <span className="farmer-profile-image-thumbnail"><img src="" alt="" /></span>
          </span>
          <span className="farmer-profile-name">nicole jonshon</span>
          <span className="farmer-profile-role">organic farmer</span>
          <span className="farmer-profile-description">
            we deliver fresh farm produce fruits and vegitables to our esteemed
            customers, Our team members are farm and horticulture
          </span>
          <a href="/know more">
            <button>know more</button>
          </a>
        </div>

        <div data-aos="fade-up" className="farmer-profile">
          <span className="farmer-profile-image">
            <span className="farmer-profile-image-thumbnail"><img src="" alt="" /></span>
          </span>
          <span className="farmer-profile-name">nicole jonshon</span>
          <span className="farmer-profile-role">organic farmer</span>
          <span className="farmer-profile-description">
            we deliver fresh farm produce fruits and vegitables to our esteemed
            customers, Our team members are farm and horticulture
          </span>
          <a href="/know more">
            <button>know more</button>
          </a>
        </div>

        <div data-aos="fade-up" className="farmer-profile">
          <span className="farmer-profile-image">
            <span className="farmer-profile-image-thumbnail"><img src="" alt="" /></span>
          </span>
          <span className="farmer-profile-name">nicole jonshon</span>
          <span className="farmer-profile-role">organic farmer</span>
          <span className="farmer-profile-description">
            we deliver fresh farm produce fruits and vegitables to our esteemed
            customers, Our team members are farm and horticulture
          </span>
          <a href="/know more">
            <button>know more</button>
          </a>
        </div>
      </section>
    </section>
  );
}
