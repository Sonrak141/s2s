import React from "react";
import Link from "next/link";

function WhoWeAreMenu() {
  return (
    <div className='flex md:text-center text-md mt-2 w-screen md:rounded-md  md:text-black flex-col md:flex-row items-center justify-around'>
      <Link
        href='/aboutus#whoweare'
        className='pt-2 pb-2 ml-60 hover:text-[#940000]  px-8 rounded-sm '
      >
        About us
      </Link>

      <Link
        href='/aboutus#teammembers'
        className='pt-2 pb-2 mr-60 hover:text-[#940000] px-8 rounded-sm '
      >
        Leadership
      </Link>
    </div>
  );
}

export default WhoWeAreMenu;
