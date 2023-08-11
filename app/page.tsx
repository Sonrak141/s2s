import Image from "next/image";
import HeaderBar from "../components/organisms/HeaderBar/HeaderBar";
import CarouselComp from "../components/organisms/Carousel/CarouselComp";

const images = [
  "https://via.placeholder.com/800x400",
  "https://via.placeholder.com/600x400",
  "https://via.placeholder.com/400x400",
];

export default function Home() {
  return (
    <main className="">
      <HeaderBar active={true} />
      <CarouselComp />
    </main>
  );
}
