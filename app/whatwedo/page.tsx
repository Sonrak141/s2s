import React from "react";
import DefenseAboutSection from "@/components/molecules/DefenseAboutSection/DefenseAboutSection";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import MobileNav from "@/components/organisms/MobileNav/MobileNav";
import HealthcareAboutSection from "@/components/molecules/HealthcareAboutSection/HealthcareAboutSection";
import ConstructionAboutSection from "@/components/molecules/ConstructionAboutSection/ConstructionAboutSection";
import LogisticAboutSection from "@/components/molecules/LogisticAboutSection/LogisticAboutSection";
import { links, stats } from "@/components/constants";
import Footer from "@/components/organisms/Footer/Footer";

function page() {
  return (
    <div>
      <MobileNav />
      <HeaderBar active={true} />
      <div className='defenceBanner'>
        <h2 className='absolute top-[32rem] md:top-[28rem] left-5 md:left-10 text-white font-bold text-5xl md:text-6xl'>
          What we do
        </h2>
        <video autoPlay loop muted className='w-full h-[70vh] object-cover'>
          <source src='/Video/city.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='  mx-auto mt-10 md:mt-0'>
        <div id='strategy'>
          <div className='md:py-20 text-center md:text-left'>
            <div className=' w-[90%] mx-auto flex flex-col md:px-6 lg:px-8'>
              <div className='mx-auto md:max-w-7xl lg:mx-auto'>
                <h2 className='text-4xl font-bold tracking-tight text-[#940000] md:text-6xl'>
                  Strategy
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-600 '>
                  At S2S, we believe that sustainable growth and success can
                  only be achieved through responsible and ethical business
                  practices. Our commitment to creating positive socio-economic
                  impacts in the regions we serve is at the heart of everything
                  we do.
                </p>
              </div>
              <div className='mx-auto lg:mx-0 md:max-w-none'>
                <dl className=' grid md:mt-20 grid-cols-1 md:gap-8  md:grid-cols-3 lg:grid-cols-3'>
                  {stats.map((stat) => (
                    <div
                      data-aos='fade-right'
                      key={stat.name}
                      className='flex flex-col border-2 bg-[#D8D8D5] p-5  md:border-r shadow-lg  mt-10 md:mt-0'
                    >
                      <dt className='text-2xl font-bold leading-7 text-[#940000]'>
                        {stat.name}
                      </dt>
                      <dd className='text-base mt-5 font-bold  leading-9 tracking-tight text-gray-600 mr-5'>
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div id='defence'>
          <DefenseAboutSection />
        </div>
        <div id='health'>
          <HealthcareAboutSection />
        </div>
        <div id='construction'>
          <ConstructionAboutSection />
        </div>
        <div id='logistic'>
          <LogisticAboutSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
