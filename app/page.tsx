import Image from "next/image";
import HeaderBar from "../components/organisms/HeaderBar/HeaderBar";
import CarouselComp from "../components/organisms/Carousel/CarouselComp";
import LogoAnimation from "@/components/atoms/LogoAnimation/LogoAnimation";
import MobileNav from "@/components/organisms/MobileNav/MobileNav";
import BackgroundVideo from "@/components/atoms/BackgroundVideo/BackgroundVideo";

const images = [
  "https://via.placeholder.com/800x400",
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/400x400",
];

export default function Home() {
  return (
    <main className=''>
      <MobileNav />
      <HeaderBar active={true} />
      <BackgroundVideo videoSource='/Video/desert.mov' />
      <div className='h-screen flex justify-center'>
        <h1 className='text-6xl text-red-600 font-bold mt-60'>
          Embracing diversity. Inspiring growth
        </h1>
      </div>
    </main>
  );
}
