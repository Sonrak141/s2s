import React from "react";
import CarouselComp from "@/components/organisms/Carousel/CarouselComp";
import DefenseStats from "@/components/molecules/DefenseStats/DefenseStats";
import LogoDefense from "@/components/atoms/LogoDefense/LogoDefense";
import DefenseAboutSection from "@/components/molecules/DefenseAboutSection/DefenseAboutSection";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";

const contentStyleTitle: React.CSSProperties = {
  height: "80vh",
  backgroundImage: 'url("/technology.jpg")',
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
      <HeaderBar active={true} />
      <div style={contentStyleTitle}>
        <h2 className="ml-20 mb-12">Technology</h2>
      </div>
      <div className="mt-20">
        <DefenseAboutSection />
        <DefenseStats />
      </div>
    </div>
  );
}

export default page;
