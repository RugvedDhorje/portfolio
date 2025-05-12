"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import StarsCanvas from "./StarCanvas";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { img } from "motion/react-client";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <>
      <Element name="project">
        <BackgroundBeamsWithCollision>
          {/* Background Stars Layer */}
          <div className="absolute inset-0 z-0">
            <StarsCanvas />
          </div>
          <div className="h-screen w-full">
            <div className="max-w-screen-2xl mx-auto">
              <h1 className="text-center text-white text-[44px] font-bold mt-12">
                <span className="relative inline-block">
                  <span className="relative z-10">My Work</span>
                  <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-teal-400 rounded-full z-0"></span>
                </span>
              </h1>
              <p className="text-center text-white text-[24px] font-light mt-3">
                Dive into a collection of projects where creativity meets
                code—crafted with curiosity and built for impact.
              </p>
              <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                  items={testimonials}
                  direction="right"
                  speed="normal"
                />
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </Element>
    </>
  );
};

export default Projects;
const testimonials = [
  {
    id: 1,
    img: "/projects/foodPanda.png",
    description:
      "A sleek food delivery UI concept with intuitive navigation, modern design, and responsive layout.",
    title: "FOOD PANDA",
    tech: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    img: "/projects/myvendex.png",
    description:
      "Corporate landing page design for a tech agency, featuring clean UI, service highlights, and responsive layout.",
    title: "MYVENDEX",
    tech: [
      "Next.js",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "shadcn",
      "JWT",
    ],
  },
  {
    id: 3,
    img: "/projects/minimalindia.png",
    description:
      "A Marketing Agency website showcasing creative, tech, and filmmaking services with smooth animations and minimal design.",
    title: "MINIMALINDIA",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Framer",
      "AceternityUI",
    ],
  },
  {
    id: 4,
    img: "/projects/sagarGases.png",
    description:
      "Responsive company website for an industrial gas supplier, showcasing services, products, and certifications.",
    title: "SAGAR GASES",
    tech: ["React", "JavaScript", "TailwindCSS", "Framer", "HTML"],
  },
  {
    id: 5,
    img: "/projects/Netflix.png",
    description:
      "AI-powered movie recommendation app using GPT for smart suggestions and TMDB for real-time data.",
    title: "MOVIEFLIX-GPT",
    tech: ["React", "JavaScript", "TailwindCSS", "FireBase", "HTML", "CSS"],
  },
  {
    id: 6,
    img: "/projects/travode.png",
    description:
      "Travel website UI concept with destination highlights, booking sections, and a modern, responsive design.",
    title: "TRAVODE",
    tech: ["React", "JavaScript", "HTML", "TailwindCSS"],
  },
  {
    id: 7,
    img: "/projects/youtube.png",
    description:
      "A responsive YouTube-inspired video browsing app built with React, featuring dynamic search and video playback using the RapidAPI.",
    title: "VIDEOTUBE",
    tech: ["React", "JavaScript", "HTML", "TailwindCSS"],
  },
];
