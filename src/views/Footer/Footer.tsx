import { FooterColumn } from "@/components/FooterColumn/FooterColumn";
import { footerColumns } from "@/content/contents";
import { LucideGithub } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex w-full min-h-[350px] mt-40 border-t border-slate-900 relative justify-center bg-black">
      <div className="absolute w-[80rem] h-[1px] bg-gradient-to-r from-transparent via-slate-600 to-transparent top-0"></div>

      <div className="flex gap-4 w-full max-w-7xl py-10 min-h-full justify-between">
        <div className="flex flex-col gap-4 w-[250px] justify-between min-h-full">
          <h2 className="text-sm text-slate-400">
            Based in Brazil, Itajubá - Minas Gerais
          </h2>

          <div className="flex gap-2 py-2 px-4 bg-slate-900/50 rounded-xl items-center">
            <LucideGithub size={26} className="text-slate-500" />
            <span className="text-xs text-slate-500">
              This portfolio is open source and available for community!
            </span>
          </div>

          <span className="text-sm text-slate-500">
            MIT License - 2023 | Matheus Pires.
          </span>
        </div>

        {footerColumns.map((column, index) => (
          <FooterColumn
            columnName={column.columnName}
            links={column.links}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
