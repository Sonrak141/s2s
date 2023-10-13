import React from "react";
import Image from "next/image";
import { footerLinksCategories } from "@/components/constants";
import Link from "next/link";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

function Footer() {
  return (
    <div className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max:md:flex-row flex-wrap justify-center md:justify-between items-center md:gap-5 px-6'>
        <div className='flex flex-row justify-center md:justify-start items-end'>
          <img
            src='/S2S_International_Holding/S2SLogos-29.png'
            alt='logo'
            width={180}
            height={18}
            className='object-contain md:-ml-6'
          />
        </div>
        <div className='text-center mr-5 md:text-left md:w-2/4'>
          <div className='flex flex-row items-center justify-center md:justify-start my-1'>
            <MapPinIcon className='w-4 h-4 mr-2 text-[#940000]' />
            <p>
              <strong>Address</strong>
            </p>
          </div>
          <p className='ml-6'>
            Al Sarab Tower, ADGM Square, Al Maryah Island, Abu Dhabi, United
            Arab Emirates
          </p>
          <div className='flex flex-row items-center justify-center md:justify-start my-1'>
            <PhoneIcon className='w-4 h-4 mr-2 text-[#940000]' />
            <p>
              <strong>Phone</strong>
            </p>
          </div>
          <p className='ml-6'>+971509139069</p>
          <div className='flex flex-row items-center justify-center md:justify-start my-1'>
            <EnvelopeIcon className='w-4 h-4 mr-2 text-[#940000]' />
            <p>
              <strong>Email</strong>
            </p>
          </div>
          <p className='ml-6'>contact@s2sholding.com</p>
        </div>
        <div className=' w-full md:w-1/6'>
          <div className='flex flex-col text-center md:text-right md:w-[70%]'>
            <Link
              href='/aboutus'
              className='text-sm text-gray-500 my-4 hover:text-[#940000]'
            >
              Who we are
            </Link>
            <Link
              href='/whatwedo'
              className='text-sm my-4 text-gray-500 hover:text-[#940000]'
            >
              What we do
            </Link>
            <Link
              href='/contactus'
              className='text-sm my-4 text-gray-500 hover:text-[#940000]'
            >
              Contac Us
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:justify-end  w-full text-center md:text-left md:w-[96%] my-5 md:mt-5'>
        <Link className='text-gray-500 mb-7 mr-3 text-xs' href='/'>
          Privacy | Policy
        </Link>
        <Link className='text-gray-500 mb-7 mr-3 text-xs' href='/'>
          Terms of Use
        </Link>
        <Link className='text-gray-500 mb-7 mr-3 text-xs' href='/'>
          @2023 South2South All Rights Reserved
        </Link>
      </div>
    </div>
  );
}

export default Footer;
