import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/banners/jonathan-kemper-1HHrdIoLFpU-unsplash.jpg";

import aboutBanner from "../assets/images/banners/WhatsApp Image 2023-03-18 at 7.49.40 PM.jpeg";

import blogbanner from "../assets/images/banners/jonathan-kemper-1HHrdIoLFpU-unsplash.jpg";
import banner2 from "../assets/images/WhatsApp Image 2023-03-12 at 1.47.12 PM.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import logo from "../assets/images/logo.png";

import carousel1 from "../assets/images/banners/henry-perks-aOTBPSDjgj0-unsplash.jpg";
import carousel2 from "../assets/images/banners/raspopova-marina-Kd6uDjOVwDE-unsplash.jpg";
import carousel3 from "../assets/images/banners/meritt-thomas-yWi43FjUJLI-unsplash.jpg";
import carousel4 from "../assets/images/banners/raspopova-marina-PHIJC0jpx9U-unsplash.jpg";
import carousel5 from "../assets/images/banners/vrlibs-studio-jp5bf3RmhWI-unsplash.jpg";
import carousel6 from "../assets/images/banners/jonathan-kemper-VTXw4_5SsNA-unsplash.jpg";



import homeFarm from "../assets/images/aboutus.png";
import { useSelector } from "react-redux";

export function HomeNav(){
  return(
    <>
      <div className="home-logo">
          <span>
            {/* <img src={logo} alt="" /> */}
          </span>
        </div>

        <div className="homeBanner-blur">
        </div>

        <div className="HomeBanner-image">
          <Carousel  interval={5000} indicators={false} pause={false} style={{backgroundColor:"transparent",height: "100vh",width:"100%"}}>
            <Carousel.Item>
              <div className="HomeBanner-image-thumb">
                <img src={carousel1} alt="" />
              </div>
              </Carousel.Item>

              <Carousel.Item>
              <div className="HomeBanner-image-thumb">
                <img src={carousel2} alt="" />
              </div>
              </Carousel.Item>

              <Carousel.Item>
              <div className="HomeBanner-image-thumb">
                <img src={carousel3} alt="" />
              </div>
              </Carousel.Item>

              <Carousel.Item>
              <div className="HomeBanner-image-thumb">
                <img src={carousel4} alt="" />
              </div>
              </Carousel.Item>

              <Carousel.Item>
              <div className="HomeBanner-image-thumb">
                <img src={carousel5} alt="" />
              </div>
              </Carousel.Item>
          </Carousel>
        </div>
        
        <section className="blogBanner-section" style={{background:"transparent"}}>

          <div className="blogBanner-title">
            <h3></h3>
          </div>
          
          <nav>
          <div className='nav-socials'>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-facebook"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-linkedin"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
            </div>

            <div>
              <span><Link to="/" className="a active" href="">home </Link></span>.
              <span><Link to="/blog" className="a" href="">blog</Link></span>.
              <span><Link to="/about" className="a" href="">about us </Link></span>.
              {/* <span><Link to="/services" className="a" href="">services</Link></span>. */}
              <span><Link to="/gallery" className="a" href="">gallery</Link></span>.
              <span><Link to="/contact" className="a" href="">contact us</Link></span>
            </div>
          </nav>
        </section>
    </>
  )
}

export function BlogNav({showBlog}){
  
  if(showBlog == ""){
  return(
      <>
      <div className="blogBanner-image">
      <img src={blogbanner} alt="" />
      </div>
      <section className="blogBanner-section" id="topBlog">

        <div className="blogBanner-title">
          <h3>Blog</h3>
        </div>
        
        <nav>
        <div className='nav-socials'>
              <a href=""><i className="fab fa-twitter"></i></a>
              <a href=""><i className="fab fa-facebook"></i></a>
              <a href=""><i className="fab fa-instagram"></i></a>
              <a href=""><i className="fab fa-linkedin"></i></a>
              <a href=""><i className="fab fa-youtube"></i></a>
          </div>

          <div>
            <span><Link to="/" className="a" href="">home </Link></span>.
            <span><Link to="/blog" className="a active" href="">blog</Link></span>.
            <span><Link to="/about" className="a" href="">about us </Link></span>.
            {/* <span><Link to="/services" className="a" href="">services</Link></span>. */}
            <span><Link to="/gallery" className="a" href="">gallery</Link></span>.
            <span><Link to="/contact" className="a" href="">contact us</Link></span>
          </div>
        </nav>
      </section>  
      </>
  )
}
}

export function BlogDetailsNav({item}){
  return(
    <>
      {/* <div className="blogBanner-image">
          <img src={`${require("./assets/images/blog/"+item.image)}`} alt="" />
        </div>
        <section className="blogBanner-section">

          <div className="blogBanner-title">
            <h3 style={{fontFamily:"poppins, sans-serif",fontSize:"50px",textTransform:"capitalize"}}>{item.title}</h3>
          </div>
          
          <nav>
          <div className='nav-socials'>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-facebook"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-linkedin"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
            </div>

            <div>
              <span><Link to="/" className="a" href="">home </Link></span>.
              <span><Link to="/blog" className="a active" href="">blog</Link></span>.
              <span><Link to="/about" className="a" href="">about us </Link></span>.
              <span><Link to="/services" className="a" href="">services</Link></span>.
              <span><Link to="/gallery" className="a" href="">gallery</Link></span>.
              <span><Link to="/contact" className="a" href="">contact us</Link></span>
            </div>
          </nav>
        </section> */}
    </>
  )
}

export function AboutNav(){
  return(
    <>
      <div className="aboutBanner-blur"></div>
        
        <div className="blogBanner-image">
          <img src={aboutBanner} alt="" />
        </div>
        <section className="blogBanner-section">

          <div className="blogBanner-title">
            <h3>About Us</h3>
          </div>
          
          <nav>
          <div className='nav-socials'>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-facebook"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-linkedin"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
            </div>

            <div>
              <span><Link to="/" className="a" href="">home </Link></span>.
              <span><Link to="/blog" className="a" href="">blog</Link></span>.
              <span><Link to="/about" className="a active" href="">about us </Link></span>.
              {/* <span><Link to="/services" className="a" href="">services</Link></span>. */}
              <span><Link to="/gallery" className="a" href="">gallery</Link></span>.
              <span><Link to="/contact" className="a" href="">contact us</Link></span>
            </div>
          </nav>
        </section>
    </>
  )
}

export function ServicesNav(){}

export function GalleryNav(){
  return(
    <>
            <div className="contactBanner-image">
          <section className='gallery-collection-banner'>
            <div className='gallery-collection-banner-item'>
              <span className='gallery-collection-banner-item-block'><img src="data:image/jpeg;base64,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" alt="" /></span>
              
              <span className='gallery-collection-banner-item-block'>
                <h5>Agriculture</h5>
                <span> the key development in the rise of sedentary human civilization, whereby farming of domesticated species</span>
              </span>

              <span className='gallery-collection-banner-item-block'><img src="data:image/jpeg;base64,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" alt="" /></span>
            </div>

            <div className='gallery-collection-banner-item'>
              <span className='gallery-collection-banner-item-block'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoS5e8hsVsKdQxm2rX2Fe2Cho-xfP_KFmuPw&usqp=CAU" alt="" /></span>
              
              <span className='gallery-collection-banner-item-block'>
                <h5>Agriculture</h5>
                <span> the key development in the rise of sedentary human civilization, whereby farming of domesticated species</span>
              </span>

              <span className='gallery-collection-banner-item-block'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3nLzjBMlRKTWgYxDt70iVn7vB_cJ877vmg&usqp=CAU" alt="" /></span>
              
            </div>
          </section>
        </div>
        <section className="contactBanner-section">

        <div className="contactBanner-title">
            <h3></h3>
        </div>
        
        <nav>
            <div className='nav-socials'>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-facebook"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-linkedin"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
            </div>
            <div>
                <span><Link to="/" className="a" href="">home </Link></span>.
                <span><Link to="/blog" className="a" href="">blog</Link></span>.
                <span><Link to="/about" className="a" href="">about us </Link></span>.
                {/* <span><Link to="/services" className="a" href="">services</Link></span>. */}
                <span><Link to="/gallery" className="a active" href="">gallery</Link></span>.
                <span><Link to="/contact" className="a" href="">contact us</Link></span>
            </div>
        </nav>
        </section>
    </>
  )
}

export function ContactNav(){

  const merchantData = useSelector(state=>state.constant.data.merchant);

  return(
    <>
        <div className="contactBanner-image">
            <iframe id="gmap_canvas" src={merchantData.company.mapURL} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
        </div>
        <section className="contactBanner-section">

        <div className="contactBanner-title">
            <h3>contact us</h3>
        </div>
        
        <nav>
            <div className='nav-socials'>
                {
                    merchantData.socials.map(function(item){
                        return(
                            <a href={item.link} key={item._id}><i className={item.icon}></i></a>
                        )
                    })
                }
            </div>
            <div>
                <span><Link to="/" className="a" href="">home </Link></span>.
                <span><Link to="/blog" className="a" href="">blog</Link></span>.
                <span><Link to="/about" className="a" href="">about us </Link></span>.
                {/* <span><Link to="/services" className="a" href="">services</Link></span>. */}
                <span><Link to="/gallery" className="a" href="">gallery</Link></span>.
                <span><Link to="/contact" className="a active" href="">contact us</Link></span>
            </div>
        </nav>
        </section>
    </>
  )
}





export default function NavBar({showBlog}) {

  const currentPage = useSelector(state=>state.constant.currentPage)

  return (
    <>
    {(currentPage === "Home") && <HomeNav/>}
    {(currentPage === "Blog") && <BlogNav showBlog={showBlog}/>}
    {/* (currentPage === "BlogDetails") && <BlogDetailsNav item={blogDetail}/> */}
    {(currentPage === "Services") && <ServicesNav/>}
    {(currentPage === "About") && <AboutNav/>}
    {(currentPage === "Gallery") && <GalleryNav/>}
    {(currentPage === "Contact") && <ContactNav/>}
    </>
  )
}
