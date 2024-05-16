import React, {useContext, useEffect, useState} from 'react';
import languageContext from "@/context/languageContext";
import AOS from "aos";

const EducationAboutSection = () => {
    const [screenWidth, setScreenWidth] = useState(769);
    const {spanish} = useContext(languageContext)
    const mobileThreshold = 768;
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div
            className="md:w-[90%] mx-auto relative isolate overflow-hidden bg-white px-6 md:py-24  lg:overflow-visible lg:px-0">
            <div
                className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div
                    className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div data-aos="fade-right" className="lg:max-w-lg">
                            <p className="text-base text-center md:text-left font-semibold leading-7 text-[#333333]">
                                S2S
                            </p>
                            <h1 className="mt-2 text-center md:text-left text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl">
                                {spanish ? "Educación" : "Education"}
                            </h1>

                            <div
                                data-aos="fade-left"
                                className="-ml-12  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden md:hidden"
                            >
                                <img
                                    className="md:w-[48rem] max-w-2xl rounded-xl bg-gray-900 shadow-xl ring-gray-400/10 mb-10 "
                                    src="/Photography/Education/Education.jpeg"
                                    alt="South2SouthLogistic"
                                />
                            </div>

                            <p className="mt-6 text-center md:text-left text-xl leading-8 text-gray-700 mr-5">
                                {spanish ? `Estamos comprometidos activamente en diversos proyectos destinados a hacer la educación más accesible y proporcionar formación en múltiples sectores. Nuestro compromiso se extiende a asegurar que estas iniciativas mejoren las calificaciones de las personas involucradas en nuestros proyectos, contribuyendo significativamente a su crecimiento profesional y personal. Además, fomentamos un ambiente que incentiva el intercambio de conocimientos, no solo dentro de nuestra red sino también entre diferentes regiones y partes interesadas. Este enfoque ayuda a cerrar brechas culturales y educativas, promoviendo un entendimiento más amplio y cooperación entre grupos diversos.` : `We are actively engaged in various projects aimed at making education more accessible and providing training across multiple sectors. Our commitment extends to ensuring that these initiatives enhance the qualifications of individuals involved in our projects, contributing significantly to their professional and personal growth.
                                    Moreover, we foster an environment that encourages the exchange of knowledge, not just within our own network but also between different regions and stakeholders. This approach helps in bridging cultural and educational gaps, promoting a broader understanding and cooperation across diverse groups.`}

                            </p>
                        </div>
                    </div>
                </div>
                {/*<div
                    className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div
                            data-aos="fade-right"
                            className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"
                        >
                            <p></p>

                            <ul
                                data-aos="fade-right"
                                role="list"
                                className="space-y-8 text-gray-600"
                            >
                                <h3 className="font-bold text-[#940000] -mb-8">{spanish ? "Subsidiarias" : "Subsidiaries"}</h3>
                                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900 ">
                      Oceanica Ship Management
                    </strong>{" "}
                  </span>
                                    <ArrowRightCircleIcon className="w-[5%] ml-3 text-[#940000]"/>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>*/}

                <div
                    data-aos="fade-left"
                    className="-ml-12  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden hidden md:block"
                >
                    <img
                        className="md:w-[48rem] max-w-2xl min-h-[27rem]  mt-10 rounded-xl bg-gray-900 shadow-xl ring-gray-400/10 mb-10 "
                        src="/Photography/Education/Education.jpeg"
                        alt="South2SouthLogistic"
                    />
                </div>

                <div
                    className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 md:mb-10">
                    <div className="lg:pr-4">
                        <div
                            data-aos="fade-right"
                            className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"
                        >
                            <p></p>
                            {/* <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Push to deploy.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <LockClosedIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      SSL certificates.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <ServerIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      Database backups.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul> */}
                            {/* <p data-aos='fade-right' className='mt-8'>
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              <h2
                data-aos='fade-right'
                className='mt-16 text-2xl font-bold tracking-tight text-gray-900'
              >
                No server? No problem.
              </h2>
              <p data-aos='fade-right' className='mt-6'>
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationAboutSection;