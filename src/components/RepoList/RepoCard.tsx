import { Code2, GitBranch } from "lucide-react";

export interface RepoProps {
  name: string;
  description: string;
  language: string;
}

export const RepoCard = ({ name, description, language }: RepoProps) => {
  return (
    <div className="relative transition-all flex flex-col border-b border-slate-800 rounded-lg p-6 w-full gap-2 bg-slate-700/10 shadow-xl shadow-sky-700/5 hover:cursor-pointer hover:bg-slate-700/20 hover:shadow-2xl hover:shadow-sky-600/20 fill-mode-backwards">
      <div className="flex gap-2 items-center">
        <GitBranch size={16} />
        <h1 className="text-md">{name}</h1>
      </div>
      <div className="flex h-full">
        <span className="text-xs text-slate-400 leading-relaxed">
          {description}
        </span>
      </div>
      <div className="flex w-full h-[1px] bg-gradient-to-r from-slate-800 "></div>
      <div className="flex gap-2 items-center">
        <Code2 size={16} className="text-slate-500" />
        <span className="text-sm text-slate-500">{language}</span>
      </div>

      <div className="absolute h-full w-[1px] bg-gradient-to-t from-transparent via-slate-800 via-5% to-transparent right-0 top-0"></div>
      <div className="absolute h-full w-[1px] bg-gradient-to-t from-transparent via-slate-800 via-5% to-transparent left-0 top-0"></div>
    </div>
  );
};
