import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import $ from "jquery";
import "./assets/css/main.css";

import NavBar from "./components/NavBar";
import HomePage from "./HomePage";
import Footer from "./components/Footer";
import About from "./About";
import Blog from "./Blog";

import { useDispatch, useSelector } from "react-redux";
import Services from "./Services";
import Gallery from "./Gallery";
import Contact from "./Contact";
import BlogDetails from "./BlogDetails";
import browserIcon from "./assets/images/logo.png";

function App() {


  const dispatch = useDispatch();

  const browserIcons = useSelector(state=>state.constant.browserlogo)
  const currentPage = useSelector(state=>state.constant.currentPage)
  const PageTitles = useSelector(state=>state.constant.currentPageTitle)

  $("#browser-icons").attr("href",browserIcon)


  useEffect(() => {

    /* Browser icons */
    $("#browser-icons").attr("href", browserIcons);

    // updating page titles
    $("#app-title").text(PageTitles);

  });

  return (
    <>
      <Router>
        {
          //(currentPage != "Gallery" && currentPage != "Blog" && currentPage != "Contact") && <NavBar />
        }
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/index" component={HomePage} />

          <Route path="/blog" component={Blog} />
          <Route path="/blog-details" component={BlogDetails} />

          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />


          {/* 404 */}
          <Route path="*" component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
