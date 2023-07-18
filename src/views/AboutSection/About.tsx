import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { Timeline } from "@/components/Timeline/Timeline";
import Image from "next/image";
import ProfilePic from "../../../public/profile-pic.jpg";

export const AboutSection = () => {
  return (
    <div className="flex flex-col gap-4 max-w-7xl w-full relative min-h-full mb-32">
      <div className="flex flex-col gap-6 justify-between md:flex-row mx-6 items-center">
        <div className="flex flex-col gap-6 items-center relative">
          <div className="absolute h-80 w-80 md:h-96 md:w-96 rounded-full bg-white/[2%] z-20 -top-4 md:-top-8 backdrop-blur-lg border border-zinc-50/5 shadow-lg shadow-black/50"></div>
          <div className="w-72 md:w-80 z-30 mb-8">
            <Image
              src={ProfilePic}
              alt="Matheus Pires photo"
              className="rounded-full border-2 border-slate-400/10 shadow-md shadow-black/40 z-30"
            />
          </div>
          <SectionTitle className="my-2 h-fit">About me</SectionTitle>
          <div className="p-6 border border-slate-700 rounded-xl max-w-xl text-center text-sm text-slate-400 bg-slate-700/10 leading-relaxed shadow-2xl shadow-sky-500/10">
            A developer who loves exercising creativity through code. Developing
            personal projects is one of my passions. Working as a team is
            something that energizes me – I love exchanging ideas and
            collaborating. 🚀 Every weekend with a new Startup idea. 🎵 Musician
            in spare time. ☕ Caffeine addicted. 🖤 Dark Theme lover. 👶 Running
            since 1998!
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <SectionTitle className="my-2 h-fit">Experience</SectionTitle>
          <Timeline />
        </div>
      </div>

      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-violet-500 via-sky-400 to-emerald-500 blur-3xl opacity-20 left-0 -top-[10%] z-10" />

      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-emerald-600 to-purple-700 blur-2xl opacity-30 left-[20%] top-[25%] z-10" />
    </div>
  );
};
