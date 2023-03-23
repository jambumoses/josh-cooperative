import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from 'react-redux';
import naads from "../assets/images/naads.png";
import logo from "../assets/images/logo.png";



export default function Footer() {

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  const currentPage = useSelector(state=>state.constant.currentPage);
  const merchantData = useSelector(state=>state.constant.data.merchant);
  const BrandsData = useSelector(state=>state.constant.data.brands);


  function FooterPartner(){
    return(
      <section className='footerPartners'>
        {
          BrandsData.slice(0,4).map(function(item){
            return(
              <div key={item._id}><img src={`${require("../assets/images/brands/"+item.logo)}`} alt="" /></div>
            )
          })
        }
      </section>
    )
  }


  return (
    <section className='footer-section'>

        {
          (currentPage != "Home") && <FooterPartner/>
        }
      

      <footer>
        <div className='footer-company-description'>
          <span className='logo' style={{}}><img src={logo} alt="logo" /></span>
          <span className='footer-company-description-note'>{merchantData.company.description}</span>
        </div>
        
        <div className='footer-right'>
          <div className='footer-right-item'>
            <span className='footer-right-item-heading'>important links</span>
            <ul>
              <li><Link to="/" className='a'>home</Link></li>
              <li><Link to="/about" className='a'>about us</Link></li>
              <li><Link to="/services" className='a'>services</Link></li>
              <li><Link to="/gallery" className='a'>gallery</Link></li>
              <li><Link to="/blog" className='a'>blog</Link></li>
              <li><Link to="/contact" className='a'>contact</Link></li>
            </ul>
          </div>

          <div className='footer-right-item'>
            <span className='footer-right-item-heading'>news & updates</span>
            <div className='footer-right-item-news'>
              <span className='footer-right-item-news-item'>
                <span className='footer-right-item-news-item-head'>prefinished store</span>
                <span className='footer-right-item-news-item-date'>may, 05, 2023</span>
              </span>

              <span className='footer-right-item-news-item'>
                <span className='footer-right-item-news-item-head'>general meeting</span>
                <span className='footer-right-item-news-item-date'>may, 15, 2023</span>
              </span>
              <span className='footer-right-item-news-item'>
                <span className='footer-right-item-news-item-head'>follow us</span>
                <span className='footer-right-item-news-item-date'>
                  {
                  merchantData.socials.map(function(item){
                    return(
                      <a href={item.link} key={item._id} style={{textDecoration:"none"}}><i style={{textDecoration:"none", color:"lightgray",marginRight:"10px"}} className={item.icon}></i></a>
                    )
                  })
                  }
                </span>
              </span>
            </div>
          </div>

          <div className='footer-right-item'>
            <span className='footer-right-item-heading'></span>
            <div className='footer-right-item-news'>
              {
               merchantData.contact.slice(0,3).map(function(item){
                return(
                  <span className='footer-right-item-news-item'>
                    <span className='footer-right-item-news-item-head'>{item.title}</span>
                    <span className='footer-right-item-news-item-date'>{item.link}</span>
                  </span>
                )
               }) 
              }
            </div>
          </div>
        </div>
      </footer>
      <div className='foot-note'>
          <span className='footer-company-description-policies'>
            <span className='footer-company-description-policies-border'>privacy</span>
            <span>legal policy</span>
          </span>
        <div className='foot-note-rights'>copy @ right all rights reserved 2012 - {new Date().getFullYear()}</div>
        <div>terms & conditions . policies</div>
        <div className='foot-note-company'>{merchantData.company.domain}</div>
      </div>
    </section>
  )
}
