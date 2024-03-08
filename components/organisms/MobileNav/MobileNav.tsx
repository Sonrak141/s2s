"use client";
import React, {useContext, useState, } from "react";
import NavDropdown from "@/components/atoms/NavDropdown/NavDropdown";
import AboutUsDropdown from "@/components/atoms/AboutUsDropdown/AboutUsDropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import SocialMediaNav from "@/components/molecules/SocialMediaNav/SocialMediaNav";
import LogoImg from "@/components/atoms/LogoImg/LogoImg";
import languageContext from "@/context/languageContext";

function MobileNav() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const{spanish, setSpanish} = useContext(languageContext)
  const blur = open ? "backdrop-blur-lg" : "";
  return (
    <div
      className={`md:hidden w-full p-5 absolute top-0 z-10 bg-white/60 flex flex-wrap ${blur}`}
    >
      <LogoImg />
      <button onClick={handleOpen} className='mx-auto  text-[30px]'>
        <GiHamburgerMenu />
      </button>
      {open && (
        <div className='w-full flex flex-col text-left items-start'>
          <Link href='/aboutus' className='text-sm my-4 '>
            {spanish?"Quienes somos":"Who we are"}
          </Link>
          <Link href='/whatwedo' className='text-sm my-4 '>
            {spanish?"Que hacemos":"What we do"}
          </Link>
          <Link href='/contactus' className='text-sm my-4 '>
            {spanish?"Contáctanos":"Contac Us"}
          </Link>
          <SocialMediaNav />
          <div>
            <a className="mr-3 text-xs hover:cursor-pointer" onClick={()=>setSpanish(false)}>EN</a>
            <a className="text-xs hover:cursor-pointer" onClick={()=>setSpanish(true)}>ES</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
