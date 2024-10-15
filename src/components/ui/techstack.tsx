import Expo from "@/components/svg/Expo.svg";
import NextJS from "@/components/svg/NextJS.svg";
import NodeJS from "@/components/svg/NodeJS.svg";
import React from "@/components/svg/React.svg";
import Redux from "@/components/svg/Redux.svg";
import Swift from "@/components/svg/Swift.svg";
import Tailwind from "@/components/svg/Tailwind.svg";
import Typescript from "@/components/svg/Typescript.svg";
import Vue from "@/components/svg/Vue.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const icons = [
  Expo,
  NodeJS,
  React,
  Redux,
  Swift,
  Tailwind,
  Typescript,
  Vue,
  NextJS,
];

export default function TechStack() {
  return (
    <Carousel
      opts={{
        align: "end",
      }}
      className="w-full"
    >
      <CarouselContent>
        {icons.map((Icon, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Icon />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
