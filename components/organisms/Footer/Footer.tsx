import React from "react";
import Image from "next/image";
import { footerLinksCategories } from "@/components/constants";
import Link from "next/link";

function Footer() {
  return (
    <div className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max:md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image
            src='/S2S_International_Holding/S2SLogos-29.png'
            alt='logo'
            width={200}
            height={18}
            className='object-contain -ml-6'
          />
          <p className='text-base text-gray-700'>
            South2South 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
          {footerLinksCategories.map((link) => (
            <div
              key={link.title}
              className='flex flex-col gap-6 text-base min-w-[170px]'
            >
              <h3 className='font-hold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className='text-gray-500'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
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
