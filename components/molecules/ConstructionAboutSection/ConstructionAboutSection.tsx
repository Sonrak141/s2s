"use client";
import { useEffect } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";

function ConstructionAboutSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=' md:w-[90%] relative isolate overflow-hidden bg-white px-6 py-24 lg:overflow-visible lg:px-0'>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 border-b'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div data-aos='fade-right' className='lg:max-w-lg'>
              <p className='text-base font-semibold text-center md:text-left leading-7 text-[#333333]'>
                South2South
              </p>
              <h1 className='mt-2 text-3xl text-center md:text-left font-bold tracking-tight text-[#940000] sm:text-4xl'>
                Construction
              </h1>
              <p className='mt-6 text-xl text-center md:text-left leading-8 text-gray-700'>
                South2South Real Estate & Construction, through its subsidiary,
                leverages the rapid growth and ambitious strategic development
                plans in the Middle East, ensuring strategic alliances and
                business opportunities for our Latin American clients. Its
                subsidiary has delivered over 8,600 units and has 2.5 million
                square metres under development in Egypt, Morocco, and Jordan.
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
              <ul
                data-aos='fade-right'
                role='list'
                className=' space-y-8 text-gray-600'
              >
                <h3 className='font-bold text-[#940000] -mb-8'>Subsidiaries</h3>
                <li className='flex gap-x-3'>
                  <span>
                    <a href='https://ad-holding.com/'>
                      <strong className='font-semibold text-gray-900 hover:text-[#940000]'>
                        Arab Developers Holding
                      </strong>
                    </a>
                  </span>
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
          className='-ml-12   lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'
        >
          <img
            className='w-[48rem] max-w-2xl rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 mb-10 '
            src='/Photography/Construction/constructionMain.jpeg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default ConstructionAboutSection;
