"use client";
import Link from "next/link";
import React, { useState } from "react";

function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="my-0 mx-auto text-gray-400">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center"
        id="dropdown-toggle"
      >
        Clusters
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
        <div className="flex text-center mt-2 w-56 rounded-md shadow-lg bg-white/40  flex-col absolute">
          <Link href="/defense" className="mt-2">
            Defense
          </Link>
          <Link href="/" className="mt-2">
            Healthcare
          </Link>
          <Link href="/" className="mt-2 mb-2">
            Construction
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavDropdown;
