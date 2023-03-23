import React,{useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import $ from "jquery";
import math from "math";
import { useSelector } from "react-redux";

export default function MembersCount() {

  const membersData = useSelector((state) => state.constant.data.members.count);


    //let valueDisplays = $("#countNumber")
    //let interval = 5000;
    
    //let endValue = 10;/* 318 */
    //let duration = math.floor(interval / endValue);


    /* 
    let femaleCounter = setInterval(()=>{

        const newFemale = countFemale + 1;
        if(countFemale == endValue){
            clearInterval(femaleCounter);
        }else{
        setCountFemale(newFemale);
        }
    },2000); */


/*             318
            212
            150
            5 */


    useEffect(()=>{
        Aos.init({duration: 2000});
      },[]);

  return (
    <>
        <section className='Home-membership-section'>
            <h5 data-aos="fade-up">Get free membership</h5>
            <span data-aos="fade-up" className='Home-membership-section-subtitle'>join our communitte with over</span>
            <div data-aos="fade-up" className='Home-membership-count-section'>
                <div> <span id="countNumber">{membersData.female}</span> <span>female</span></div>
                <div> <span id="countNumber">{membersData.male}</span> <span>male</span></div>
                <div> <span id="countNumber">{membersData.youth}</span> <span>youth</span></div>
                <div> <span id="countNumber">{membersData.disabilities}</span> <span>disabilities</span></div>
            </div>
            <button data-aos="fade-up" type='button'>
                join today
            </button>
        </section>
    </>
  )
}
