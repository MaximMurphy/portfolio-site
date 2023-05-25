import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify-icon/react";

export default function GoDigital() {
  return (
    <div className="h-[34rem] w-[320px] lg:w-96 flex flex-col items-start bg-offwhite-600 border border-offwhite-800 text-cyan-800 rounded-xl p-8 gap-8">
      <h1 className="text-2xl text-blue-950">GoDigital</h1>
      <div className="w-fit h-fit peer">
        <Link
          href="https://godigitalgo.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/projectImages/GoDigital/godigital.gif"
            alt="GoDigital"
            width={800}
            height={385}
            quality={100}
            priority
            className="w-full h-full rounded-lg"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start gap-2 peer-hover:text-orange-600">
        <Image
          src="/projectImages/GoDigital/godigitalfavicon.png"
          alt="GoDigital"
          width={192}
          height={192}
          quality={100}
          priority
          className="w-8 h-8"
        />
        <p className="text-justify">
          A website for my side electronic music project, GoDigital. Built using
          Javascript, HTML, and CSS. Background animations created using{" "}
          <Link
            href="https://hydra.ojack.xyz/docs/#/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-950"
          >
            Hydra Video Synth
          </Link>
        </p>
        <div className="flex flex-row gap-2 mt-2 text-blue-950">
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
  );
}
