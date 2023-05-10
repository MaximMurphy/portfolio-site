"use client";

import { Icon } from "@iconify-icon/react";

export default function Skills() {
  return (
    <section className="w-full flex flex-col text-center lg:text-start text-softblue-400 text-2xl tracking-wider p-12 py-24 bg-blue-950 gap-12">
      <h1 className="text-white underline font-bold text-center">Skills</h1>
      <div className="flex flex-col justify-between font-medium px-12 gap-16 lg:px-80 lg:flex-row">
        <div className="flex flex-col gap-8 ">
          <h1 className="text-slate-300 font-bold">Front End Technologies</h1>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>Javascript</p>
            <Icon icon="simple-icons:javascript" />
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>ReactJS</p>
            <Icon icon="simple-icons:react" />
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>NextJS</p>
            <Icon icon="simple-icons:nextdotjs" />
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>HTML</p>
            <Icon icon="simple-icons:html5" />
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>CSS</p>
            <Icon icon="simple-icons:css3" />
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>Tailwind</p>
            <Icon icon="simple-icons:tailwindcss" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-slate-300 font-bold">Back End Technologies</h1>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>NodeJS</p>
            <Icon icon="simple-icons:nodedotjs" />
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>Firebase</p>
            <Icon icon="simple-icons:firebase" />
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>Java</p>
            <Icon icon="mdi:language-java" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-slate-300 font-bold">Other</h1>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>Git</p>
            <Icon icon="simple-icons:git" />
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>Typescript</p>
            <Icon icon="simple-icons:typescript" />
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>ThreeJS</p>
            <Icon icon="simple-icons:threedotjs" />
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-normal">
            <p>P5</p>
            <Icon icon="simple-icons:p5dotjs" />
          </div>
        </div>
      </div>
    </section>
  );
}
