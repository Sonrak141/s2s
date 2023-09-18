import React from "react";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import NavBarAboutUs from "@/components/molecules/NavBarAboutUS/NavBarAboutUs";
import Image from "next/image";
import TeamSection from "@/components/molecules/TeamSection/TeamSection";
import AboutUsSection from "@/components/molecules/AboutUsSection/AbousUsSection";
import { links, stats } from "@/components/constants";
import MobileNav from "@/components/organisms/MobileNav/MobileNav";

const contentStyleTitle: React.CSSProperties = {
  height: "80vh",
  // backgroundImage: 'url("/abuAerial.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontSize: "40px",
  display: "flex",
  alignItems: "end",
  color: "#fff",
  fontWeight: "bold",
};
const contentStyleTitle2: React.CSSProperties = {
  height: "80vh",
  backgroundImage: 'url("/penon.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  fontSize: "40px",
  display: "flex",
  alignItems: "end",
  color: "#fff",
  fontWeight: "bold",
  margin: "0 10rem 10rem 10rem",
};
const page = () => {
  return (
    <div>
      <MobileNav />
      <HeaderBar active={true} />
      <div style={contentStyleTitle} className='whoweareBanner'>
        <h2 className='ml-20 mb-12'>About Us</h2>
      </div>
      <div className='' id='whoweare'>
        <AboutUsSection />
      </div>
      <div id='vision'>
        <div className='bg-white py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:text-center'>
              <h2 className='text-base font-semibold leading-7 text-[#333333]'>
                About us
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-[#FF0000] sm:text-4xl'>
                Vision
              </p>
              <p className='mt-6 text-lg leading-8 text-[#161616]'>
                We strive for our investments to deliver sustainable financial
                returns and to be pioneers in creating strategic partnerships
                for technology transfer among companies, organisations, and
                governments.
              </p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
              <p className='text-center'>
                By doing so, we will contribute to the socio-economic
                development of nations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='mision'>
        <div className='bg-white py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:text-center'>
              <h2 className='text-base font-semibold leading-7 text-[#333333]'>
                About us
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-[#FF0000] sm:text-4xl'>
                Mision
              </p>
              <p className='mt-6 text-lg leading-8 text-[#161616]'>
                To establish strategic alliances with Latin American companies
                and serve as their trusted commercial representatives in the
                MENA & SEA regions.
              </p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
              <p className='text-center'>
                Our core focus is acting as a catalyst in key economic sectors,
                facilitating growth opportunities, and creating valuable
                synergies for all stakeholders involved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='strategy'>
        <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
          <img
            src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
            alt=''
            className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
          />
          <div
            className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
            aria-hidden='true'
          >
            <div
              className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#333333] opacity-20'
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
            aria-hidden='true'
          >
            <div
              className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr text-[#FF0000] to-[#776fff] opacity-20'
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                Strategy
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                At South2South, we believe that sustainable growth and success
                can only be achieved through responsible and ethical business
                practices. Our commitment to creating positive socio-economic
                impacts in the regions we serve is at the heart of everything we
                do. We generate value through three distinct pathways:
              </p>
            </div>
            <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
              <dl className='mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3'>
                {stats.map((stat) => (
                  <div key={stat.name} className='flex flex-col'>
                    <dt className='text-2xl font-bold leading-7 text-[#FF0000]'>
                      {stat.name}
                    </dt>
                    <dd className='text-base   leading-9 tracking-tight text-white'>
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className='py-40' id='teammembers'>
        <TeamSection />
      </div>
    </div>
  );
};

export default page;
