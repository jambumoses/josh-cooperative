import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function OurFarmers({title,subtitle,note,members}) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="ourFarm-section">
      <h3 data-aos="fade-up">{title}</h3>
      <span data-aos="fade-up" className="farm-subtitle">{subtitle}</span>
      <span data-aos="fade-up" className="farm-note-description">
        {note}
      </span>

      <section className="farms-container">

        {
          members.map(function(item){
          
            return(
              <div key={item._id} data-aos="fade-up" className="farmer-profile">
                <span className="farmer-profile-image">
                  <span className="farmer-profile-image-thumbnail">
                    <img src={require("../assets/images/members/user.png")} alt="" />
                  </span>
                </span>
                <span className="farmer-profile-name">{item.name}</span>
                <span className="farmer-profile-role">{item.role}</span>
                <span className="farmer-profile-description">
                {item.description.slice(0,150)}
                </span>
                <a href="/know more">
                  {/* <button>know more</button> */}
                </a>
              </div>
            )
          })
        }

      </section>
    </section>
  );
}
