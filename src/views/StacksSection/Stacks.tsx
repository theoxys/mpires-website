import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { Slider } from "@/components/Slider/Slider";

export const StacksSection = () => {
  return (
    <div className="relative flex flex-col w-full min-h-full max-w-7xl mb-40 items-center px-4">
      <SectionTitle>Some technologies I currently use</SectionTitle>
      <div className="relative h-64 w-full z-20 bg-white/[1%] rounded-2xl border border-slate-200/[1%] backdrop-blur-lg shadow-xl shadow-black/50 flex items-center">
        <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent z-30"></div>
        <Slider />
        <div className="absolute bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mt-16 z-30"></div>
      </div>

      <div className="absolute w-[700px] rotate-[20deg]  h-72 rounded-full z-10 bg-gradient-to-br from-violet-500 via-sky-400 to-emerald-500 blur-3xl opacity-10 -left-[10%] top-[10%]" />
    </div>
  );
};
