// import About from "@/Components/About";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import HomePage from "@/Components/HomePage";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import { FloatingDock } from "@/Components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconHome,
  IconCode,
  IconUser,
  IconFileCv,
  IconFiles,
} from "@tabler/icons-react";

export default function Home() {
  const links = [
    {
      link: "home",
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      link: "about",
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      link: "skill",
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      link: "project",
      title: "Projects",
      icon: (
        <IconFiles className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      link: "",
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/rugveddhorje/",
    },

    {
      link: "",
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/DhorjeRugved",
    },
    {
      link: "",
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/RugvedDhorje",
    },
  ];
  return (
    <>
      <HomePage />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <div className="fixed z-50 bottom-5 w-full flex justify-center">
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>
    </>
  );
}
