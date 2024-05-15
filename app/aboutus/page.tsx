/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, {useEffect, useContext} from "react";
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
    const {spanish} = useContext(languageContext)
    return (
        <div className="">
            <MobileNav/>
            <HeaderBar active={true}/>
            <div className=" relative h-[60vh]">
                <h2 className="absolute top-[80%]  left-5 md:left-10 text-white font-bold text-5xl md:text-6xl">
                    {spanish ? "Quienes Somos" : "Who We Are"}
                </h2>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[70vh] object-cover"
                >
                    <source
                        src="https://firebasestorage.googleapis.com/v0/b/herpe-10524.appspot.com/o/Desert.mp4?alt=media&token=987f6d99-198c-4a48-88a0-745af3b9cb1f"
                        type="video/mp4"/>
                </video>
            </div>
            <div className="w-[90%] mx-auto mt-10" id="whoweare">
                <AboutUsSection/>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 md:flex-row mx-auto  md:mx-10 md:justify-around w-[90%] mb-20">
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
                                    {spanish ? "Visión" : "Vision"}
                                </h2>
                                <p className=" text-lg leading-8 text-[#161616] md:w-[70%] mx-auto">
                                    {spanish ? "Nuestro objetivo es que nuestras inversiones generen beneficios financieros duraderos y seamos líderes en el establecimiento de alianzas estratégicas para la transferencia de tecnología entre empresas, organizaciones y gobiernos. Esta labor es nuestra forma de contribuir al desarrollo socioeconómico de las naciones." : "We strive for our investments to deliver sustainable financial returns and to be pioneers in creating strategic partnerships for technology transfer among companies, organizations, and governments. By doing so, we will contribute to the socio-economic development of nations."}

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
                                    {spanish ? "Misión" : "Mission"}
                                </h2>
                                <p className="  text-lg leading-8 text-[#161616] md:w-[80%] mx-auto">
                                    {spanish ? "En South2South International Holding, nuestra misión es construir puentes que superen las fronteras. Buscamos desarrollar e implementar asociaciones transsectoriales robustas que beneficien tanto a nuestros accionistas como a las sociedades en las regiones donde operamos." : "At South2South International Holding, we are committed to building bridges that transcend borders. Our mission is to cultivate and implement robust, cross-sector partnerships that not only yield dividends for our shareholders but also contribute to the flourishing of societies in the regions where we operate."}

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
            {/*  <div className="w-[90%] mx-auto mt-10" id="leadership">
                <div className='mx-auto  grid  grid-cols-1  md:grid-cols-2'>
                    <div data-aos='fade-right' className='lg:pr-8 lg:pt-4'>
                        <div className=' md:mt-20'>
                            <h2 className='text-base font-semibold leading-7 text-[#5d3f3f]'></h2>
                            <h2 className='mt-2 text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl'>
                                {spanish ? "Nosotros" : "About Us"}
                            </h2>
                            <p className='mt-6 text-lg leading-8 text-[#161616]'>
                                {spanish ?
                                    "Con una visión global, operamos desde dos sedes principales. Abu Dhabi es el corazón de nuestras actividades en el Medio Oriente, mientras que desde El Cairo lideramos nuestras iniciativas de negocio en África. Nos apoyamos en el respaldo de personas de alto patrimonio neto, lo que nos posibilita establecer alianzas estratégicas clave con gobiernos locales, empresas y aliados. Nuestro compromiso es fortalecer el valor para nuestros accionistas de manera sostenible y aportar al desarrollo socioeconómico de las regiones en las que operamos." :
                                    "With a global perspective, we operate with two main headquarters; Abu Dhabi is the centre for our Middle East operations, while Cairo directs our business endeavors in Africa. Our foundation is built upon the support of High-Net-Worth Individuals, enabling us to craft strategic alliances with local governments, businesses, and partners. We are committed to driving sustainable shareholder value and contributing to the socio-economic progress of the regions we serve."}
                            </p>
                        </div>
                    </div>
                    <img
                        data-aos='fade-left'
                        src='/Photography/WhoWeAre/connect.jpeg'
                        alt='South2South International Holding.'
                        className='max-w-2xl mt-10 ml-4 lg:-ml-0 hidden sm:inline'
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>*/}

            {/* <div className='py-40' id='teammembers'>
        <TeamSection />
      </div> */}
            <Footer/>
        </div>
    );
};

export default page;
