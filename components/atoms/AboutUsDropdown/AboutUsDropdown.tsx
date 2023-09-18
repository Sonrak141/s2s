"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function AboutUsDropdown() {
  const ref: any = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const check = (e: { target: any }) => {
      if (isOpen && ref.current && !ref.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", check);
    return () => window.removeEventListener("mousedown", check);
  }, [isOpen]);

  return (
    <div className='text-lg md:my-0 my-4 md:mx-4 text-white' ref={ref}>
      <button
        type='button'
        onClick={toggleDropdown}
        className='inline-flex justify-center'
        id='dropdown'
      >
        About Us
        <svg
          className='-mr-1 ml-2 h-5 w-5'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      {isOpen ? (
        <div className='flex md:text-center mt-2 md:w-56 w-screen md:rounded-md shadow-lg md:bg-white/90 md:text-black md:absolute  flex-col mx-0'>
          <Link
            href='/aboutus#whoweare'
            className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-black rounded-sm'
          >
            Who we are
          </Link>
          <Link
            href='/aboutus#strategy'
            className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-black rounded-sm'
          >
            Strategy
          </Link>
          <Link
            href='/aboutus#teammembers'
            className='pt-2 pb-2 hover:bg-[#FF0000] hover:text-black rounded-sm'
          >
            Team Members
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AboutUsDropdown;
