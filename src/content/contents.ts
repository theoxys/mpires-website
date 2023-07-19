import { FooterColumnProps } from "@/components/FooterColumn/FooterColumn";
import { Icons } from "@/components/ui/icons";
import DevopessLogo from "../../public/devopness.jpg";
import IfoodLogo from "../../public/ifood.jpg";
import MoviLogo from "../../public/movidesk.jpg";
import T4hLogo from "../../public/t4h.jpg";

export const professionalExperience = [
  {
    companyName: "Ifood",
    workingDates: "mar 2022 - mar 2023",
    description: "Software engineer at the biggest food tech in latin america.",
    logo: IfoodLogo,
  },
  {
    companyName: "Movidesk",
    workingDates: "mar 2022 - mar 2023",
    description:
      "Software engineer at one of the largest omnichannel communication and service platforms aimed at small and medium-sized businesses.",
    logo: MoviLogo,
  },
  {
    companyName: "Tech4Humans",
    workingDates: "mar 2022 - mar 2023",
    description:
      "Software Engineer at a work wutomations hub for customer service.",
    logo: T4hLogo,
  },
  {
    companyName: "Devopness",
    workingDates: "mar 2022 - mar 2023",
    description:
      "Software Engineer at a platform for application deployment and infrastructure management on multiple clouds.",
    logo: DevopessLogo,
  },
];

export const stacks = [
  {
    name: "ReactJs",
    icon: Icons.react,
  },
  {
    name: "Javascript",
    icon: Icons.javascript,
  },
  {
    name: "Next13",
    icon: Icons.next,
  },
  {
    name: "Typescript",
    icon: Icons.typescript,
  },
  {
    name: "TailwindCSS",
    icon: Icons.tailwind,
  },
  {
    name: "NodeJS",
    icon: Icons.node,
  },
  {
    name: "Docker",
    icon: Icons.docker,
  },
  {
    name: "Amazon S3",
    icon: Icons.aws,
  },
  {
    name: "Vercel",
    icon: Icons.vercel,
  },
  {
    name: "Github",
    icon: Icons.github,
  },
  {
    name: "Jest",
    icon: Icons.jest,
  },
  {
    name: "Redis",
    icon: Icons.redis,
  },
  {
    name: "Storybook",
    icon: Icons.storybook,
  },
  {
    name: "Webpack",
    icon: Icons.webpack,
  },
];

export const footerColumns: FooterColumnProps[] = [
  {
    columnName: "Build with",
    links: [
      {
        name: "NextJS 13",
        href: "https://nextjs.org",
      },
      {
        name: "Typescript",
        href: "https://www.typescriptlang.org",
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com",
      },
      {
        name: "Spline",
        href: "https://spline.design",
      },
    ],
  },

  {
    columnName: "My Social profiles",
    links: [
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/matheusfpires/",
      },
      {
        name: "Github",
        href: "https://github.com/theoxys",
      },
      {
        name: "Youtube",
        href: "https://www.youtube.com/@matheuspires-dev",
      },
    ],
  },

  {
    columnName: "For recruiters",
    links: [
      {
        name: "Download my Resume",
        href: "https://www.linkedin.com/in/matheusfpires/",
      },
    ],
  },
];
