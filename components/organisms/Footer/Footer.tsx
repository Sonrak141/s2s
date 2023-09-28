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
            width={180}
            height={18}
            className='object-contain -ml-6'
          />
        </div>
        <div className=' md:w-2/4'>
          <div className='flex flex-row items-center'>
            <MapPinIcon className='w-4 h-4 mr-2 text-[#940000]' />
            <p>
              <strong>Addres</strong>
            </p>
          </div>
          <p className='ml-6'>
            26 Al Abjar Street, Abu Dhabi, Abu Dhabi, Abu Dhabi Emirate
          </p>
          <div className='flex flex-row items-center'>
            <PhoneIcon className='w-4 h-4 mr-2 text-[#940000]' />
            <p>
              <strong>Phone</strong>
            </p>
          </div>
          <p className='ml-6'>+971(4)824424</p>
          <div className='flex flex-row items-center'>
            <EnvelopeIcon className='w-4 h-4 mr-2 text-[#940000]' />
            <p>
              <strong>Email</strong>
            </p>
          </div>
          <p className='ml-6'>contact@s2sholding.com</p>
        </div>
        <div className=' w-1/12'>
          <div className='flex flex-col'>
            <Link href='/aboutus' className='text-sm my-4 hover:text-[#940000]'>
              Who we are
            </Link>
            <Link
              href='/whatwedo'
              className='text-sm my-4 hover:text-[#940000]'
            >
              What we do
            </Link>
            <Link
              href='/contactus'
              className='text-sm my-4 hover:text-[#940000]'
            >
              Contac Us
            </Link>
          </div>
        </div>
        <div className=' w-1/4'>
          <div className='flex flex-col'>
            <Link className='text-gray-500 mb-7 text-sm' href='/'>
              Privacy Policy
            </Link>
            <Link className='text-gray-500 mb-7 text-sm' href='/'>
              Terms of Use
            </Link>
            <p className='text-gray-500 text-sm'>
              @2023 South2South All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
