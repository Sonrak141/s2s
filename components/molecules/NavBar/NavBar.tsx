import React, {useContext} from "react";
import NavDropdown from "../../atoms/NavDropdown/NavDropdown";
import AboutUsDropdown from "@/components/atoms/AboutUsDropdown/AboutUsDropdown";
import Link from "next/link";
import languageContext from "@/context/languageContext";

function NavBar({ aboutDrop, businessDrop }: any) {
  const {spanish} = useContext(languageContext);
  return (
    <div className='flex justify-between'>
      <div className='flex justify-between'>
        <AboutUsDropdown toggleDropdown={aboutDrop} />
        <NavDropdown toggleDropdown={businessDrop} />
        <Link
          href='/contactus'
          className='text-sm md:text-md mt-1 ml-7   hover:text-[#940000]'
        >
          {spanish? "Contáctanos": "Contact us"}
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
