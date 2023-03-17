import React from "react";
import HomeBanner from "./components/HomeBanner";
import HomeService from "./components/HomeService";
import HomeWhySection from "./components/HomeWhySection";
import WhatINspiresUs from "./components/WhatINspiresUs";
import OurFarmers from "./components/OurFarmers";
import MembersCount from "./components/MembersCount";
import Partners from "./components/Partners";

import { constantActions } from "./store/constantSlice";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.constant.companyTitle);

  dispatch(constantActions.updatePageTitles(companyName + " . " + "Home")); // company name here
  dispatch(constantActions.setCurrentPage("Home"));

  return (
    <>
      <HomeBanner />
      <HomeService />
      <HomeWhySection />
      <WhatINspiresUs />
      <OurFarmers />
      <MembersCount />
      <Partners />
    </>
  );
}
