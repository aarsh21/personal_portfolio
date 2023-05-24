import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Article Digester",
    description:
      "Article Digester is a web app that summarizes articles using Redux Toolkit, Vite, React, and Tailwind CSS for a smooth user experience.",
    image: "/lol.png",
    github: "https://github.com/aarsh21/Aritcle-Digester",
    link: "https://articledigester.netlify.app/",
  },
  {
    name: "Twitter Clone",
    description:
      "Twitter Clone is made with TRPC, Prisma, Tailwind CSS, and PlanetScale.",
    image: "/tweetclone.png",
    github: "https://github.com/aarsh21/Twitter-Clone",
    link: "https://twitter-seven-topaz.vercel.app/",
  },
  {
    name: "Gym 1o1",
    description:
      "Gym1o1 built using Vite, React, and Tailwind CSS. The project aims to create a modern and responsive website for a gym or fitness center.",
    image: "/gym1o1.png",
    github: "https://github.com/aarsh21/gym1o1",
    link: "https://gym1o1.pages.dev/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-4xl font-bold text-center">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="shadow-xl rounded-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="mb-6 text-4xl font-bold">{project.name}</h1>
                    <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row space-x-4 align-bottom">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="transition-transform cursor-pointer hover:-translate-y-1"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="transition-transform cursor-pointer hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
