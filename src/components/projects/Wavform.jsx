import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify-icon/react";

export default function Wavform() {
  return (
    <section className="min-w-full flex flex-col lg:flex-row items-center justify-between lg:px-20 gap-8 mb-24">
      <div className="w-[320px] lg:w-96 bg-white/20 p-8 rounded-xl backdrop-blur border-solid border border-white/20 shadow-xl flex flex-col items-start justify-center gap-8 order-2 lg:order-1 ">
        <h1 className="text-2xl ">WAVFORM</h1>
        <div className="flex flex-col items-start gap-2">
          <p>ABOUT</p>
          <p>
            An commerce site with a focus of selling Sound Packs and Synth
            Presets to be used in electronic music production. Built with
            Typescript and Tailwind using the new App Router and Server
            Coponents in Next.js 13.4
          </p>
          <div className="flex flex-row gap-2 mt-2">
            <Link
              href="https://github.com/MaximMurphy/soundpack-storefront"
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
              href="https://wavform.vercel.app/"
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
          href="https://wavform.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/projectImages/Wavform/cover.png"
            alt="Wavform"
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