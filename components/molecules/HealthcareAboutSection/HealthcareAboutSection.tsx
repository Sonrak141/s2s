"use client";
import React, {useState, useContext} from "react";
import {
    ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import languageContext from "@/context/languageContext";

function HealthcareAboutSection() {
    const [screenWidth, setScreenWidth] = useState(769);
    const {spanish} = useContext(languageContext)
    const mobileThreshold = 768;
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div
            className=' md:w-[90%] mx-auto relative isolate overflow-hidden bg-white px-6  md:py-24 lg:overflow-visible lg:px-0'>
            <div
                className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 border-b'>
                <div
                    className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
                    <div className='lg:pr-4'>
                        <div data-aos='fade-right' className='lg:max-w-lg'>
                            <p className='text-base font-semibold leading-7 text-center md:text-left text-[#333333]'>
                                S2S
                            </p>
                            <h1 className='mt-2 text-3xl font-bold tracking-tight text-center md:text-left text-[#940000] sm:text-4xl'>
                                {spanish ? "Salud" : "Healthcare"}
                            </h1>

                            <div
                                data-aos='fade-left'
                                className='-ml-12  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden md:hidden '
                            >
                                <img
                                    className='md:w-[48rem] max-w-2xl rounded-xl bg-gray-900 shadow-xl ring-gray-400/10 mb-10 '
                                    src='/Photography/Healthcare/healthMain.jpeg'
                                    alt='South2SouthHealthcare'
                                />
                            </div>

                            <p className='mt-6 text-xl leading-8 text-gray-700 text-center md:text-left mr-5'>
                                {spanish ? "En nuestra vertical de salud estamos dedicados a optimizar los sistemas de salud globales mediante la adopción de los mejores modelos y tecnologías sanitarias. A través de colaboraciones, nos enfocamos en establecer sistemas robustos y sostenibles que mejoren la accesibilidad y asequibilidad de los servicios médicos para todos, generando un impacto positivo tanto para nuestros socios como para las comunidades que servimos.\n" +
                                    "\n" +
                                    "Invertimos en innovaciones en el sector salud para fomentar su crecimiento y el desarrollo de nuevas tecnologías, mejorando así los sistemas de salud en diversas regiones y haciendo que la atención médica avanzada sea más accesible y efectiva.\n" : "At South2South Healthcare, we are committed to enhancing global health systems by identifying and integrating the best healthcare models and technologies. Through collaboration agreements, we focus on building robust, sustainable systems that increase accessibility and affordability of healthcare services for everyone. Our goal is to create significant value not only for our partners but also to have a positive impact on the communities we serve." +
                                    " " +
                                    "We are actively investing in healthcare innovations to support their growth and encourage the development of new technologies. This investment aims to improve healthcare systems in various regions, making advanced care more available and effective.\n"}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
                    <div className='lg:pr-4'>
                        <div
                            data-aos='fade-right'
                            className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'
                        >
                            <p></p>

                            {/* <ul
                data-aos='fade-right'
                role='list'
                className='space-y-8 text-gray-600'
              >
                <h3 className='font-bold text-[#940000] -mb-8'>{spanish?"Subsidiarias":"Subsidiaries"}</h3>
                <li className='flex gap-x-3'>
                  <span>
                    <strong className='font-semibold text-gray-900 '>
                      Speed Medical Co
                    </strong>{" "}
                  </span>
                  <ArrowRightCircleIcon className='w-[5%] ml-3 text-[#940000]' />
                </li>
              </ul> */}

                            {/* <h2
                data-aos='fade-right'
                className='mt-16 text-2xl font-bold tracking-tight text-gray-900'
              >
                No server? No problem.
              </h2>
              <p data-aos='fade-right' className='mt-6'>

              </p> */}
                        </div>
                    </div>
                </div>

                <div
                    data-aos='fade-left'
                    className='-ml-12  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden hidden md:block'
                >
                    <img
                        className='md:w-[48rem] max-w-2xl rounded-xl bg-gray-900 shadow-xl ring-gray-400/10 mb-10 '
                        src='/Photography/Healthcare/healthMain.jpeg'
                        alt='South2SouthHealthcare'
                    />
                </div>
            </div>
        </div>
    );
}

export default HealthcareAboutSection;
