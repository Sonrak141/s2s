import React, { useState } from "react";
import LogoImg from "../../atoms/LogoImg/LogoImg";
import NavBar from "../../molecules/NavBar/NavBar";

type HeaderBarProps = {
  active: boolean;
};

function HeaderBar({ active }: HeaderBarProps) {
  return (
    <div
      className={
        active
          ? "flex items-center justify-between w-full p-5 absolute top-0 z-10"
          : "flex items-center justify-between w-full p-5"
      }
    >
      <div>
        <LogoImg />
      </div>

      <NavBar />
      <div>
        <button className="text-xs mx-4 text-white">EN</button>

        <button className="text-xs mx-4 text-white">ES</button>
        <button className="text-xs mx-4 text-white">AR</button>
      </div>
    </div>
  );
}

export default HeaderBar;