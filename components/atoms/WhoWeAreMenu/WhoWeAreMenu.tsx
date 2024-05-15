import React, {useContext} from "react";
import Link from "next/link";
import languageContext from "@/context/languageContext";

function WhoWeAreMenu() {
    const {spanish} = useContext(languageContext)
    return (
        <div
            className='flex md:text-center text-md -mt-4 w-screen md:rounded-md  md:text-black flex-col md:flex-row items-center justify-center mr-12'>
            <Link
                href='/aboutus'
                className='pt-2 pb-2 mr-20  hover:text-[#940000]  px-8 rounded-sm '
            >
                {spanish ? "Nosotros" : "About Us"}
            </Link>

            {/*<Link
        href='/aboutus#leadership'
        className='pt-2 pb-2  hover:text-[#940000] px-8 rounded-sm '
      >
          {spanish? "Junta directiva": "Leadership"}
      </Link>*/}
        </div>
    );
}

export default WhoWeAreMenu;
