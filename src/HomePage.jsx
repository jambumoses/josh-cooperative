import React from "react";
import HomeBanner from "./components/HomeBanner";
import HomeService from "./components/HomeService";
import HomeWhySection from "./components/HomeWhySection";
import WhatINspiresUs from "./components/WhatINspiresUs";
import OurFarmers from "./components/OurFarmers";
import MembersCount from "./components/MembersCount";
import Partners from "./components/Partners";

import blogimage from "./assets/images/hoang-thanh-qS3EEckqUBo-unsplash-removebg-preview.png";


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
