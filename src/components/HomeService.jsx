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
import { useSelector } from "react-redux";

export default function HomeService() {

  const serviceData = useSelector(state=>state.constant.data.services);
  
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
        {
          serviceData.map(function(item){
            return(
              <div data-aos="fade-up" className="home-service-item">
                <h5>{item.title}</h5>
                <span>
                {item.description}
                </span>
                <div><img src={require("../assets/images/services/"+item.image)} alt="" /></div>
              </div>
            )
          })
        }
      </div>

      <div>
        <a href="/services">
          <button data-aos="fade-up">know more</button>
        </a>
      </div>
    </section>
  );
}
