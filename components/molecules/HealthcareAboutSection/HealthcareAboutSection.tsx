"use client";
import React, { useState } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HealthcareAboutSection() {
  const [screenWidth, setScreenWidth] = useState(769);

  const mobileThreshold = 768;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=' md:w-[90%] mx-auto relative isolate overflow-hidden bg-white px-6  md:py-24 lg:overflow-visible lg:px-0'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 border-b'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div data-aos='fade-right' className='lg:max-w-lg'>
              <p className='text-base font-semibold leading-7 text-center md:text-left text-[#333333]'>
                S2S
              </p>
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-center md:text-left text-[#940000] sm:text-4xl'>
                Healthcare
              </h1>

              <div
                data-aos='fade-left'
                className='-ml-12  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden md:hidden'
              >
                <img
                  className='md:w-[48rem] max-w-2xl rounded-xl bg-gray-900 shadow-xl ring-gray-400/10 mb-10 '
                  src='/Photography/Healthcare/healthMain.jpeg'
                  alt='South2SouthHealthcare'
                />
              </div>

              <p className='mt-6 text-xl leading-8 text-gray-700 text-center md:text-left'>
                South2South Hellthcare, through its subsidiary with over 60
                laboratories, 6 clinics, and 2 hospitals, focuses on developing
                alliances with Latin American companies. By transferring
                sustainable operational models based on high-tech systems, we
                aim to improve healthcare infrastructure in the MENA region,
                with an initial focus on primary and secondary care levels.
              </p>
            </div>
          </div>
        </div>

        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
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
                <h3 className='font-bold text-[#940000] -mb-8'>Subsidiaries</h3>
                <li className='flex gap-x-3'>
                  <span>
                    <strong className='font-semibold text-gray-900 '>
                      Speed Medical Co
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
