"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/Components/ui/background-beams-with-collision";
import StarsCanvas from "./StarCanvas";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

const HomePage = () => {
  // const links = [
  //   {
  //     title: "Home",
  //     icon: (
  //       <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },

  //   {
  //     title: "About",
  //     icon: (
  //       <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  //   {
  //     title: "Skills",
  //     icon: (
  //       <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  //   {
  //     title: "Projects",
  //     icon: (
  //       <IconFiles className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  //   {
  //     title: "Resume",
  //     icon: (
  //       <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  //   {
  //     title: "Linkedin",
  //     icon: (
  //       <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },

  //   {
  //     title: "Twitter",
  //     icon: (
  //       <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  //   {
  //     title: "GitHub",
  //     icon: (
  //       <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  // ];
  return (
    <>
      <Element name="home">
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
                      Crafting fast, scalable, and user-friendly web
                      applications using modern technologies
                    </p>
                    <div className="flex gap-4 my-6 flex-wrap">
                      <Link
                        to="project"
                        smooth={true}
                        duration={500}
                        offset={-50} // Optional: adjusts scroll position
                        className="cursor-pointer text-white"
                      >
                        <button className="px-5 py-2 text-[16px] font-medium text-white bg-gradient-to-br from-cyan-700 to-teal-500 hover:bg-opacity-80 duration-200 rounded-lg">
                          My Work
                        </button>
                      </Link>
                      <Link
                        to="contact"
                        smooth={true}
                        duration={1000}
                        offset={-50} // Optional: adjusts scroll position
                        className="cursor-pointer text-white"
                      >
                        <button className="px-5 py-2 text-[16px] font-medium text-white bg-gradient-to-br from-cyan-700 to-teal-500 hover:bg-opacity-80 duration-200 rounded-lg">
                          Contact me
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = "/Rugved Dhorje-CV-8855993267.pdf"; // Path to your PDF
                          link.download = "Rugved_Dhorje-CV 8855993267.pdf"; // Optional: specify a download name
                          link.click();
                        }}
                        className="px-5 py-2 text-[16px] font-medium text-white bg-gradient-to-br from-cyan-700 to-teal-500 hover:bg-opacity-80 duration-200 rounded-lg"
                      >
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
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </Element>
    </>
  );
};

export default HomePage;
