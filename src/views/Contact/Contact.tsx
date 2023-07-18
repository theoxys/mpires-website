/* eslint-disable react/no-unescaped-entities */
import { ContactCard } from "@/components/ContactCard/ContactCard";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <div className="flex flex-col min-h-full w-full max-w-7xl gap-4 items-center mt-40 mb-10 relative">
      <SectionTitle>Get in touch</SectionTitle>
      <div className="flex w-full items-center flex-col gap-20 xl:gap-0 xl:flex-row xl:justify-between">
        <ContactCard />
        <div className="flex flex-col gap-4 leading-loose tracking-widest items-center xl:items-start w-full md:w-fit px-6 md:px-0">
          <span className="text-xs md:text-md uppercase text-slate-400 font-light w-fit text-center">
            For jobs, projects and other inquiries please email to:{" "}
          </span>
          <strong className="text-lg md:text-4xl uppercase font-semibold bg-clip-text bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 text-transparent">
            matheuspires.dev@gmail.com
          </strong>
          <Button className="w-fit">Click to copy!</Button>
          <span className="text-xs md:text-md uppercase text-slate-400 font-light">
            Let's built something togheter!
          </span>
        </div>
      </div>

      <strong className=" absolute text-4xl uppercase font-semibold bg-clip-text bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 text-transparent blur-2xl top-[55%] right-0">
        matheuspires.dev@gmail.com
      </strong>

      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-violet-500 via-sky-400 to-emerald-500 blur-3xl opacity-30 -left-[10%] top-[10%]" />
      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-violet-500 via-sky-700 to-purple-700 blur-2xl opacity-20 left-[20%] top-[60%]" />
    </div>
  );
};
