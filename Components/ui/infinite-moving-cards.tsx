"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    img: string;
    description: string;
    tech: string[]; // array of tech stack items
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-5 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[350px] h-[500px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-2 py-2 md:w-[400px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] hover:scale-105 duration-200 "
            key={item.id}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <img
                src={item.img}
                alt="project images"
                className="rounded-t-lg"
              />

              <div className="relative z-20 mt-3 px-4 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-[20px] font-medium text-white">
                    {item.title}
                  </span>
                  <span className="text-[14px] leading-[1.6] font-normal text-neutral-400">
                    {item.description}
                  </span>
                  <span className="flex flex-wrap gap-1 mt-2 mb-5">
                    {item.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-[12px] font-medium px-3 py-1 bg-gray-700 text-gray-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
              <div className="w-full flex justify-center gap-5 absolute bottom-3">
                <button className="w-2/5 py-2 border-[1px] text-white font-medium rounded-lg flex justify-center gap-2 hover:bg-gray-800 duration-200">
                  <IconBrandGithub stroke={2} /> Code
                </button>
                <button className="w-2/5 py-2 font-medium bg-gradient-to-br from-cyan-700 to-teal-500 text-white rounded-lg flex justify-center gap-2">
                  <IconLink stroke={2} /> Demo
                </button>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
