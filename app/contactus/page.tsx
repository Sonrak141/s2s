'use client';
import React, { useState, useContext } from 'react';
import HeaderBar from '@/components/organisms/HeaderBar/HeaderBar';
import ContactForm from '@/components/molecules/ContactForm/ContactForm';
import Footer from '@/components/organisms/Footer/Footer';
import MobileNav from '@/components/organisms/MobileNav/MobileNav';
import Drawer from '@mui/material/Drawer';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import languageContext from '@/context/languageContext';

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [drawerOpen, setDrawerOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { spanish } = useContext(languageContext);
  return (
    <div>
      <MobileNav />
      <HeaderBar active={true} />
      <div className='  '>
        <div
          className='h-[100vh] bg-cover bg-no-repeat flex items-end text-white font-bold relative'
          style={{
            backgroundImage: 'url("/abuBuilding.jpg")',
            fontSize: '40px',
          }}
        >
          <h2 className='absolute top-[30%]  left-10 text-white font-bold text-5xl md:text-6xl'>
            {spanish ? 'Contáctanos' : 'Contact Us'}
          </h2>

          <div className='left-10  absolute md:block top-[38%] mr-5 mt-5 md:text-left md:w-2/4'>
            <div className='flex flex-row items-center text-sm  md:justify-start my-1'>
              <MapPinIcon className='w-4 h-4 mr-2 text-[#940000]' />
              <p>
                <strong>{spanish ? 'Dirección' : 'Address'}</strong>
              </p>
            </div>
            <p className='ml-6 text-sm'>
              Addax Tower, Al Reem Island, Abu Dhabi, United Arab Emirates -
              Office 3910.
            </p>
            <div className='text-sm flex flex-row items-center  md:justify-start my-1'>
              <PhoneIcon className='w-4 h-4 mr-2 text-[#940000]' />
              <p>
                <strong>{spanish ? 'Teléfono' : 'Phone'}</strong>
              </p>
            </div>
            <p className='ml-6 text-sm'>+971 2 631 1369</p>
            <div className='flex text-sm flex-row items-center  md:justify-start my-1'>
              <EnvelopeIcon className='w-4 h-4 mr-2 text-[#940000]' />
              <p>
                <strong>Email</strong>
              </p>
            </div>
            <p className='ml-6 text-sm'>contact@s2sholding.com</p>
          </div>
          <button
            className=' bg-[#940000] py-2 px-5 mt-28  rounded-md text-sm absolute  top-[58%] left-10'
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            {spanish ? 'Envianos un mensaje' : 'Send a message to us'}
          </button>
        </div>

        <Drawer
          anchor='right'
          open={drawerOpen}
          onClose={() => setDrawerOpen(!drawerOpen)}
        >
          <ContactForm />
        </Drawer>
      </div>
    </div>
  );
}

export default page;
('react');
