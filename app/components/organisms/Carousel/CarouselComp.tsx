import React from "react";
import { Carousel, ConfigProvider } from "antd";

const contentStyleFirst: React.CSSProperties = {
  height: "100vh",
  color: "#2A8CC6",
  lineHeight: "100px",
  backgroundImage: 'url("/abuDhabi.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontSize: "60px",
  fontWeight: "bold",
};
const contentStyleSecond: React.CSSProperties = {
  height: "100vh",
  color: "#2A8CC6",
  lineHeight: "100px",
  backgroundImage: 'url("/cartagena.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontSize: "60px",
  fontWeight: "bold",
};
const contentStyleThird: React.CSSProperties = {
  height: "100vh",
  color: "#2A8CC6",
  lineHeight: "100px",
  backgroundImage: 'url("/Bogota.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontSize: "60px",
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
          <h2 className="pt-60 pl-10">
            <span className="text-white">LATAM companies in the</span> regional
            market
          </h2>
          <button className="border-white border-2 p-4 text-xs ml-12 text-white">
            Get to know us
          </button>
        </div>
      </div>
      <div>
        <div style={contentStyleSecond}>
          <h2 className="pt-60 pl-10">
            <span className="text-white">We foster responsible</span> business
            practices
          </h2>
          <button className="border-white border-2 p-4 text-xs ml-12 text-white">
            Get to know us
          </button>
        </div>
      </div>
      <div>
        <div style={contentStyleThird}>
          <h2 className="pt-60 pl-10">
            We foster responsible{" "}
            <span className="text-white">business practices</span>
          </h2>
          <button className="border-white border-2 p-4 text-xs ml-12 text-white">
            Get to know us
          </button>
        </div>
      </div>
    </Carousel>
  </ConfigProvider>
);

export default CarouselComp;
