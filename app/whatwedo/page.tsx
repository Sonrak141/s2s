'use client'
import React, {useContext} from "react";
import DefenseAboutSection from "@/components/molecules/DefenseAboutSection/DefenseAboutSection";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import MobileNav from "@/components/organisms/MobileNav/MobileNav";
import HealthcareAboutSection from "@/components/molecules/HealthcareAboutSection/HealthcareAboutSection";
import ConstructionAboutSection from "@/components/molecules/ConstructionAboutSection/ConstructionAboutSection";
import LogisticAboutSection from "@/components/molecules/LogisticAboutSection/LogisticAboutSection";
import {stats, statsSpanish} from "@/components/constants";
import Footer from "@/components/organisms/Footer/Footer";
import languageContext from "@/context/languageContext";

function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {spanish} = useContext(languageContext);
    return (
        <div>
            <MobileNav/>
            <HeaderBar active={true}/>
            <div className="defenceBanner relative h-[60vh]">
                <h2 className="absolute top-[80%]  left-5 md:left-10 text-white font-bold text-5xl md:text-6xl">
                    {spanish ? "Qué hacemos" : "What We Do"}
                </h2>
                <video
                    autoPlay
                    playsInline
                    loop
                    muted
                    className="w-full h-[70vh] object-cover"
                >
                    <source
                        src="https://firebasestorage.googleapis.com/v0/b/herpe-10524.appspot.com/o/city.mp4?alt=media&token=ad4d40db-bf85-4c2c-a753-3f25f2fd0472"
                        type="video/mp4"/>
                </video>
            </div>
            <div className="  mx-auto mt-10 md:mt-0">
                <div id="strategy">
                    <div className="md:py-20 text-center md:text-left">
                        <div className=" w-[90%] mx-auto flex flex-col md:px-6 lg:px-8">
                            <div className="mx-auto md:max-w-7xl lg:mx-auto">
                                <h2 className="text-4xl mt-20 font-bold tracking-tight text-[#940000] md:text-6xl">
                                    {spanish ? "Estrategia" : "Strategy"}
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600 ">
                                    {spanish ? "En S2S International Holding, nuestro crecimiento se basa en empoderar a otros para su expansión. Nuestra estrategia principal es facilitar el crecimiento no solo para nuestra organización, sino también para nuestros socios." : "At S2S International Holding, we grow by empowering others to expand. Our core strategy is to facilitate growth not only for our own company but also for those we work with."}
                                </p>
                            </div>
                            <div className="mx-auto mb-20 lg:mx-0 md:max-w-none">
                                <dl className=" grid md:mt-20 grid-cols-1 md:gap-8  md:grid-cols-3 lg:grid-cols-3">
                                    {spanish ? statsSpanish.map((stat) => (
                                        <div
                                            data-aos="fade-right"
                                            key={stat.name}
                                            className="flex flex-col border-2 bg-[#D8D8D5] p-5  md:border-r shadow-lg  mt-10 md:mt-0"
                                        >
                                            <dt className="text-2xl font-bold leading-7 text-[#940000]">
                                                {stat.name}
                                            </dt>
                                            <dd className="text-base mt-5 font-bold text-[16px]  leading-9  tracking-tight text-gray-600 mr-5">
                                                {stat.value}
                                            </dd>
                                        </div>
                                    )) : stats.map((stat) => (
                                        <div
                                            data-aos="fade-right"
                                            key={stat.name}
                                            className="flex flex-col border-2 bg-[#D8D8D5] p-5  md:border-r shadow-lg  mt-10 md:mt-0"
                                        >
                                            <dt className="text-2xl font-bold leading-7 text-[#940000]">
                                                {stat.name}
                                            </dt>
                                            <dd className="text-base mt-5 font-bold text-[16px]  leading-9  tracking-tight text-gray-600 mr-5">
                                                {stat.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="health">
                    <HealthcareAboutSection/>
                </div>
                <div id="defence">
                    <DefenseAboutSection/>
                </div>

                <div id="logistic">
                    <LogisticAboutSection/>
                </div>
                <div id="construction">
                    <ConstructionAboutSection/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default page;
