import React from "react";
import Link from "next/link";

function WhoWeAreMenu() {
  return (
    <div className='flex md:text-center text-md -mt-8 w-screen md:rounded-md  md:text-black flex-col md:flex-row items-center justify-center mr-12'>
      <Link
        href='/aboutus'
        className='pt-2 pb-2 mr-20  hover:text-[#940000]  px-8 rounded-sm '
      >
        About us
      </Link>

      <Link
        href='/aboutus#teammembers'
        className='pt-2 pb-2  hover:text-[#940000] px-8 rounded-sm '
      >
        Leadership
      </Link>
    </div>
  );
}

export default WhoWeAreMenu;
