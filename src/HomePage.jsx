import React from "react";
import HomeBanner from "./components/HomeBanner";
import HomeService from "./components/HomeService";
import HomeWhySection from "./components/HomeWhySection";
import WhatINspiresUs from "./components/WhatINspiresUs";
import OurFarmers from "./components/OurFarmers";
import MembersCount from "./components/MembersCount";
import Partners from "./components/Partners";

import blogimage from "./assets/images/blog.png";
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

import { constantActions } from "./store/constantSlice";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.constant.companyTitle);

  dispatch(constantActions.updatePageTitles(companyName + " . " + "Home")); // company name here
  dispatch(constantActions.setCurrentPage("Home"));

  const membersData = useSelector((state) => state.constant.data.members);

  return (
    <>
      <HomeBanner />
      <HomeService />

      <section className="homebanner-about homebanner-about-blog" style={{flexDirection:"row-reverse"}}>
        <div data-aos="fade-up" className="homebanner-about-floating-image">
          <img src={blogimage} alt="" />
        </div>

        <div data-aos="fade-up" className="homebanner-about-small-note">
          <span data-aos="fade-up" className="sub-title">blog posts</span>
          <span data-aos="fade-up" className="title">keep updated</span>
          <p data-aos="fade-up">
            we deliver fresh farm produce fruits and vegitables to our esteemed
            customers, Our team members are farm and horticulture experts, who
            helps us to choose the best quality products from the farmer's house
            accorss the country.
          </p>

          <a href="/blog" style={{textDecoration: "none"}}>
            <button data-aos="fade-up">check blog</button>
          </a>
        </div>
      </section>

      <HomeWhySection />
      <WhatINspiresUs />
      <OurFarmers title={membersData.board_title} subtitle={membersData.board_subtitle} note={membersData.board_note} members={membersData.board} />
      <MembersCount />
      <Partners />
    </>
  );
}
