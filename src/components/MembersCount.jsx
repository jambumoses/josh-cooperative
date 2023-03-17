import React,{useEffect, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import $ from "jquery";
import math from "math";

export default function MembersCount() {

    const [countFemale,setCountFemale] = useState(0)
    const [countMale,setCountMale] = useState({startValue: 0,endValue: 212});
    const [countYouth,setCountYouth] = useState({startValue: 0,endValue: 150});
    const [countDisabilities,setCountDisabilities] = useState({startValue: 0,endValue: 5});

    let valueDisplays = $("#countNumber")
    let interval = 5000;
    
    let endValue = 318;
    let duration = math.floor(interval / endValue);
/* 
    let femaleCounter = setInterval(()=>{

        const newFemale = countFemale + 1;
        setCountFemale(newFemale);

        if(countFemale == endValue){
            clearInterval(femaleCounter);
        }
    },duration); */


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
                <div> <span id="countNumber">{countFemale}</span> <span>female</span></div>
                <div> <span id="countNumber">{countMale.startValue}</span> <span>male</span></div>
                <div> <span id="countNumber">{countYouth.startValue}</span> <span>youth</span></div>
                <div> <span id="countNumber">{countDisabilities.startValue}</span> <span>disabilities</span></div>
            </div>
            <button data-aos="fade-up" type='button'>
                join today
            </button>
        </section>
    </>
  )
}
