import { Icon } from "@iconify-icon/react";

export default function Skills() {
  return (
    <section id="about" className="pt-12 pb-12 px-10 lg:px-24 tracking-wider">
      <h1 className="text-cyan-950 text-lg flex justify-start mb-2 font-semibold underline">
        SKILLS
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center bg-gradient-to-b from-blue-950/90 to-cyan-950/90 rounded-xl border-2 border-blue-950 text-offwhite-400 text-base lg:text-xl tracking-wider py-8 lg:py-10 px-4 lg:px-2 gap-10 lg:gap-12">
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>ReactJS</p>
          <Icon className="mt-1" icon="simple-icons:react" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>NextJS</p>
          <Icon className="mt-1" icon="simple-icons:nextdotjs" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>Typescript</p>
          <Icon className="mt-1" icon="simple-icons:typescript" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>Tailwind</p>
          <Icon className="mt-1" icon="simple-icons:tailwindcss" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>HTML</p>
          <Icon className="mt-1" icon="simple-icons:html5" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>CSS</p>
          <Icon className="mt-1" icon="simple-icons:css3" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>Javascript</p>
          <Icon className="mt-1" icon="simple-icons:javascript" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>NodeJS</p>
          <Icon className="mt-1" icon="simple-icons:nodedotjs" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>Java</p>
          <Icon className="mt-1" icon="mdi:language-java" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>Firebase</p>
          <Icon className="mt-1" icon="simple-icons:firebase" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>Git</p>
          <Icon className="mt-1" icon="simple-icons:git" />
        </div>
        <div className="flex flex-row gap-1 lg:gap-2">
          <p>Jest</p>
          <Icon className="mt-1" icon="simple-icons:jest" />
        </div>
      </div>
    </section>
  );
}
