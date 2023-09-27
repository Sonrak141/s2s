import React from "react";
import CarouselComp from "@/components/organisms/Carousel/CarouselComp";
import DefenseStats from "@/components/molecules/DefenseStats/DefenseStats";
import LogoDefense from "@/components/atoms/LogoDefense/LogoDefense";
import DefenseAboutSection from "@/components/molecules/DefenseAboutSection/DefenseAboutSection";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import MobileNav from "@/components/organisms/MobileNav/MobileNav";
import HealthcareAboutSection from "@/components/molecules/HealthcareAboutSection/HealthcareAboutSection";

const contentStyleTitle: React.CSSProperties = {
  height: "100vh",
  // backgroundImage: 'url("/Healthcare.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontSize: "40px",
  display: "flex",
  alignItems: "end",
  color: "#fff",
  fontWeight: "bold",
};

function page() {
  return (
    <div>
      <MobileNav />
      <HeaderBar active={true} />
      <div className='healthcareBanner'>
        <h2 className='absolute top-[55rem] left-10 text-white font-bold text-6xl'>
          Healthcare
        </h2>
        <video autoPlay loop muted className='w-full h-screen object-cover'>
          <source src='/Video/Desert.mov' type='video/mp4' />
        </video>
      </div>
      <div className='mt-20'>
        <HealthcareAboutSection />
      </div>
    </div>
  );
}

export default page;
