import React from "react";
import { Carousel, ConfigProvider } from "antd";
import Link from "next/link";

const mediaQuery = "@media (min-width: 768px)";
const mediaQueryStyles: React.CSSProperties = {
  backgroundImage: 'url("/Photography/Carusel/doctor.png")', // Change the image for smaller screens
};
const mergedStyles = {
  backgroundImage: 'url("/Photography/Carusel/doctor-mobile.png")',
  [mediaQuery]: mediaQueryStyles,
};

// const contentStyleFirst: React.CSSProperties = {
//   height: "100vh",
//   color: "#FF0000",
//   lineHeight: "100px",
//   backgroundImage: 'url("/Photography/Carusel/BogotaCenter.png")',
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   fontWeight: "bold",
// };
// const contentStyleSecond: React.CSSProperties = {
//   height: "100vh",
//   color: "#FF0000",
//   lineHeight: "100px",
//   backgroundImage: 'url("/Photography/Carusel/doctor.png")',
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   fontWeight: "bold",
//   paddingTop: "20rem",
// };
// const contentStyleThird: React.CSSProperties = {
//   height: "100vh",
//   color: "#FF0000",
//   lineHeight: "100px",
//   backgroundImage: 'url("Photography/Carusel/abuBeach.png")',
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   fontWeight: "bold",
// };

const CarouselComp: React.FC = () => (
  <ConfigProvider theme={{}}>
    <Carousel
      autoplay
      effect='fade'
      autoplaySpeed={8000}
      easing='200'
      pauseOnFocus={false}
      pauseOnHover={false}
    >
      <div className=''>
        <div className='h-screen text-red-600 leading-100 bg-cover bg-no-repeat font-bold bogotaCarousel'>
          <h2 className='pt-60 pl-10 md:text-[60px] text-[40px]'>
            <span className='text-white'>Embracing diversity. </span>
            Inspiring growth
          </h2>
        </div>
      </div>
      <div>
        <div className='h-screen text-red-600 leading-100 bg-cover bg-no-repeat font-bold pt-80 doctorCarousel'>
          <h2 className='md:pt-60 pl-10  md:text-[60px] text-[40px] '>
            <span className='text-white'>Fueling Ambitions, </span>
            Holding Excellence
          </h2>
        </div>
      </div>
      <div>
        <div className='h-screen text-red-600 leading-100 bg-cover bg-no-repeat font-bold abuCarousel'>
          <h2 className='pt-60 pl-10  md:text-[60px] text-[40px]'>
            Balancing Local Roots with
            <span className='text-white'>Global Aspirations. </span>
          </h2>
        </div>
      </div>
    </Carousel>
  </ConfigProvider>
);

export default CarouselComp;
