"use client";
import React, { useState, useEffect, useRef } from "react";
import LogoImg from "../../atoms/LogoImg/LogoImg";
import NavBar from "../../molecules/NavBar/NavBar";
import SocialMediaNav from "@/components/molecules/SocialMediaNav/SocialMediaNav";
import WhoWeAreMenu from "@/components/atoms/WhoWeAreMenu/WhoWeAreMenu";
import WhatWeDoMenu from "@/components/atoms/WhatWeDoMenu/WhatWeDoMenu";

type HeaderBarProps = {
  active: boolean;
};

function HeaderBar({ active }: HeaderBarProps) {
  const [aboutDrop, setAboutDrop] = useState(false);
  const [businessDrop, setBusinessDrop] = useState(false);
  const ref: any = useRef();
  const openAboutDrop = () => {
    if (businessDrop) {
      setBusinessDrop(false);
    }
    setAboutDrop(!aboutDrop);
  };
  const openBusinessDrop = () => {
    if (aboutDrop) {
      setAboutDrop(false);
    }
    setBusinessDrop(!businessDrop);
  };
  useEffect(() => {
    const checkAbout = (e: { target: any }) => {
      if (aboutDrop && ref.current && !ref.current?.contains(e.target)) {
        setAboutDrop(false);
      }
    };
    const checkBussines = (e: { target: any }) => {
      if (businessDrop && ref.current && !ref.current?.contains(e.target)) {
        setBusinessDrop(false);
      }
    };
    window.addEventListener("mousedown", checkAbout);
    window.addEventListener("mousedown", checkBussines);
    return () => {
      window.removeEventListener("mousedown", checkAbout);
      window.removeEventListener("mousedown", checkBussines);
    };
  }, [aboutDrop, businessDrop]);
  return (
    <div>
      <div className='md:flex flex-col hidden items-center justify-between w-full py-1 px-2 fixed z-10 bg-white/60 '>
        <div className='flex flex-row items-center justify-between w-full py-1 px-2'>
          <div>
            <LogoImg />
          </div>

          <NavBar aboutDrop={openAboutDrop} businessDrop={openBusinessDrop} />
          {/* <div>
            <button className='text-xs mx-4 '>EN</button>

            <button className='text-xs mx-4 '>ES</button>
            <button className='text-xs mx-4 '>AR</button>
          </div> */}
          <div className=''>
            <SocialMediaNav />
          </div>
        </div>
        {aboutDrop ? <WhoWeAreMenu /> : ""}
        {businessDrop ? <WhatWeDoMenu /> : ""}
      </div>
    </div>
  );
}

export default HeaderBar;
