"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import StarsCanvas from "./StarCanvas";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <BackgroundBeamsWithCollision>
        {/* Background Stars Layer */}
        <div className="absolute inset-0 z-0">
          <StarsCanvas />
        </div>
        <div className="h-screen w-full">
          <div className="max-w-screen-2xl mx-auto">
            <h1 className="text-center text-white text-[44px] font-bold mt-12">
              <span className="relative inline-block">
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-teal-400 rounded-full z-0"></span>
              </span>
            </h1>
            <p className="text-center text-white text-[24px] font-light mt-3 mb-6">
              Let’s team up! Whether it’s a new idea or a creative project.
            </p>
            <div className="w-full flex flex-col gap-y-7 justify-center items-center pt-6">
              <div className="w-1/3 p-[1px] rounded-xl bg-gradient-to-r from-cyan-600 to-teal-400">
                <div className="border border-transparent p-6 rounded-xl flex gap-x-6 bg-[#09090B]">
                  <div className="h-14 w-14 bg-gradient-to-r from-cyan-600 to-teal-400 rounded-full flex justify-center items-center ml-5">
                    <IconMail className="text-white" stroke={2} />
                  </div>
                  <div className="text-white">
                    <h4 className="text-[20px] font-semibold">Email</h4>
                    <p className="text-[16px]">rdhorje67@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="w-1/3 p-[1px] rounded-xl bg-gradient-to-r from-cyan-600 to-teal-400">
                <div className="border border-transparent p-6 rounded-xl flex gap-x-6 bg-[#09090B]">
                  <div className="h-14 w-14 bg-gradient-to-r from-cyan-600 to-teal-400 rounded-full flex justify-center items-center ml-5">
                    <IconMail className="text-white" stroke={2} />
                  </div>
                  <div className="text-white">
                    <h4 className="text-[20px] font-semibold">Location</h4>
                    <p className="text-[16px]">Pune , Maharashtra</p>
                  </div>
                </div>
              </div>
              <div className="w-1/3 p-[1px] rounded-xl bg-gradient-to-r from-cyan-600 to-teal-400">
                <div className="border border-transparent p-6 rounded-xl flex gap-x-6 bg-[#09090B]">
                  <div className="h-14 w-14 bg-gradient-to-r from-cyan-600 to-teal-400 rounded-full flex justify-center items-center ml-5">
                    <IconMail className="text-white" stroke={2} />
                  </div>
                  <div className="text-white">
                    <h4 className="text-[20px] font-semibold">Phone</h4>
                    <p className="text-[16px]">+91 8855993267</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#09090B] absolute bottom-0 py-10">
            <div className="max-w-screen-2xl mx-auto flex justify-between">
              <div className="w-1/2  pl-10 text-white">
                <h2 className="text-[26px] font-bold bg-gradient-to-r from-cyan-600 to-teal-400 bg-clip-text text-transparent">
                  Rugved Dhorje
                </h2>

                <p className="text-[14px] font-normal w-1/2 text-slate-500">
                  Full Stack Developer Crafting fast, scalable, and
                  user-friendly web applications using modern technologies
                </p>
              </div>
              <div className="w-1/2 flex flex-col justify-end  items-end text-center text-slate-500">
                <p className="text-[16px]">Made with NextJS</p>
                <p className="text-[12px]">
                  © 2025 Rugved Dhorje. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </Element>
  );
};

export default Contact;
