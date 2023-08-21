import React from "react";
import NavDropdown from "../../atoms/NavDropdown/NavDropdown";
import AboutUsDropdown from "@/components/atoms/AboutUsDropdown/AboutUsDropdown";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-between">
        <AboutUsDropdown />
        <NavDropdown />
        <Link href="/contactus" className="text-lg ml-7 text-white">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
