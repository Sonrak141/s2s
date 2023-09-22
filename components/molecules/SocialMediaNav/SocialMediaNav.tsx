import React from "react";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function SocialMediaNav() {
  return (
    <div className='flex my-8 md:my-0 flex-row items-center gap-3 mr-10'>
      <Link href='https://linkedin.com' target='blank'>
        <BsLinkedin />
      </Link>
      <Link href='https://instagram.com' target='blank'>
        <BsInstagram />
      </Link>
    </div>
  );
}

export default SocialMediaNav;
