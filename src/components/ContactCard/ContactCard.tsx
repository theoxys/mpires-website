import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";

const sizes = {
  mobile: {
    w: 312,
    h: 200,
  },
  desktop: {
    w: 470,
    h: 300,
  },
};

const cardSize = `h-[200px] w-[312px] md:h-[300px] md:w-[470px]`;

const bgSize = `h-[197px] w-[309px] md:h-[297px] md:w-[467px]`;

const glassSize = `h-[240px] w-[352px] md:h-[340px] md:w-[510px]`;

export const ContactCard = () => {
  return (
    <div className={cn("relative flex items-center justify-center", cardSize)}>
      <div
        className={cn(
          "absolute bg-white/[2%] z-20 -top-[20px] rounded-2xl border border-zinc-800/30 backdrop-blur-xl",
          glassSize
        )}
      />
      <div
        className={cn(
          "absolute top-0 flex bg-gradient-to-b from-zinc-900 to-black to-80% rounded-2xl shadow-sm border-t border-zinc-700 shadow-zinc-500/20 z-20",
          cardSize
        )}
      ></div>
      <div
        className={cn(
          "absolute top-0 flex bg-repeat z-30 opacity-[2%] rounded-lg m-[2px]",
          bgSize
        )}
        style={{ backgroundImage: 'url("/card-pattern.svg")' }}
      />
      <Icons.logo
        className="z-40 opacity-90 absolute top-[50px] md:top-[80px] h-[30px] md:h-[50px]"
        fill={"white"}
      />
      <Icons.logo
        className="z-[39] absolute top-[50px] md:top-[80px] blur-lg opacity-50"
        fill={"rgb(14, 165, 233)"}
        height={50}
      />
      <div className="absolute top-[80px] md:top-[130px] flex flex-col gap-1 z-40 items-center mt-7">
        <span className="uppercase text-md tracking-widest font-medium text-zinc-300">
          Matheus Pires
        </span>
        <span className="uppercase text-sm tracking-widest font-light text-zinc-400">
          Software Engineer
        </span>
      </div>
      <div className="absolute w-[1px] h-[270px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent z-40 left-0" />
    </div>
  );
};
