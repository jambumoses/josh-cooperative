import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { constantActions } from './store/constantSlice';
import banner from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM (1).jpeg";

export function BlogItemAside({data,style}){
  return(
    <div className="blog-item blog-item-detail" style={{...style}}>
        <span className="blog-item-thumbnail"><img src={`${require("./assets/images/blog/"+data.image)}`} alt="" /></span>
        <span className="blog-item-title blog-item-title-detail">{data.title }</span>
        <span className="blog-item-date"><span className="by">BY <span>{data.by}</span></span> <span className="time"><i className="fa fa-clock"></i> {data.created_at}</span></span>
        <span className="blog-item-note">{data.short_note.slice(0,200)}...</span>
    </div>
  )
}






export function PageDetails({data}){
  return(
    <>
      <h1 className='blogDetails-title'>{data.title}</h1>
      <div className='blogDetails-by-time'>
        <span><i className="fa fa-clock"></i> {data.created_at}</span>
        <span>by <span className='by'>{data.by}</span></span>
      </div>
      <hr />

      <div className='blogDetails-ads'>
        <span className='close-ad'><i className="fa fa-close"></i></span>
      </div>
      
      {
        data.content.map(function(item){
          return(
            <>
              {
                (item.subtitle != "") &&
                <>
                  <h3 className='blogDetails-headings'>{item.subtitle}</h3>
                  <hr />
                </>
              }
              
              {
                (item.image != "") &&
                <span className='blogDetails-images'>
                  <img src={`${require("./assets/images/blog/"+data.image)}`} alt="" />
                </span> 
              }

              {
                item.paragraphs.map(function(paragraph){
                  return(
                    <p className='blogDetails-paragraph' key={paragraph._id}>{paragraph.p}</p>
                  )
                })
              }

              <div className='blogDetails-ads'>
                <span className='close-ad'><i className="fa fa-close"></i></span>
              </div>
              
            </>
          )
        })
      }
      
    </>
  )
}









export default function BlogDetails({setShowBlog,item}) {

    const blogData = useSelector(state=>state.constant.data.blog);

    const dispatch = useDispatch();
    const companyName = useSelector(state=>state.constant.companyTitle)
  
    dispatch(constantActions.updatePageTitles(companyName+" . "+"Blog name")); // company name here
    dispatch(constantActions.setCurrentPage("Blog Details"));


    function BlogDetails(){
      return(
        <section className='blogDetails-section' style={{padding: "50px"}}>
            <main>
                <section>
                <span onClick={()=>setShowBlog("")} style={{backgroundColor:"lightgray", padding:"5px 20px",borderRadius:"5px", cursor:"pointer"}}><i className="fa fa-arrow-left"></i> back</span>

                  {
                    <PageDetails data={item}/>
                  }
                </section>

                <div>
                  comments section
                </div>
            </main>

            <aside>
                <span className='aside-header'>related blogs<i className="fa fa-fire"></i> </span>
                <section className='aside-container'>
                  {
                    blogData.slice(0,(blogData.length > 5)? 7 : blogData.length).map(function(item){
                      if (item.id != 12 && item.short_note != ""){
                        return(
                          <BlogItemAside key={item._id} data={item}/>
                        )
                      }
                    })
              
                  }
                </section>
            </aside>
        </section>
      )
    }

  return (
    <>
      <section id='topBlog'>
        <div className="blogBanner-image">
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
        </section>

        <BlogDetails/>

        <div className="gotop" style={{display: "flex",flexDirection: "row", justifyContent: "space-between"}}>
          <span onClick={()=>setShowBlog("")} style={{backgroundColor:"black ", padding:"5px 20px",borderRadius:"5px", cursor:"pointer",color:"white"}}><i style={{color:"white",textTransform:"capitalize"}} className="fa fa-arrow-left"></i> back</span>
          <a href="#topBlog"><i className="fa fa-angle-up"></i></a>
        </div>

      </section>
    </>
  )
}
