"use client";

import { Icon } from "@iconify-icon/react";

import Image from "next/image";
import Link from "next/link";

export default function projects() {
  return (
    <div className="bg-gradient-to-b from-softblue-400 to-teal-900/50 w-full flex flex-col items-center text-white font-bold tracking-wider px-8 pb-24 pt-8 lg:pt-0 gap-4 lg:gap-12">
      <h1 className="underline decoration-2 underline-offset-4 mb-12 text-3xl">
        Projects
      </h1>
      <section className="min-w-full flex flex-col lg:flex-row items-center justify-between lg:px-20 gap-8">
        <div className="w-fit h-full bg-white/20 p-2 rounded-xl flex items-center justify-center animate-shift1">
          <Image
            src="/projectImages/ReviewYourFood/cover.png"
            alt="Review Your Food"
            width={1500}
            height={740}
            quality={100}
            priority
            className="w-full h-full rounded-lg lg:rounded-xl"
          />
        </div>
        <div className="w-[320px] lg:w-96 bg-white/20 p-8 rounded-xl flex flex-col items-start justify-center gap-8">
          <h1 className="text-2xl ">Review Your Food</h1>
          <div className="flex flex-col items-start gap-2">
            <p>ABOUT</p>
            <p>
              A web application for users to review food from a restaraunt and
              share with others. Developed using NextJS for frontend and
              Firebase for backend
            </p>
            <div className="flex flex-row gap-2 mt-2">
              <Link
                href="https://github.com/MaximMurphy/recipe-app"
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
                href="https://review-your-food.vercel.app/"
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
      </section>
      <hr class="h-px my-12 w-2/3 bg-white border-0 " />
      <section className="min-w-full flex flex-col lg:flex-row items-center justify-between lg:px-20 gap-8 mb-24">
        <div className="w-[320px] lg:w-96 bg-white/20 p-8 rounded-xl flex flex-col items-start justify-center gap-8 order-2 lg:order-1 ">
          <h1 className="text-2xl ">GoDigital</h1>
          <div className="flex flex-col items-start gap-2">
            <p>ABOUT</p>
            <p>
              A website for my side electronic music project, GoDigital. Built
              using Javascript, HTML, and CSS. Background animations created
              using{" "}
              <Link
                href="https://hydra.ojack.xyz/docs/#/"
                target="_blank"
                rel="noopener noreferrer"
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
        <div className="w-fit h-fit bg-white/20 p-2 rounded-xl flex items-center justify-center order-1 lg:order-2 animate-shift2">
          <Image
            src="/projectImages/GoDigital/cover.png"
            alt="GoDigital"
            width={1500}
            height={740}
            quality={100}
            priority
            className="w-full h-full rounded-lg lg:rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}
