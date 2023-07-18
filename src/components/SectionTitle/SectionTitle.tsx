import { cn } from "@/lib/utils";
import { FC } from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const SectionTitle: FC<SectionTitleProps> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={cn(
        "text-slate-200 my-6 font-light text-lg tracking-widest z-10 uppercase w-full h-16 self-baseline text-center",
        className
      )}
    >
      {children}
    </h1>
  );
};
