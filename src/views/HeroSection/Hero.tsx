"use client";

import Spline from "@splinetool/react-spline";

export const HeroSection = () => {
  return (
    <div className="flex max-w-7xl w-full relative min-h-screen">
      <div className="flex flex-col absolute my-auto top-0 bottom-60 h-fit">
        <h2 className="text-slate-200 mb-6 font-light text-xl tracking-widest ">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          👋 HI, I'M
        </h2>
        <h1 className="font-bold tracking-widest whitespace-break-spaces text-[100px] leading-none drop-shadow-lg text-slate-200 z-10">
          MATHEUS
          <br />
          PIRES
        </h1>
        <h2 className="text-slate-200 mt-6 font-light text-xl tracking-widest z-10">
          SOFTWARE ENGINEER.
        </h2>
        <div className="w-full h-72 absolute -bottom-1 -right-32 opacity-60 animate-spin-slow filter blur-[100px]">
          <div className="relative">
            <div className="rounded-full h-72 w-30 bg-emerald-500/50"></div>
            <div className="rounded-full h-40 right-40 w-26 bg-purple-500"></div>
          </div>
        </div>
      </div>

      <Spline
        scene="https://prod.spline.design/X4bytgkcarlqM5pU/scene.splinecode"
        className="z-20"
      />
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
    </div>
  );
};