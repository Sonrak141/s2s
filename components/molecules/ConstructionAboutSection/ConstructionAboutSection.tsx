"use client";
import {useEffect, useState, useContext} from "react";
import {
    ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import languageContext from "@/context/languageContext";

function ConstructionAboutSection() {
    const [screenWidth, setScreenWidth] = useState(769);
    const {spanish} = useContext(languageContext)
    const mobileThreshold = 768;
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div
            className=' md:w-[90%] mx-auto relative isolate overflow-hidden bg-white px-6 py-24 lg:overflow-visible lg:px-0'>
            <div
                className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 border-b'>
                <div
                    className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
                    <div className='lg:pr-4'>
                        <div data-aos='fade-right' className='lg:max-w-lg'>
                            <p className='text-base font-semibold text-center md:text-left leading-7 text-[#333333]'>
                                S2S
                            </p>
                            <h1 className='mt-2 text-3xl text-center md:text-left font-bold tracking-tight text-[#940000] sm:text-4xl'>
                                {spanish ? "Bienes Raíces" : "Real Estate"}
                            </h1>

                            <div
                                data-aos='fade-left'
                                className='-ml-12  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden md:hidden'
                            >
                                <img
                                    className='md:w-[48rem] max-w-2xl rounded-xl bg-gray-900 shadow-xl ring-gray-400/10 mb-10 '
                                    src='/Photography/Construction/constructionMain.jpeg'
                                    alt='South2SouthConstruction'
                                />
                            </div>

                            <p className='mt-6 text-xl text-center md:text-left leading-8 text-gray-700 mr-5'>
                                {spanish ? "En South2South, estamos invirtiendo activamente en proyectos de bienes raíces en diversas regiones. Nos enfocamos en realizar investigaciones de mercado exhaustivas para descubrir oportunidades de inversión que prometan retornos atractivos para nuestros inversores. Estos proyectos son seleccionados basándose en su potencial para contribuir significativamente a las economías regionales donde están ubicados.\n" +
                                    "\n" +
                                    "Además de nuestras inversiones directas, operamos a través de una filial que ha entregado más de 8,600 unidades y actualmente está desarrollando adicionalmente 2.5 millones de metros cuadrados de bienes raíces en Egipto, Marruecos y Jordania.\n" : "At South2South, we are actively investing in real estate projects across various regions. Our focus is on conducting extensive market research to uncover investment opportunities that promise attractive returns for our investors. These projects are selected based on their potential to contribute significantly to the regional economies where they are located.\n" +
                                    "\n" +
                                    "In addition to our direct investments, we operate through a subsidiary that has delivered over 8,600 units and is currently developing an additional 2.5 million square metres of real estate in Egypt, Morocco, and Jordan.\n"}

                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 mb-10'>
                    <div className='lg:pr-4'>
                        <div
                            data-aos='fade-right'
                            className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'
                        >
                            <ul
                                data-aos='fade-right'
                                role='list'
                                className=' space-y-8 text-gray-600'
                            >
                                <h3 className='font-bold text-[#940000] -mb-8'>{spanish ? "Subsidiarias" : "Subsidiaries"}</h3>
                                <li className='flex gap-x-3'>
                  <span>
                    <a href='https://ad-holding.com/'>
                      <strong className='font-semibold text-gray-900 hover:text-[#940000]'>
                        Arab Developers Holding
                      </strong>
                    </a>
                  </span>
                                    <a href='https://ad-holding.com/' className='w-[5%]'>
                                        <ArrowRightCircleIcon className=' text-[#940000]'/>
                                    </a>

                                </li>
                            </ul>

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

                <div
                    data-aos='fade-left'
                    className='-ml-12  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden hidden md:block'
                >
                    <img
                        className='md:w-[48rem] max-w-2xl rounded-xl bg-gray-900 shadow-xl ring-gray-400/10 mb-10 '
                        src='/Photography/Construction/constructionMain.jpeg'
                        alt='South2SouthConstruction'
                    />
                </div>
            </div>
        </div>
    );
}

export default ConstructionAboutSection;
