import { Timeline } from "@/components/Timeline/Timeline";
import Image from "next/image";
import ProfilePic from "../../../public/profile-pic.jpg";

export const AboutSection = () => {
  return (
    <div className="flex flex-col gap-4 max-w-7xl w-full relative min-h-screen">
      <div className="flex gap-6 justify-between">
        <div className="flex flex-col gap-6 items-center">
          <div className="w-96 ">
            <Image
              src={ProfilePic}
              alt="Matheus Pires photo"
              className="rounded-full border-2 border-slate-800 shadow-2xl"
            />
          </div>
          <div className="p-6 border border-slate-700 rounded-xl max-w-xl text-center text-sm text-slate-400 bg-slate-700/10 leading-relaxed shadow-2xl shadow-emerald-500/10">
            A developer who loves exercising creativity through code. Developing
            personal projects is one of my passions. Working as a team is
            something that energizes me – I love exchanging ideas and
            collaborating. 🚀 Every weekend with a new Startup idea. 🎵 Musician
            in spare time. ☕ Caffeine addicted. 🖤 Dark Theme lover. 👶 Running
            since 1998!
          </div>
        </div>
        <Timeline />
      </div>
    </div>
  );
};
