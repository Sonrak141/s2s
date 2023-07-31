import React from "react";
import HeaderBar from "../components/organisms/HeaderBar/HeaderBar";
import NavBarAboutUs from "../components/molecules/NavBarAboutUS/NavBarAboutUs";
import Image from "next/image";
import TeamSection from "../components/molecules/TeamSection/TeamSection";
import AboutUsSection from "../components/molecules/AboutUsSection/AbousUsSection";

const contentStyleTitle: React.CSSProperties = {
  height: "80vh",
  backgroundImage: 'url("/abuDhabi2.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontSize: "40px",
  display: "flex",
  alignItems: "end",
  color: "#fff",
  fontWeight: "bold",
};
const contentStyleTitle2: React.CSSProperties = {
  height: "80vh",
  backgroundImage: 'url("/penon.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontSize: "40px",
  display: "flex",
  alignItems: "end",
  color: "#fff",
  fontWeight: "bold",
  margin: "0 10rem 10rem 10rem",
};
const page = () => {
  return (
    <div>
      <HeaderBar active={false} />
      <div style={contentStyleTitle}>
        <h2 className="ml-20 mb-12">Who We Are?</h2>
      </div>
      <div className="">
        <AboutUsSection />
      </div>

      <div style={contentStyleTitle2}>
        <h2 className="ml-20 mb-12">Board of Directors</h2>
      </div>
      <div className="mx-40 mb-12">
        <TeamSection />
      </div>
    </div>
  );
};

export default page;
