import React from "react";
import NavDropdown from "../../atoms/NavDropdown/NavDropdown";
import AboutUsDropdown from "@/components/atoms/AboutUsDropdown/AboutUsDropdown";
import Link from "next/link";

function NavBar() {
  return (
    <div className='flex justify-between'>
      <div className='flex justify-between'>
        <AboutUsDropdown />
        <NavDropdown />
        <Link
          href='/contactus'
          className='text-sm ml-7 md:mt-[0.33rem] text-white hover:text-red-500'
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
