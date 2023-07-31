import React from "react";
import CarouselComp from "../components/organisms/Carousel/CarouselComp";
import DefenseStats from "../components/molecules/DefenseStats/DefenseStats";
import LogoDefense from "../components/atoms/LogoDefense/LogoDefense";
import DefenseAboutSection from "../components/molecules/DefenseAboutSection/DefenseAboutSection";

function page() {
  return (
    <div>
      <LogoDefense />
      <CarouselComp />
      <div className="mt-20">
        <DefenseAboutSection />
        <DefenseStats />
      </div>
    </div>
  );
}

export default page;
