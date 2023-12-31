"use client";
import { useEffect, useState, useContext } from "react";
import {
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import languageContext from "@/context/languageContext";

export default function DefenseAboutSection() {
  const [screenWidth, setScreenWidth] = useState(769);
  const{spanish} = useContext(languageContext)
  const mobileThreshold = 768;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='w-[90%] mx-auto relative isolate overflow-hidden bg-white px-6 py-24 lg:overflow-visible lg:px-0 '>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 border-b'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div data-aos='fade-right' className='lg:max-w-lg'>
            <p className='text-base font-semibold leading-7 text-[#333333] text-center md:text-left'>
              S2S
            </p>
            <h1 className='mt-2 text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl text-center md:text-left'>
              {spanish?"Defensa y Seguridad":"Defence & Security"}
            </h1>

            <div
              data-aos='fade-left'
              className='-ml-12  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden md:hidden'
            >
              <img
                className='md:w-[48rem] max-w-2xl rounded-xl bg-gray-900 shadow-xl ring-gray-400/10 mb-10 '
                src='/Photography/Defence/armyDesert.jpeg'
                alt='South2SouthDefence'
              />
            </div>

            <div className='lg:pr-4 mr-5'>
              <p className='mt-6 text-center md:text-left text-xl leading-8 text-gray-700'>
                {spanish?"South2South Defence & Security representa los intereses comerciales de empresas latinoamericanas de defensa y seguridad en Medio Oriente, África y Asia del Sur.\n" +
                    "Nuestro objetivo es consolidar la posición de las empresas latinoamericanas en el mercado regional al crear sinergias y oportunidades de crecimiento en el sector. Con conexiones estratégicas en la región, nuestro equipo de expertos asegura entornos responsables para las negociaciones G2G, G2B y B2B de nuestros afiliados.":"South2South Defence & Security represents the commercial interests of Latin American defence and security companies in the Middle East, Africa, and South Asia.\n" +
                    "We aim to consolidate the positioning of Latin American companies in the regional market by creating synergies and growth opportunities in the sector. With strategic connections in the region, our team of experts ensures responsible environments for G2G, G2B, and B2B negotiations for our affiliates."}
              </p>
            </div>
          </div>
        </div>

        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 mb-10'>
          <div className='lg:pr-4'>
            <div
              data-aos='fade-right'
              className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'
            >
              <p></p>

              <ul
                data-aos='fade-right'
                role='list'
                className='space-y-8 text-gray-600'
              >
                <h3 className='font-bold text-[#940000] -mb-8'>{spanish?"Subsidiarias":"Subsidiaries"}</h3>
                <li className='flex flex-row'>
                  <span>
                    <strong className='font-semibold text-gray-900 '>
                      S2S defence & security
                    </strong>{" "}
                  </span>
                  <ArrowRightCircleIcon className='w-[5%] ml-3 text-[#940000]' />
                </li>
              </ul>

              {/* <h2
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
          className='-ml-12 -mt-12  lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden hidden md:block'
        >
          <img
            className='md:w-[48rem] mt-20 max-w-2xl rounded-xl bg-gray-900 shadow-xl ring-gray-400/10 mb-10 '
            src='/Photography/Defence/armyDesert.jpeg'
            alt='South2SouthDefence'
          />
        </div>
      </div>
    </div>
  );
}
