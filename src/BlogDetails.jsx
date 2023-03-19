import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { constantActions } from './store/constantSlice';
import banner from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM (1).jpeg";

export default function BlogDetails() {
    const dispatch = useDispatch();
    const companyName = useSelector(state=>state.constant.companyTitle)
  
    dispatch(constantActions.updatePageTitles(companyName+" . "+"Blog name")); // company name here
    dispatch(constantActions.setCurrentPage("Blog Details"));

  return (
    <>
      <section>
        <div className="blogBanner-image">
          <img src={banner} alt="" />
        </div>
        <section className="blogBanner-section">

          <div className="blogBanner-title">
            <h3>Blog name and picture</h3>
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

        <section className='blogDetails-section'>
            <main>
                main
                <section>related</section>
            </main>

            <aside>
                <span className='aside-header'>new <i className="fa fa-fire"></i> </span>
                <section className='aside-container'>
                    <div className="blog-item">
                        <span className="blog-item-thumbnail"><img src="" alt="" /></span>
                        <span className="blog-item-title">organic farming revert back</span>
                        <span className="blog-item-date"><span className="by">BY <span>THE HOOKUP</span></span> <span className="time"><i className="fa fa-clock"></i> 06/08/2021 7:56 PM</span></span>
                        <span className="blog-item-note">advocating an acute reduction in the consumpption of factory-farmed meat, fish, eggs, and dairy by encouraging</span>
                    </div>
                </section>
            </aside>
        </section>

        <div className="gotop">
          <a href="#topBlog"><i className="fa fa-angle-up"></i></a>
        </div>

      </section>
    </>
  )
}
