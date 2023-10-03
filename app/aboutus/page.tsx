/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect } from "react";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import NavBarAboutUs from "@/components/molecules/NavBarAboutUS/NavBarAboutUs";
import Image from "next/image";
import TeamSection from "@/components/molecules/TeamSection/TeamSection";
import AboutUsSection from "@/components/molecules/AboutUsSection/AbousUsSection";
import { links, stats } from "@/components/constants";
import MobileNav from "@/components/organisms/MobileNav/MobileNav";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/organisms/Footer/Footer";

const contentStyleTitle: React.CSSProperties = {
  height: "80vh",
  // backgroundImage: 'url("/abuAerial.jpg")',
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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=''>
      <MobileNav />
      <HeaderBar active={true} />
      <div className=' relative'>
        <h2 className='absolute top-[80%] md:top-[28rem] left-5 md:left-10 text-white font-bold text-5xl md:text-6xl'>
          Who we are
        </h2>
        <video autoPlay loop muted className='w-full h-[70vh] object-cover'>
          <source src='/Video/Desert.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='w-[90%] mx-auto' id='whoweare'>
        <AboutUsSection />
      </div>
      <div className='flex flex-col md:flex-row mx-auto -mt-32 md:mx-10 md:justify-around w-[90%]'>
        <div id='vision' className=' md:max-w-[40%]'>
          <div className='bg-white py-24 sm:py-32'>
            <div className=''>
              <div data-aos='fade-right' className=' text-center'>
                <img
                  src='/Photography/WhoWeAre/flechaVision.png'
                  alt='south2southVision'
                  className='mb-10'
                />
                <p className='mt-2 text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl'>
                  Vision
                </p>
                <p className='mt-4 text-lg leading-8 text-[#161616]'>
                  We strive for our investments to deliver sustainable financial
                  returns and to be pioneers in creating strategic partnerships
                  for technology transfer among companies, organisations, and
                  governments. <br />
                  By doing so, we will contribute to the socio-economic
                  development of nations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id='mission' className=' md:max-w-[40%]'>
          <div className='bg-white md:py-24 -mt-10 md:mt-0'>
            <div className='mx-auto'>
              <div data-aos='fade-left' className='mx-auto  text-center'>
                <p className='md:mt-2 text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl'>
                  Mission
                </p>
                <p className=' mt-4 text-lg leading-8 text-[#161616]'>
                  To establish strategic alliances with Latin American companies
                  and serve as their trusted commercial representatives in the
                  MENA & SEA regions. Our core focus is acting as a catalyst in
                  key economic sectors, facilitating growth opportunities, and
                  creating valuable synergies for all stakeholders involved.
                </p>
                <img
                  src='/Photography/WhoWeAre/flechaMission.png'
                  alt='south2southVision'
                  className='mt-10'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='py-40' id='teammembers'>
        <TeamSection />
      </div> */}
      <Footer />
    </div>
  );
};

export default page;
