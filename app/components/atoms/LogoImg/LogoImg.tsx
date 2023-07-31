import React from "react";
import Image from "next/image";

function LogoImg() {
  return (
    <div>
      <Image
        src="/LogoS2SFull2.png"
        alt="South 2 South Logo"
        className="m-2"
        width={200}
        height={36}
        priority
      />
    </div>
  );
}

export default LogoImg;
