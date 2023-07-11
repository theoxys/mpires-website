"use client";

import { stacks } from "@/content/contents";
import { useKeenSlider } from "keen-slider/react";
import { SliderItem } from "./SliderItem";

const animation = { duration: 30000, easing: (t: any) => t };

export const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 6,
      spacing: 15,
    },
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="keen-slider relative" ref={sliderRef}>
      <div className="absolute h-20 w-24 z-50 -left-1 top-0 bottom-0 my-auto bg-gradient-to-r from-black rounded-3xl "></div>
      {stacks.map((stack, index) => (
        <SliderItem name={stack.name} icon={stack.icon} key={index} />
      ))}
      <div className="absolute h-20 w-24 z-50 -right-1 top-0 bottom-0 my-auto bg-gradient-to-r from-transparent to-black rounded-3xl"></div>
    </div>
  );
};
