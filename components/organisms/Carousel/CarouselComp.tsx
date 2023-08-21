import React from "react";
import { Carousel, ConfigProvider } from "antd";
import Link from "next/link";

const contentStyleFirst: React.CSSProperties = {
  height: "100vh",
  color: "#2A8CC6",
  lineHeight: "100px",
  backgroundImage: 'url("/AbuBuilding.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontWeight: "bold",
};
const contentStyleSecond: React.CSSProperties = {
  height: "100vh",
  color: "#2A8CC6",
  lineHeight: "100px",
  backgroundImage: 'url("/Healthcare.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontWeight: "bold",
  paddingTop: "20rem",
};
const contentStyleThird: React.CSSProperties = {
  height: "100vh",
  color: "#2A8CC6",
  lineHeight: "100px",
  backgroundImage: 'url("/BogotaAerial.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontWeight: "bold",
};

const CarouselComp: React.FC = () => (
  <ConfigProvider theme={{}}>
    <Carousel
      autoplay
      effect="fade"
      autoplaySpeed={8000}
      easing="200"
      pauseOnFocus={false}
      pauseOnHover={false}
    >
      <div className="">
        <div style={contentStyleFirst}>
          <h2 className="pt-60 pl-10 md:text-[60px] text-[40px]">
            <span className="text-white">LATAM companies in the</span> regional
            market
          </h2>
          <Link
            href="/aboutus"
            className="border-white border-2 p-4 text-xs ml-12 text-white"
          >
            Get to know us
          </Link>
        </div>
      </div>
      <div>
        <div style={contentStyleSecond}>
          <h2 className="md:pt-60 pl-10 text-white md:text-[60px] text-[40px] ">
            <span className="">We foster responsible</span> business practices
          </h2>
          <Link
            href="/aboutus"
            className="border-white  border-2 p-4 text-xs ml-12 text-white "
          >
            Get to know us
          </Link>
        </div>
      </div>
      <div>
        <div style={contentStyleThird}>
          <h2 className="pt-60 pl-10 text-white md:text-[60px] text-[40px]">
            We foster responsible{" "}
            <span className="text-white">business practices</span>
          </h2>
          <Link
            href="/aboutus"
            className="border-white border-2 p-4 text-xs ml-12 text-white"
          >
            Get to know us
          </Link>
        </div>
      </div>
    </Carousel>
  </ConfigProvider>
);

export default CarouselComp;
