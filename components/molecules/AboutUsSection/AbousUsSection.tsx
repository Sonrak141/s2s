"use client";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAmericasIcon,
  UserIcon,
  UserGroupIcon,
  CogIcon,
  ArrowsRightLeftIcon,
  BoltIcon,
} from "@heroicons/react/20/solid";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    name: "Global Perspective:",
    description:
      "Emphasizing a global outlook and understanding of diverse cultures and markets in both LATAM and MENA.",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Integrity:",
    description:
      "Commitment to honesty, transparency, and ethical conduct in all business dealings.",
    icon: UserIcon,
  },
  {
    name: "Partnership:",
    description:
      "Fostering strong collaborative relationships with businesses and stakeholders in both regions.",
    icon: UserGroupIcon,
  },
  {
    name: "Innovation:",
    description:
      "Encouraging a culture of creativity and innovation to address the unique challenges and opportunities in LATAM and MENA.",
    icon: CogIcon,
  },
  {
    name: "Diversity and Inclusivity:",
    description:
      "Valuing and respecting the diverse backgrounds, perspectives, and talents of employees and partners.",
    icon: ArrowsRightLeftIcon,
  },
  {
    name: "Sustainability:",
    description:
      "Promoting environmentally and socially responsible business practices.",
    icon: BoltIcon,
  },
];

export default function AboutUsSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='overflow-hidden bg-white py-14 sm:py-32 md:-mt-20 '>
      <div className='mx-auto  lg:max-w-3xl lg:px-8'>
        <div className='mx-auto  grid  grid-cols-1 gap-y-16 sm:gap-y-20  lg:grid-cols-2'>
          <div data-aos='fade-right' className='lg:pr-8 lg:pt-4'>
            <div className=' md:mt-20 xl:-ml-60 md:mr-10'>
              <h2 className='text-base font-semibold leading-7 text-[#5d3f3f]'></h2>
              <h2 className='mt-2 text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl'>
                About us
              </h2>
              <p className='mt-6 text-lg leading-8 text-[#161616]'>
                Based in Abu Dhabi and supported by High Net Worth Individuals
                (HNWIs), at South2South we have built a robust business model
                that enables seamless connections with local governments,
                businesses, and strategic partners. Our ultimate goal is to
                responsibly create value for our shareholders while contributing
                to the socio-economic development of nations.
              </p>
            </div>
          </div>
          <img
            data-aos='fade-left'
            src='/Photography/WhoWeAre/connect.jpeg'
            alt='Product screenshot'
            className='max-w-2xl mt-10  sm:w-[57rem] md:-ml-4 lg:-ml-0 hidden sm:inline'
            width={2432}
            height={1442}
          />
        </div>
      </div>
      <h2 className='mt-20 ml-16 text-3xl font-bold tracking-tight text-[#940000] sm:text-4xl'>
        Our Values
      </h2>
      <div className='flex justify-center items-center mt-8 md:mt-20'>
        <dl className=' max-w-xl space-y-8 text-base leading-7 text-[#161616] lg:max-w-none'>
          <div className='grid grid-cols-1 md:grid-cols-2 first-letter max-w-5xl gap-5'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-9'>
                <dt className='inline  text-gray-900'>
                  <feature.icon
                    className='absolute left-1 top-1 h-5 w-5 text-[#940000]'
                    aria-hidden='true'
                  />
                  <dd className='text-lg'>{feature.name}</dd>
                </dt>{" "}
                <dd className='inline text-lg '>{feature.description}</dd>
              </div>
            ))}
          </div>
        </dl>
      </div>
    </div>
  );
}
