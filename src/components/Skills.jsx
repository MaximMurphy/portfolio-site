"use client";

import { Icon } from "@iconify-icon/react";

export default function Skills() {
  return (
    <section className="mt-8 px-24 font-semibold tracking-wider">
      <h1 className="text-cyan-950 text-lg flex justify-start mb-2">SKILLS</h1>
      <div className="grid grid-cols-4 justify-items-center bg-offwhite-600 rounded-xl border border-offwhite-800 text-cyan-800 text-2xl font-semibold tracking-wider py-12 px-8 gap-12">
        <div className="flex flex-row gap-4 justify-center lg:justify-normal">
          <p>ReactJS</p>
          <Icon icon="simple-icons:react" />
        </div>
        <div className="flex flex-row gap-4 justify-center lg:justify-normal">
          <p>NextJS</p>
          <Icon icon="simple-icons:nextdotjs" />
        </div>
        <div className="flex flex-row gap-4 justify-center lg:justify-normal">
          <p>Typescript</p>
          <Icon icon="simple-icons:typescript" />
        </div>
        <div className="flex flex-row gap-4 justify-center lg:justify-normal">
          <p>Tailwind</p>
          <Icon icon="simple-icons:tailwindcss" />
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
          <p>Javascript</p>
          <Icon icon="simple-icons:javascript" />
        </div>
        <div className="flex flex-row gap-4 justify-center lg:justify-normal">
          <p>NodeJS</p>
          <Icon icon="simple-icons:nodedotjs" />
        </div>
        <div className="flex flex-row gap-4 justify-center lg:justify-normal">
          <p>Java</p>
          <Icon icon="mdi:language-java" />
        </div>
        <div className="flex flex-row gap-4 justify-center lg:justify-normal">
          <p>Firebase</p>
          <Icon icon="simple-icons:firebase" />
        </div>
        <div className="flex flex-row gap-4 justify-center lg:justify-normal">
          <p>Git</p>
          <Icon icon="simple-icons:git" />
        </div>
        <div className="flex flex-row gap-4 justify-center lg:justify-normal">
          <p>Jest</p>
          <Icon icon="simple-icons:jest" />
        </div>
      </div>
    </section>
  );
}
