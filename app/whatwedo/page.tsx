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
        <h2 className='absolute top-[37rem] left-10 text-white font-bold text-6xl'>
          What we do
        </h2>
        <video autoPlay loop muted className='w-full h-[70vh] object-cover'>
          <source src='/Video/city.mp4' type='video/mp4' />
        </video>
      </div>
      <div className=''>
        <div data-aos='fade-right' id='strategy'>
          <div className='py-24 sm:py-32'>
            <div className='mx-auto flex flex-row  px-6 lg:px-8'>
              <div className='mx-auto max-w-2xl lg:mx-0'>
                <h2 className='text-4xl font-bold tracking-tight text-[#940000] sm:text-6xl'>
                  Strategy
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  At S2S, we believe that sustainable growth and success can
                  only be achieved through responsible and ethical business
                  practices. Our commitment to creating positive socio-economic
                  impacts in the regions we serve is at the heart of everything
                  we do.
                </p>
              </div>
              <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
                <dl className=' grid md:mt-20 grid-cols-1 gap-8 md:ml-10 sm:grid-cols-1 lg:grid-cols-1'>
                  {stats.map((stat) => (
                    <div key={stat.name} className='flex flex-col'>
                      <dt className='text-2xl font-bold leading-7 text-[#940000]'>
                        {stat.name}
                      </dt>
                      <dd className='text-base   leading-9 tracking-tight text-gray-600'>
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
