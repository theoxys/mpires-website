export interface FooterLinkProps {
  href: string;
  name: string;
}

export interface FooterColumnProps {
  columnName: string;
  links: FooterLinkProps[];
}

export const FooterColumn = ({ columnName, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xs text-slate-500 uppercase tracking-widest">
        {columnName}
      </h1>

      {links.map((link, index) => (
        <a href={link.href} className="text-sm text-slate-400" key={index}>
          {link.name}
        </a>
      ))}
    </div>
  );
};
