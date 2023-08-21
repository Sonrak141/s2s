import React from "react";
import Image from "next/image";
import Link from "next/link";

function LogoImg() {
  return (
    <div>
      <Link href="/">
        <Image
          src="/LogoMain.png"
          alt="South 2 South Logo"
          className="md:m-3"
          width={400}
          height={36}
          priority
        />
      </Link>
    </div>
  );
}

export default LogoImg;
