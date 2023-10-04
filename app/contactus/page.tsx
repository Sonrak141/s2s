"use client";
import React, { useState } from "react";
import HeaderBar from "@/components/organisms/HeaderBar/HeaderBar";
import ContactForm from "@/components/molecules/ContactForm/ContactForm";
import Footer from "@/components/organisms/Footer/Footer";
import MobileNav from "@/components/organisms/MobileNav/MobileNav";
import Drawer from "@mui/material/Drawer";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <MobileNav />
      <HeaderBar active={true} />
      <div className='  '>
        <div
          className='h-[100vh] bg-cover bg-no-repeat flex items-end text-white font-bold relative'
          style={{
            backgroundImage: 'url("/abuBuilding.jpg")',
            fontSize: "40px",
          }}
        >
          <h2 className='absolute top-[50%] md:top-[30rem] left-10 text-white font-bold text-5xl md:text-6xl'>
            Contact Us
          </h2>

          <div className='left-10  absolute md:block top-[60%]  md:top-[34rem] mr-5 md:text-left md:w-2/4'>
            <div className='flex flex-row items-center text-sm  md:justify-start'>
              <MapPinIcon className='w-4 h-4 mr-2 text-[#940000]' />
              <p>
                <strong>Address</strong>
              </p>
            </div>
            <p className='ml-6 text-sm'>
              Al Sarab Tower, ADGM Square, Al Maryah Island, Abu Dhabi, United
              Arab Emirates
            </p>
            <div className='text-sm flex flex-row items-center  md:justify-start'>
              <PhoneIcon className='w-4 h-4 mr-2 text-[#940000]' />
              <p>
                <strong>Phone</strong>
              </p>
            </div>
            <p className='ml-6 text-sm'>+971509139069</p>
            <div className='flex text-sm flex-row items-center  md:justify-start'>
              <EnvelopeIcon className='w-4 h-4 mr-2 text-[#940000]' />
              <p>
                <strong>Email</strong>
              </p>
            </div>
            <p className='ml-6 text-sm'>contact@s2sholding.com</p>
          </div>
          <button
            className=' bg-[#940000] py-2 px-5 rounded-md text-sm absolute top-[85%] md:top-[43rem] left-10'
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            Send a message to us
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
("react");
