import React from "react";
import Image from "next/image";

function LogoDefense() {
  return (
    <div className="absolute top-0 z-10">
      <Image
        src="/LogoDefense1.png"
        alt="South 2 South Logo"
        className="m-2"
        width={200}
        height={36}
        priority
      />
    </div>
  );
}

export default LogoDefense;
