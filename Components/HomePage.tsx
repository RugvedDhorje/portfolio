import React from "react";
import { FloatingDock } from "@/Components/ui/floating-dock";
import Image from "next/image";
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
import { BackgroundBeamsWithCollision } from "@/Components/ui/background-beams-with-collision";
import StarsCanvas from "./StarCanvas";

const HomePage = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconFiles className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <>
      <BackgroundBeamsWithCollision>
        {/* Background Stars Layer */}
        <div className="absolute inset-0 z-0">
          <StarsCanvas />
        </div>

        {/* Main Content */}
        <div className="relative w-full min-h-screen z-10 flex items-center justify-center">
          <div className="w-full max-w-screen-2xl mx-auto flex flex-col items-center justify-center">
            {/* Header and Text Section */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6">
              {/* Left Text */}
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col">
                  <h1 className="text-[60px] text-white font-bold font-serif py-3">
                    Hii, I'm Rugved Dhorje
                  </h1>
                  <p className="text-white text-[30px] font-serif leading-none pb-4">
                    Crafting fast, scalable, and user-friendly web applications
                    using modern technologies
                  </p>
                  <div className="flex gap-4 my-6 flex-wrap">
                    <button className="px-5 py-2 text-[16px] font-medium text-white bg-purple-900 rounded-lg">
                      My Work
                    </button>
                    <button className="px-5 py-2 text-[16px] font-medium text-white bg-purple-900 rounded-lg">
                      Contact me
                    </button>
                    <button className="px-5 py-2 text-[16px] font-medium text-white bg-purple-900 rounded-lg">
                      Resume
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
                <img
                  src="/passport photo.jpg"
                  alt="Profile"
                  className="h-[400px] w-[400px] object-contain clip-polygon shadow-xl"
                />
              </div>
            </div>

            {/* Floating Dock */}
            <div className="absolute bottom-5 w-full flex justify-center">
              <FloatingDock mobileClassName="translate-y-20" items={links} />
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default HomePage;
