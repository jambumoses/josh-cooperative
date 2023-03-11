import React from "react";
import HomeBanner from "./components/HomeBanner";
import HomeService from "./components/HomeService";
import HomeWhySection from "./components/HomeWhySection";
import WhatINspiresUs from "./components/WhatINspiresUs";
import OurFarmers from "./components/OurFarmers";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeService />
      <HomeWhySection />
      <WhatINspiresUs />
      <OurFarmers />
    </>
  );
}
