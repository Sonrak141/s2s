import React from "react";
import NavDropdown from "../../atoms/NavDropdown/NavDropdown";
import AboutUsDropdown from "@/components/atoms/AboutUsDropdown/AboutUsDropdown";
import Link from "next/link";

function NavBar({ aboutDrop, businessDrop }: any) {
  return (
    <div className='flex justify-between'>
      <div className='flex justify-between'>
        <AboutUsDropdown toggleDropdown={aboutDrop} />
        <NavDropdown toggleDropdown={businessDrop} />
        <Link
          href='/contactus'
          className='text-sm ml-7 md:mt-[0.33rem]  hover:text-red-500'
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
