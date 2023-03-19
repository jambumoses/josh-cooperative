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

  const currentPage = useSelector(state=>state.constant.currentPage)

  function FooterPartner(){
    return(
      <section className='footerPartners'>
        <div><img src={naads} alt="" /></div>
        <div><img src={naads} alt="" /></div>
        <div><img src={naads} alt="" /></div>
        <div><img src={naads} alt="" /></div>
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
          <span className='footer-company-description-note'>ongongoja fruit growers cooperative society ltd was founded in 2012 by a group of farmers who were engaged in fruit growing , to look for market for their products.</span>
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
                  <a href="" style={{textDecoration:"none"}}><i style={{textDecoration:"none", color:"lightgray",marginRight:"10px"}} className="fab fa-twitter"></i></a>
                  <a href="" style={{textDecoration:"none"}}><i style={{textDecoration:"none", color:"lightgray",marginRight:"10px"}} className="fab fa-facebook"></i></a>
                  <a href="" style={{textDecoration:"none"}}><i style={{textDecoration:"none", color:"lightgray",marginRight:"10px"}} className="fab fa-instagram"></i></a>
                  <a href="" style={{textDecoration:"none"}}><i style={{textDecoration:"none", color:"lightgray",marginRight:"10px"}} className="fab fa-linkedin"></i></a>
                  <a href="" style={{textDecoration:"none"}}><i style={{textDecoration:"none", color:"lightgray",marginRight:"10px"}} className="fab fa-youtube"></i></a>
                </span>
              </span>
            </div>
          </div>

          <div className='footer-right-item'>
            <span className='footer-right-item-heading'></span>
            <div className='footer-right-item-news'>
              <span className='footer-right-item-news-item'>
                <span className='footer-right-item-news-item-head'>address</span>
                <span className='footer-right-item-news-item-date'>located at Abarata Keere Weekly Market, Okuda Trading Center, Ongongoja Sub-County Katakwi District Eastern Uganda.</span>
              </span>
              
              <span className='footer-right-item-news-item'>
                <span className='footer-right-item-news-item-head'>email</span>
                <span className='footer-right-item-news-item-date'>ongongojafruitgrowers2023@gmail.com</span>
              </span>

              <span className='footer-right-item-news-item'>
                <span className='footer-right-item-news-item-head'>phone</span>
                <span className='footer-right-item-news-item-date'>0782612565 / 0775166159</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className='foot-note'>
          <span className='footer-company-description-policies'>
            <span className='footer-company-description-policies-border'>privacy</span>
            <span>legal policy</span>
          </span>
        <div className='foot-note-rights'>copy @ right all rights reserved 2012 - 2023</div>
        <div>terms & conditions . policies</div>
        <div className='foot-note-company'>ongongoja.org</div>
      </div>
    </section>
  )
}
