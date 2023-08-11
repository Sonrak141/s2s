"use client";
import Link from "next/link";
import { document } from "postcss";
import React, { useState, useRef, useEffect } from "react";

function NavDropdown() {
  const ref = useRef();
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
    <div className="my-0 mx-auto text-white" ref={ref}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center"
        id="dropdown-toggle"
      >
        Business
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="flex text-center mt-2 w-56 rounded-md shadow-lg bg-white/90 text-black  flex-col absolute">
          <Link
            href="/defense"
            className="pt-2 pb-2 hover:bg-blue-300 hover:text-black rounded-sm"
          >
            Defense
          </Link>
          <Link
            href="/healthcare"
            className="pt-2 pb-2 hover:bg-blue-300 hover:text-black rounded-sm"
          >
            Healthcare
          </Link>
          <Link
            href="/construction"
            className="pt-2 pb-2 hover:bg-blue-300 hover:text-black rounded-sm"
          >
            Construction
          </Link>
          <Link
            href="/agrotech"
            className="pt-2 pb-2 hover:bg-blue-300 hover:text-black rounded-sm"
          >
            AgroTech
          </Link>
          <Link
            href="/logistic"
            className="pt-2 pb-2 hover:bg-blue-300 hover:text-black rounded-sm"
          >
            Logistic
          </Link>
          <Link
            href="/technology"
            className="pt-2 pb-2 hover:bg-blue-300 hover:text-black rounded-sm"
          >
            Technology
          </Link>
          <Link
            href="/hospitality"
            className="pt-2 pb-2 hover:bg-blue-300 hover:text-black rounded-sm"
          >
            Hospitality
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavDropdown;
