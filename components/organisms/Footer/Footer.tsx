import React from "react";
import Image from "next/image";
import { footerLinksCategories } from "@/components/constants";
import Link from "next/link";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

function Footer() {
  return (
    <div className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max:md:flex-row flex-wrap justify-between items-center gap-5 sm:px-16 px-6'>
        <div className='flex flex-row justify-start items-end'>
          <Image
            src='/S2S_International_Holding/S2SLogos-29.png'
            alt='logo'
            width={200}
            height={18}
            className='object-contain -ml-6'
          />
        </div>
        <div className=' md:w-2/4'>
          <div className='flex flex-row items-center'>
            <MapPinIcon className='w-4 h-4 mr-2 text-[#FF0000]' />
            <p>
              <strong>Addres</strong>
            </p>
          </div>
          <p className='ml-6'>
            26 Al Abjar Street, Abu Dhabi, Abu Dhabi, Abu Dhabi Emirate
          </p>
          <div className='flex flex-row items-center'>
            <PhoneIcon className='w-4 h-4 mr-2 text-[#FF0000]' />
            <p>
              <strong>Phone</strong>
            </p>
          </div>
          <p className='ml-6'>+971(4)824424</p>
          <div className='flex flex-row items-center'>
            <EnvelopeIcon className='w-4 h-4 mr-2 text-[#FF0000]' />
            <p>
              <strong>Email</strong>
            </p>
          </div>
          <p className='ml-6'>info@south2south.com</p>
        </div>
        <div className=' w-1/4'></div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>@2023 South 2 South All Rights Reserved</p>
        <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
          <Link className='text-gray-500' href='/'>
            Privacy Policy
          </Link>
          <Link className='text-gray-500' href='/'>
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
