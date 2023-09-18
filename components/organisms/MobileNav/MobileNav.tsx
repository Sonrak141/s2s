"use client";
import React, { useState } from "react";
import NavDropdown from "@/components/atoms/NavDropdown/NavDropdown";
import AboutUsDropdown from "@/components/atoms/AboutUsDropdown/AboutUsDropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import SocialMediaNav from "@/components/molecules/SocialMediaNav/SocialMediaNav";
import LogoImg from "@/components/atoms/LogoImg/LogoImg";

function MobileNav() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const blur = open ? "backdrop-blur-lg" : "";
  return (
    <div
      className={`md:hidden w-full p-5 absolute top-0 z-10 bg-black/30 flex flex-col ${blur}`}
    >
      <LogoImg />
      <button onClick={handleOpen} className='mx-auto text-white text-[30px]'>
        <GiHamburgerMenu />
      </button>
      {open && (
        <div className='w-full flex flex-col text-left items-start'>
          <NavDropdown />
          <AboutUsDropdown />
          <Link href='/contactus' className='text-lg my-4 text-white'>
            Contac Us
          </Link>
          <SocialMediaNav />
        </div>
      )}
    </div>
  );
}

export default MobileNav;
