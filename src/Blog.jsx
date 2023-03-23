import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM (1).jpeg";

import image1 from "./assets/images/apple.jpeg";
import image2 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.12 PM (1).jpeg";
import image3 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.12 PM (2).jpeg";
import image4 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.13 PM (1).jpeg";
import image5 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.13 PM (2).jpeg";
import image6 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.16 PM (1).jpeg";
import image7 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.15 PM.jpeg";
import image8 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.15 PM (2).jpeg";
import image9 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.15 PM (1).jpeg";
import image10 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM.jpeg";
import image11 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM (2).jpeg";
import image12 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.16 PM.jpeg";
import image13 from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.12 PM.jpeg";

import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "./store/constantSlice";
import BlogDetails from "./BlogDetails";




export function BlogItem({data,switchBlog}){
  return(
    <div className="blog-item">
      <span className="blog-item-details">
        <span className="blog-item-thumbnail"><img src={`${require("./assets/images/blog/"+data.image)}`} alt="" /></span>
        <span className="blog-item-title" onClick={()=>switchBlog(data)}>{data.title}</span>
        <span className="blog-item-date"><span className="by">BY <span>{data.by}</span></span> <span className="time"><i className="fa fa-clock"></i> {data.created_at}</span></span>
        <span className="blog-item-note">{data.short_note.slice(0,100)}
        </span>
      </span>

      {/* <span className="blog-item-details-comments">
            <span>
              <i className="fa fa-heart"></i>
              <i className="fa fa-thumbs-up"></i>
              <i className="fa fa-shuffle"></i>
            </span>
            <button>read more</button>
          </span> */}
    </div>
  )
}


export function HugeBlogItem({data,switchBlog}){
  return(
    <div className="blog-item-huge">
      <span className="blog-item-huge-thumbnail"><img src={`${require("./assets/images/blog/"+data.image)}`} alt="" /></span>
      <div className="blog-item-huge-details">
        <span className="blog-item-huge-details-title" onClick={()=>switchBlog(data)}>{data.title}</span>
        <span className="blog-item-huge-details-date"><span className="by">BY <span>{data.by}</span></span> <span className="time"><i className="fa fa-clock"></i> {data.created_at}</span></span>
        <span className="blog-item-huge-details-note">{data.short_note.slice(0,400)}...</span>
        {/* <span className="blog-item-huge-details-comments">
            <span>
              <i className="fa fa-heart"></i>
              <i className="fa fa-thumbs-up"></i>
              <i className="fa fa-shuffle"></i>
            </span>
            <button>read more</button>
          </span> */}
      </div>
    </div>
  )
}



export default function Blog() {

  const blogData = useSelector(state=>state.constant.data.blog);

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.constant.companyTitle)

  dispatch(constantActions.updatePageTitles(companyName+" . "+"Blog")); // company name here
  dispatch(constantActions.setCurrentPage("Blog"));

  const [showBlog,setShowBlog] = useState("")

  function switchBlog(data){
    setShowBlog(data)
  }

  return (
    <>
      <section>

        {
          (showBlog == "") &&
          <>
          <div className="blogBanner-image">
          <img src={banner} alt="" />
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
        }



        {
        (showBlog == "") &&
        <section className="blog-item-container" style={{padding: "0px"}}>

        {
          blogData.map(function(item){
            if (item.type === "large"){
              return <HugeBlogItem switchBlog={switchBlog} key={item._id} data={item}/>
            }else{
            return(
              
              <BlogItem switchBlog={switchBlog} key={item._id} data={item}/>
            )}
          })
        }

        </section>          
        }

        {
          (showBlog != "") &&
          <BlogDetails item={showBlog} setShowBlog={setShowBlog}/>
        }

        {
         (showBlog == "") && 
        <div className="gotop">
          <a href="#topBlog"><i className="fa fa-angle-up"></i></a>
        </div>
        }

      </section>
    </>
  );
}
