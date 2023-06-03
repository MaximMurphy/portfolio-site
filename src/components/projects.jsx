import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";

const projects = [
  {
    name: "WAVFORM",
    description:
      "An e-commerce site with a focus on selling Sound Packs and Synth Presets to be used in electronic music production. Built with Next.js 13.4, Typescript & Tailwind.",
    image: "/projectImages/wavform.gif",
    cover: "/projectImages/wavformcover.png",
    logo: "/projectImages/soundpack-storefront.png",
    liveDemo: "https://wavform.vercel.app/",
    repo: "https://github.com/MaximMurphy/soundpack-storefront",
  },
  {
    name: "GoDigital",
    description:
      "A website for my side electronic music project, GoDigital. Built using JS, HTML, & CSS. Background animations created using Hydra Video Synth",
    image: "/projectImages/godigital.gif",
    cover: "/projectImages/godigitalcover.png",
    logo: "/projectImages/GoDigital.png",
    liveDemo: "https://godigitalgo.netlify.app/",
    repo: "https://github.com/MaximMurphy/GoDigital",
  },
  {
    name: "Review Your Food",
    description:
      "A web application for users to review food from a restaurant and share with others. Developed using NextJS for frontend and Firebase for backend.",
    image: "/projectImages/reviewyourfood.gif",
    cover: "/projectImages/reviewyourfoodcover.png",
    logo: "/projectImages/recipe-app.png",
    liveDemo: "https://review-your-food.vercel.app/",
    repo: "https://github.com/MaximMurphy/recipe-app",
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageSource = isHovered ? project.image : project.cover;

  return (
    <div
      className="hover:cursor-cell h-[34rem] lg:h-[36rem] w-[320px] lg:w-96 flex flex-col items-start bg-offwhite-600 border-2 border-offwhite-800 text-cyan-950 rounded-xl p-8 gap-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-2xl font-semibold">{project.name}</h1>
      <div className="w-fit h-full peer">
        <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageSource}
            alt={project.name}
            width={800}
            height={385}
            quality={100}
            priority
            className="w-full h-fit rounded-lg border border-offwhite-900"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start gap-2 peer-hover:text-cyan-700">
        <Image
          src={project.logo}
          alt="logo"
          width={192}
          height={192}
          quality={100}
          priority
          className="w-8 h-8"
        />
        <p className="text-justify lg:text-lg">{project.description}</p>
        <div className="flex flex-row gap-2 mt-2 text-cyan-950 font-bold">
          <Link href={project.repo} target="_blank" rel="noopener noreferrer">
            <Icon
              icon="simple-icons:github"
              className="text-2xl hover:drop-shadow-2xl hover:scale-110"
            />
          </Link>
          <p>·</p>
          <Link
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="mdi:external-link"
              className="text-2xl hover:drop-shadow-2xl hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <div
    id="projects"
    className="bg-offwhite-400 w-full flex flex-col text-teal-800 tracking-wider px-8 pt-8 gap-4 lg:gap-12"
  >
    <h1 className="italic font-serif text-[3.25rem] lg:text-9xl font-bold text-end tracking-widest mb-8 lg:px-20">
      <span className="text-blue-950">P</span>
      <span className="text-cyan-950 -ml-2 lg:-ml-5">R</span>
      <span className="text-blue-950 -ml-2 lg:-ml-6">O</span>
      <span className="text-cyan-950 -ml-2 lg:-ml-4">J</span>
      <span className="text-blue-950 -ml-2 lg:-ml-5">E</span>
      <span className="text-cyan-950 -ml-2 lg:-ml-5">C</span>
      <span className="text-blue-950 -ml-[.60rem] lg:-ml-5">T</span>
      <span className="text-cyan-950 -ml-2 lg:-ml-4">S</span>
    </h1>
    <div className="flex flex-col justify-center lg:flex-row gap-8 lg:gap-4 2xl:gap-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
