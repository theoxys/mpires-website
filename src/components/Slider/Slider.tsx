"use client";

import { stacks } from "@/content/contents";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { SliderItem } from "./SliderItem";

const animation = { duration: 30000, easing: (t: any) => t };

// 6 - 15

export const Slider = () => {
  const [wSize, setWSize] = useState(0);

  useEffect(() => {
    const changeWidthHandler = () => {
      setWSize(window.innerWidth);
    };
    window.addEventListener("resize", changeWidthHandler);
    changeWidthHandler();
    return () => window.removeEventListener("resize", changeWidthHandler);
  }, []);

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: wSize < 1024 ? 2 : 6,
      spacing: wSize < 1024 ? 4 : 15,
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
    <div className="keen-slider relative z-[29]" ref={sliderRef}>
      {/* <div className="absolute h-16 w-52 z-30 -left-2 top-0 bottom-0 my-auto bg-gradient-to-r from-slate-900 to-transparent blur-sm opacity-80" /> */}
      <div className="absolute h-24 w-[2px] left-0 top-0 bg-gradient-to-b from-transparent via-slate-800 to-transparent z-[31] "></div>
      {stacks.map((stack, index) => (
        <SliderItem name={stack.name} icon={stack.icon} key={index} />
      ))}
      {/* <div className="absolute h-16 w-52 z-30 -right-2 top-0 bottom-0 my-auto bg-gradient-to-l from-slate-900 to-transparent blur-sm opacity-80"></div> */}
      <div className="absolute h-24 w-[2px] right-0 top-0 bg-gradient-to-b from-transparent via-slate-800 to-transparent z-[31] "></div>
    </div>
  );
};
