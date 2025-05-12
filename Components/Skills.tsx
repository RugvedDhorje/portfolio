"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import StarsCanvas from "./StarCanvas";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <>
      <Element name="skill">
        <BackgroundBeamsWithCollision fromColor="#1a1a1a" toColor="#0a0a0a">
          {/* Background Stars Layer */}
          <div className="absolute inset-0 z-0">
            <StarsCanvas />
          </div>
          <div className="w-full h-screen">
            <div className="max-w-screen-2xl mx-auto">
              <h1 className="text-center text-white text-[44px] font-bold mt-12">
                <span className="relative inline-block">
                  <span className="relative z-10">Skills</span>
                  <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-teal-400 rounded-full z-0"></span>
                </span>
              </h1>
              <p className="text-center text-white text-[24px] font-light mt-3">
                Dive into a collection of projects where creativity meets
                code—crafted with curiosity and built for impact.
              </p>
              <div className="p-[1px] rounded-lg bg-gradient-to-r from-cyan-600 to-teal-400 my-6">
                <div className="p-6 rounded-lg bg-[#09090B]">
                  <h2 className="text-[26px] pb-2 font-semibold text-white">
                    Frontend
                  </h2>
                  <Container arr={Frontend} />
                </div>
              </div>
              <div className="p-[1px] rounded-lg bg-gradient-to-r from-cyan-600 to-teal-400 my-6">
                <div className="p-6 rounded-lg bg-[#09090B]">
                  <h2 className="text-[26px] pb-2 font-semibold text-white">
                    Backend
                  </h2>
                  <Container arr={Backend} />
                </div>
              </div>
              <div className="p-[1px] rounded-lg bg-gradient-to-r from-cyan-600 to-teal-400 my-6">
                <div className="p-6 rounded-lg bg-[#09090B]">
                  <h2 className="text-[26px] pb-2 font-semibold text-white">
                    Tools
                  </h2>
                  <Container arr={Tools} />
                </div>
              </div>

              {/* <div className="p-6 border-[1px] rounded-lg">
            <h2 className="text-[26px] pb-2 font-semibold text-white">
              Frontend 
            </h2>
            <div>
              <span className="flex flex-wrap gap-3 mt-2 mb-5">
                {Frontend.map((f, index) => (
                  <div
                    key={index}
                    className="text-[18px] font-medium px-5 py-2 bg-gray-700 text-gray-200 rounded-full flex"
                  >
                    <p>{f.icon}</p>
                    <p>{f.title}</p>
                  </div>
                ))}
              </span>
            </div>
          </div> */}
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </Element>
    </>
  );
};

export default Skills;

type SkillItem = {
  icon: React.ReactNode;
  title: string;
};

type ContainerProps = {
  arr: SkillItem[];
};

const Container: React.FC<ContainerProps> = ({ arr }) => {
  return (
    <div>
      <span className="flex flex-wrap gap-3 mt-2 mb-5">
        {arr.map((f, index) => (
          <div
            key={index}
            className="text-[18px] font-medium px-5 py-2 bg-gray-700 text-gray-200 rounded-full flex items-center gap-2"
          >
            <p>{f.icon}</p>
            <p>{f.title}</p>
          </div>
        ))}
      </span>
    </div>
  );
};

const Frontend = [
  {
    tech: "Frontend",
    title: "React.js",
    icon: "⚛️",
  },
  {
    tech: "Frontend",
    title: "NextJS",
    icon: "▲",
  },
  {
    tech: "Frontend",
    title: "JavaScript",
    icon: "",
  },
  {
    tech: "Frontend",
    title: "TailwindCSS",
    icon: "💠",
  },
  {
    tech: "Frontend",
    title: "Shadcn",
    icon: "",
  },
  {
    tech: "Frontend",
    title: "HTML",
    icon: "🌐",
  },
  {
    tech: "Frontend",
    title: "CSS",
    icon: "🎨",
  },
];

const Backend = [
  {
    tech: "Backend",
    title: "Node.js",
    icon: "🟢",
  },
  {
    tech: "Backend",
    title: "Express.js",
    icon: "🚂",
  },
  {
    tech: "Backend",
    title: "MongoDB",
    icon: "🍃",
  },
  {
    tech: "Backend",
    title: "Mongoose",
    icon: "🍄",
  },
  {
    tech: "Backend",
    title: "PostgresSQL",
    icon: "🐘",
  },
  {
    tech: "Backend",
    title: "SQL",
    icon: "📊",
  },
  {
    tech: "Backend",
    title: "Prisma",
    icon: "🌱",
  },
  {
    tech: "Backend",
    title: "JWT",
    icon: "🛡️",
  },
  {
    tech: "Backend",
    title: "ZOD",
    icon: "🧪",
  },
  {
    tech: "Backend",
    title: "Cloudinary",
    icon: "☁️",
  },
  {
    tech: "Backend",
    title: "Firebase",
    icon: "🔥",
  },
];
const Tools = [
  {
    tech: "Tools",
    title: "VSCode",
    icon: "👨‍💻",
  },
  {
    tech: "Tools",
    title: "Git",
    icon: "🔄",
  },
  {
    tech: "Tools",
    title: "Github",
    icon: "🐙",
  },
  {
    tech: "Tools",
    title: "Postman",
    icon: "📬",
  },
  {
    tech: "Tools",
    title: "MongoDB Compass",
    icon: "🧭",
  },
  {
    tech: "Tools",
    title: "Docker",
    icon: "🐳",
  },
];
