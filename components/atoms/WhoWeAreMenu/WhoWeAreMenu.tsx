import React from "react";
import Link from "next/link";

function WhoWeAreMenu() {
  return (
    <div className='flex md:text-center mt-2 w-screen md:rounded-md md:bg-white md:text-black flex-col md:flex-row items-center justify-around'>
      <Link
        href='/aboutus#whoweare'
        className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-white px-8 rounded-sm '
      >
        Who we are
      </Link>
      <Link
        href='/aboutus#strategy'
        className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-white px-8 rounded-sm '
      >
        Strategy
      </Link>
      <Link
        href='/aboutus#teammembers'
        className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-white px-8 rounded-sm '
      >
        Team Members
      </Link>
    </div>
  );
}

export default WhoWeAreMenu;
