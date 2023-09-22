"use client";
import Link from "next/link";
import { document } from "postcss";
import React, { useState, useRef, useEffect } from "react";

function NavDropdown({ toggleDropdown }: any) {
  const ref: any = useRef();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='text-lg  my-4 md:my-0 md:mx-4 ' ref={ref}>
      <button
        type='button'
        onClick={toggleDropdown}
        className='inline-flex justify-center text-sm hover:text-red-500'
        id='dropdown-toggle'
      >
        What We Do
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
    </div>
  );
}

export default NavDropdown;
