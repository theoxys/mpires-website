import { Icons } from "../ui/icons";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
  return (
    <nav className="flex w-full h-14 fixed backdrop-blur-lg bg-slate-900/30 top-0 border-b border-slate-800 justify-center z-50">
      <div className="flex min-h-full items-center max-w-7xl w-full justify-between">
        <Icons.logo fill="white" height={24} />
        <NavMenu />
      </div>
    </nav>
  );
};
