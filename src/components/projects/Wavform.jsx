import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify-icon/react";

export default function Wavform() {
  return (
    <div className="h-[36rem] w-[320px] lg:w-96 flex flex-col items-start bg-offwhite-600 border-2 border-offwhite-800 text-cyan-950 rounded-xl p-8 gap-8">
      <h1 className="text-2xl font-semibold">WAVFORM</h1>
      <div className="w-fit h-fit peer">
        <Link
          href="https://wavform.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/projectImages/wavform.gif"
            alt="Wavform"
            width={800}
            height={385}
            quality={100}
            priority
            className="w-full h-full rounded-lg"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start gap-2 peer-hover:text-cyan-600">
        <Image
          src="/projectImages/soundpack-storefront.png"
          alt="Wavform"
          width={192}
          height={192}
          quality={100}
          priority
          className="w-8 h-8"
        />
        <p className="text-justify">
          An e-commerce site with a focus of selling Sound Packs and Synth
          Presets to be used in electronic music production. Built with Next.js
          13.4, Typescript & Tailwind.
        </p>
        <div className="flex flex-row gap-2 mt-2 text-cyan-950 font-bold">
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
  );
}
