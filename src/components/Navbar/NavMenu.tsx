/* eslint-disable react/jsx-no-comment-textnodes */
const baseStyle =
  "text-slate-400 hover:text-slate-200 transition-all uppercase tracking-widest font-light text-xs";

export const NavMenu = () => {
  return (
    <div className="hidden gap-6 h-full items-center md:flex ">
      <a href="#" className={baseStyle}>
        About
      </a>
      <a href="#" className={baseStyle}>
        Projects
      </a>
      <a href="#" className={baseStyle}>
        Articles
      </a>
      <a href="#" className={baseStyle}>
        Contact
      </a>
    </div>
  );
};
