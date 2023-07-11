import { Slider } from "@/components/Slider/Slider";

export const StacksSection = () => {
  return (
    <div className="flex flex-col w-full min-h-full max-w-7xl">
      <div className="flex gap-4 items-center mb-16">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        <h1 className="text-slate-200 mt-6 font-light text-sm tracking-widest z-10 uppercase w-[500px] text-center">
          Some technologies I currently use
        </h1>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      </div>
      <Slider />

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mt-16"></div>
    </div>
  );
};
