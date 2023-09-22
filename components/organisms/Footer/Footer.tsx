import React from "react";
import Image from "next/image";
import { footerLinksCategories } from "@/components/constants";
import Link from "next/link";

function Footer() {
  return (
    <div className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max:md:flex-row flex-wrap justify-between gap-5 sm:px-16 px-6'>
        <div className='flex flex-row justify-start items-end  gap-6'>
          <Image
            src='/S2S_International_Holding/S2SLogos-29.png'
            alt='logo'
            width={200}
            height={18}
            className='object-contain -ml-6'
          />
        </div>
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
