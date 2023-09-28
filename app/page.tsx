"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import HeaderBar from "../components/organisms/HeaderBar/HeaderBar";
import CarouselComp from "../components/organisms/Carousel/CarouselComp";
import LogoAnimation from "@/components/atoms/LogoAnimation/LogoAnimation";
import MobileNav from "@/components/organisms/MobileNav/MobileNav";
import BackgroundVideo from "@/components/atoms/BackgroundVideo/BackgroundVideo";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingComponent from "@/components/atoms/LoadingComponent/LoadingComponent";

const images = [
  "https://via.placeholder.com/800x400",
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/400x400",
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <main className=''>
      {isLoading ? (
        isLoading ? (
          <div
            className={`relative ${isLoading ? "opacity-100" : "opacity-0"}`}
          >
            <LoadingComponent />
          </div>
        ) : (
          <div className='loading absolute top-0 left-0 w-full h-full bg-black opacity-100 fade-out'></div>
        )
      ) : (
        <div>
          <MobileNav />
          <HeaderBar active={true} />
          <BackgroundVideo videoSource='/Video/World.mov' />
          <div className='h-screen flex '>
            <h1 className='md:text-7xl text-4xl text-center md:ml-20 text-white  font-bold mt-[20rem] md:mt-[43rem]'>
              Embracing diversity. Inspiring growth.
            </h1>
          </div>
        </div>
      )}
    </main>
  );
}
