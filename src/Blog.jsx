import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM (1).jpeg";

import { useDispatch, useSelector } from "react-redux";
import { constantActions } from "./store/constantSlice";
import BlogDetails from "./BlogDetails";
import NavBar from "./components/NavBar";




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

  const [seeMore,setSeeMore] = useState(20);

  function switchBlog(data){
    setShowBlog(data)
  }

  return (
    <>
      <section>
        <NavBar showBlog={showBlog}/>


        {
        (showBlog == "") &&
        <section className="blog-item-container" style={{padding: "0px"}}>

        {
          blogData.slice(0,seeMore).map(function(item){
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
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}} className="gotop">
          {
            (blogData.length > seeMore) &&
            <div>
              <button style={{border: "none",outline:"none",padding:"5px 20px",textTransform:"capitalize", fontSize:"14px",fontWeight:"400",borderRadius:"5px",color:"white",backgroundColor:"rgba(0, 0, 0, 0.758)"}} onClick={()=>{setSeeMore(seeMore+20)}} type="button">see more</button>
            </div>
          }
          <a href="#topBlog"><i className="fa fa-angle-up"></i></a>
        </div>
        }

      </section>
    </>
  );
}
