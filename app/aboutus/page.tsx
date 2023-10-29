/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useContext } from "react";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import AboutUsSection from "@/components/molecules/AboutUsSection/AbousUsSection";
import MobileNav from "@/components/organisms/MobileNav/MobileNav";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/organisms/Footer/Footer";
import languageContext from "@/context/languageContext";

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const{ spanish} = useContext(languageContext)
  return (
    <div className="">
      <MobileNav />
      <HeaderBar active={true} />
      <div className=" relative h-[60vh]">
        <h2 className="absolute top-[80%]  left-5 md:left-10 text-white font-bold text-5xl md:text-6xl">
          {spanish? "Quienes Somos": "Who We Are"}
        </h2>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[70vh] object-cover"
        >
          <source src="/Video/Desert.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-[90%] mx-auto mt-10" id="whoweare">
        <AboutUsSection />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row mx-auto  md:mx-10 md:justify-around w-[90%] mb-20">
        <img
          src="/Photography/WhoWeAre/flechaVision.png"
          alt="south2southVision"
          className="mx-auto w-[80%] bottom"
          data-aos="fade-right"
        />
        <div id="vision" className=" ">
          <div className="bg-white py-10 md:py-24">
            <div className="">
              <div data-aos="fade-right" className=" text-center">
                <h2 className="md:mt-2 text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl">
                  {spanish?"Visión":"Vision"}
                </h2>
                <p className=" text-lg leading-8 text-[#161616] md:w-[70%] mx-auto">
                  {spanish? "Nos esforzamos para que nuestras inversiones generen rendimientos financieros sostenibles y ser pioneros en la creación de asociaciones estratégicas para la transferencia de tecnología entre empresas, organizaciones y gobiernos.\n" +
                      "Al hacerlo, contribuiremos al desarrollo socioeconómico de las naciones.":"We strive for our investments to deliver sustainable financial returns and to be pioneers in creating strategic partnerships for technology transfer among companies, organisations, and governments.\n" +
                      "By doing so, we will contribute to the socio-economic development of nations."}

                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="mission" className="mb-20">
          <div className="bg-white  py-10 md:py-0">
            <div className="mx-auto">
              <div data-aos="fade-left" className="mx-auto  text-center">
                <h2 className=" text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl">
                  {spanish? "Misión": "Mission"}
                </h2>
                <p className="  text-lg leading-8 text-[#161616] md:w-[60%] mx-auto">
                  {spanish? "Establecer alianzas estratégicas con empresas latinoamericanas sirviendo como sus representantes comerciales de confianza en el Medio Oriente, África y Asia del Sur. Nuestro enfoque central es actuar como un catalizador en sectores económicos clave, facilitar oportunidades de crecimiento y crear sinergias valiosas para todos los involucrados.\n" +
                      "Que hacemos. ":"To establish strategic alliances with Latin American companies and serve as their trusted commercial representatives in the MENA & SEA regions. Our core focus is acting as a catalyst in key economic sectors, facilitating growth opportunities, and creating valuable synergies for all stakeholders involved."}

                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-left"
          src="/Photography/WhoWeAre/flechaMission.png"
          alt="south2southVision"
          className="mx-auto w-[80%]"
        />
      </div>

      {/* <div className='py-40' id='teammembers'>
        <TeamSection />
      </div> */}
      <Footer />
    </div>
  );
};

export default page;
