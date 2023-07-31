import React from "react";
import NavDropdown from "../../atoms/NavDropdown/NavDropdown";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-between">
        <NavDropdown />
        <Link href="/aboutus" className="ml-7 text-gray-400">
          About Us
        </Link>
        <Link href="/contactus" className="ml-7 text-gray-400">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
