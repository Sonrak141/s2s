import React from "react";
import Link from "next/link";

function WhatWeDoMenu() {
  return (
    <div className='flex md:text-center text-sm mt-2 w-screen md:rounded-md md:bg-white md:text-black flex-col md:flex-row items-center justify-around'>
      <Link
        href='/whatwedo#defence'
        className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-white px-8 rounded-sm '
      >
        Defence
      </Link>
      <Link
        href='/whatwedo#health'
        className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-white px-8 rounded-sm '
      >
        Healthcare
      </Link>
      <Link
        href='/whatwedo#construction'
        className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-white px-8 rounded-sm '
      >
        Construction
      </Link>

      <Link
        href='/whatwedo#logistic'
        className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-white px-8 rounded-sm'
      >
        Logistic
      </Link>
    </div>
  );
}

export default WhatWeDoMenu;
