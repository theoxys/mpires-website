/* eslint-disable react/no-unescaped-entities */
"use client";

import Spline from "@splinetool/react-spline";

export const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row max-w-7xl w-full relative min-h-[600px] lg:min-h-screen justify-center lg:justify-start px-4">
      <div className="flex flex-col my-auto top-0 bottom-60 h-fit items-center lg:items-start">
        <h2 className="text-slate-200 mb-6 font-light text-xl tracking-widest ">
          👋 HI, I'M
        </h2>
        <h1 className="font-bold tracking-widest whitespace-break-spaces text-5xl lg:text-[100px] leading-none drop-shadow-lg text-slate-200 z-10 text-center lg:text-start">
          MATHEUS
          <br />
          PIRES
        </h1>
        <h2 className="text-slate-200 mt-6 font-light text-xl tracking-widest z-10">
          SOFTWARE ENGINEER.
        </h2>
      </div>

      <div className="z-20 relative lg:-left-[10%] h-[300px] w-[400px] lg:h-[800px] lg:w-[950px]">
        <Spline
          scene="https://draft.spline.design/hEWLZ4p1JkkvyZMm/scene.splinecode"
          className="z-20"
          style={{ width: "inherit", height: "inherit" }}
        />
      </div>

      <div className="w-[300px] h-72 absolute top-[20%] left-[20%] opacity-40 animate-pulse transition-all filter blur-3xl">
        <div className="relative">
          <div className="rounded-full h-72 w-full bg-emerald-500/60"></div>
          <div className="rounded-full h-40 right-40 w-26 bg-purple-500"></div>
        </div>
      </div>
    </div>
  );
};
