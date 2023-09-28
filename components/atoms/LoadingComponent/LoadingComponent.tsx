import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function LoadingComponent() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=' fading-image flex flex-col h-screen justify-center items-center'>
      <img
        src='/Photography/WhoWeAre/flechaVision.png'
        alt='south2southVision'
        className='mb-10 w-1/3'
        data-aos='fade-right'
        data-aos-duration='8000'
      />
      <img
        src='/Photography/WhoWeAre/flechaMission.png'
        alt='south2southVision'
        className='mb-10 w-1/3'
        data-aos='fade-left'
        data-aos-duration='8000'
      />
    </div>
  );
}

export default LoadingComponent;
