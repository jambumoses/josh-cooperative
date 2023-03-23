import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import naads from "../assets/images/naads.png";
import { useSelector } from "react-redux";


export default function Partners(){

  const BrandsData = useSelector(state=>state.constant.data.brands);

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

  return (
    <section className='partners-section'>
        <h5 data-aos="fade-up">our sponsors</h5>
        <div className='partners-container'>
            {
              BrandsData.map(function(item){
                return(
                  <span data-aos="fade-up" key={item._id}> <img src={`${require("../assets/images/brands/"+item.logo)}`} alt="" /></span>
                )
              })
            }
        </div>
    </section>
  )
}
