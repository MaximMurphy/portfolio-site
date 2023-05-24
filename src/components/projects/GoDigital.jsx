import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify-icon/react";

export default function GoDigital() {
  return (
    <section className="min-w-full flex flex-col lg:flex-row items-center justify-between lg:px-20 gap-8 mb-24">
      <div className="w-[320px] lg:w-96 bg-stone-400/20 p-8 rounded-xl backdrop-blur border-solid border border-white/20 shadow-xl flex flex-col items-start justify-center gap-8 order-2 lg:order-1 ">
        <h1 className="text-2xl ">GoDigital</h1>
        <div className="flex flex-col items-start gap-2">
          <p>ABOUT</p>
          <p>
            A website for my side electronic music project, GoDigital. Built
            using Javascript, HTML, and CSS. Background animations created using{" "}
            <Link
              href="https://hydra.ojack.xyz/docs/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-950"
            >
              Hydra Video Synth
            </Link>
          </p>
          <div className="flex flex-row gap-2 mt-2">
            <Link
              href="https://github.com/MaximMurphy/GoDigital"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="simple-icons:github"
                className="text-2xl hover:drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <p>·</p>
            <Link
              href="https://godigitalgo.netlify.app/"
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
      <div className="w-fit h-fit bg-white/20 p-2 rounded-xl backdrop-blur border-solid border border-white/20 shadow-xl flex items-center justify-center order-1 lg:order-2 animate-shiftUp1 lg:animate-shiftSide2">
        <Link
          href="https://godigitalgo.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/projectImages/GoDigital/cover.png"
            alt="GoDigital"
            width={1500}
            height={740}
            quality={100}
            priority
            className="w-full h-full rounded-lg lg:rounded-xl"
          />
        </Link>
      </div>
    </section>
  );
}
