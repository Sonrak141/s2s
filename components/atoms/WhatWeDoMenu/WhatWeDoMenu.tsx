import React from "react";
import Link from "next/link";

function WhatWeDoMenu() {
  return (
    <div className='flex md:text-center text-md -mt-4 w-screen md:rounded-md  md:text-black flex-col md:flex-row items-center justify-around'>
      <Link
        href='/whatwedo#stretegy'
        className='pt-2 pb-2 ml-40 hover:text-[#940000] px-8 rounded-sm '
      >
        Strategy
      </Link>
      <Link
        href='/whatwedo#defence'
        className='pt-2 pb-2  hover:text-[#940000] px-8 rounded-sm '
      >
        Defence
      </Link>
      <Link
        href='/whatwedo#health'
        className='pt-2 pb-2 hover:text-[#940000] px-8 rounded-sm '
      >
        Healthcare
      </Link>
      <Link
        href='/whatwedo#construction'
        className='pt-2 pb-2 hover:text-[#940000] px-8 rounded-sm '
      >
        Construction
      </Link>

      <Link
        href='/whatwedo#logistic'
        className='pt-2 pb-2 mr-40 hover:text-[#940000]  px-8 rounded-sm'
      >
        Logistic
      </Link>
    </div>
  );
}

export default WhatWeDoMenu;
