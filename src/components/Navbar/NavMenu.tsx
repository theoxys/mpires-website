/* eslint-disable react/jsx-no-comment-textnodes */
const baseStyle =
  "text-slate-400 hover:text-slate-200 transition-all uppercase tracking-widest font-light text-sm";

export const NavMenu = () => {
  return (
    <div className="flex gap-6 h-full items-center">
      <a href="#" className={baseStyle}>
        // About
      </a>
      <a href="#" className={baseStyle}>
        // Projects
      </a>
      <a href="#" className={baseStyle}>
        // Articles
      </a>
      <a href="#" className={baseStyle}>
        // Contact
      </a>
    </div>
  );
};
