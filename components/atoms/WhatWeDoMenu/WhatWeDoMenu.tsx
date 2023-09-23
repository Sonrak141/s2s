import React from "react";
import Link from "next/link";

function WhatWeDoMenu() {
  return (
    <div className='flex md:text-center text-sm mt-2 w-screen md:rounded-md md:bg-white md:text-black flex-col md:flex-row items-center justify-around'>
      <Link
        href='/defence'
        className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-white px-8 rounded-sm '
      >
        Defence
      </Link>
      <Link
        href='/healthcare'
        className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-white px-8 rounded-sm '
      >
        Healthcare
      </Link>
      <Link
        href='/construction'
        className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-white px-8 rounded-sm '
      >
        Construction
      </Link>

      <Link
        href='/logistic'
        className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-white px-8 rounded-sm'
      >
        Logistics
      </Link>
    </div>
  );
}

export default WhatWeDoMenu;
