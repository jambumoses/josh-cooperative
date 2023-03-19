import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function OurFarmers() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="ourFarm-section">
      <h3 data-aos="fade-up">board committe members</h3>
      <span data-aos="fade-up" className="farm-subtitle">ongongoja cooperative</span>
      <span data-aos="fade-up" className="farm-note-description">
        we deliver fresh farm produce fruits and vegitables to our esteemed
        customers, Our team members are farm and horticulture
      </span>

      <section className="farms-container">
        <div data-aos="fade-up" className="farmer-profile">
          <span className="farmer-profile-image">
            <span className="farmer-profile-image-thumbnail"><img src="" alt="" /></span>
          </span>
          <span className="farmer-profile-name">Engole Gabriel</span>
          <span className="farmer-profile-role">Chairperson</span>
          <span className="farmer-profile-description">
          He oversees the success of the strategic vision of the cooperative to ensure that it achieves the overall objective of the economic ...
          </span>
          <a href="/know more">
            <button>know more</button>
          </a>
        </div>

        <div data-aos="fade-up" className="farmer-profile">
          <span className="farmer-profile-image">
            <span className="farmer-profile-image-thumbnail"><img src="" alt="" /></span>
          </span>
          <span className="farmer-profile-name">Aturo Joshua</span>
          <span className="farmer-profile-role">vice Chairperson</span>
          <span className="farmer-profile-description">
          The vice Chairperson Board Committee and successful businessman, his business skills are required for the success of the cooperative
          </span>
          <a href="/know more">
            <button>know more</button>
          </a>
        </div>

        <div data-aos="fade-up" className="farmer-profile">
          <span className="farmer-profile-image">
            <span className="farmer-profile-image-thumbnail"><img src="" alt="" /></span>
          </span>
          <span className="farmer-profile-name">Esau Joseph</span>
          <span className="farmer-profile-role">Secretary</span>
          <span className="farmer-profile-description">
          Secretary to the board committee and ensures that the board business is conducted as per the constitution of the cooperative
          </span>
          <a href="/know more">
            <button>know more</button>
          </a>
        </div>

        <div data-aos="fade-up" className="farmer-profile">
          <span className="farmer-profile-image">
            <span className="farmer-profile-image-thumbnail"><img src="" alt="" /></span>
          </span>
          <span className="farmer-profile-name">Mr. Engole Ocaatum Faucet Arthur</span>
          <span className="farmer-profile-role">Former Chairperson</span>
          <span className="farmer-profile-description">
          he has been the brain behind the registration of this Cooperative, retired Civil Servant who worked as Under Secretary 
          </span>
          <a href="/know more">
            <button>know more</button>
          </a>
        </div>
      </section>
    </section>
  );
}
