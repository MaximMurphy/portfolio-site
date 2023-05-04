"use client";

import { Icon } from "@iconify-icon/react";

import Image from "next/image";
import Link from "next/link";

export default function projects() {
  return (
    <section className="bg-gradient-to-b from-softblue-400 to-teal-900/50 w-full flex flex-col items-center text-white font-bold tracking-wider px-12 lpb-24 pt-8 lg:pt-0 gap-4 lg:gap-12">
      <h1 className="underline decoration-2 underline-offset-4 mb-12 text-3xl">
        Projects
      </h1>
      <section className="min-w-full flex flex-col lg:flex-row items-center lg:items-start justify-between lg:px-24 gap-8">
        <Image
          src="/projectImages/ReviewYourFood/cover.png"
          alt="Review Your Food"
          width={1500}
          height={740}
          quality={100}
          priority
          className="w-[375px] h-[185px] lg:w-[750px] lg:h-[370px] rounded-lg border-solid border-2 border-slate-200 lg:rounded-xl"
        />
        <div className="w-[320px] lg:w-96 bg-white/40 p-8 rounded-xl flex flex-col items-start justify-center gap-8">
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
                <Icon icon="simple-icons:github" className="text-2xl" />
              </Link>

              <p>·</p>
              <Link
                href="https://review-your-food.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:external-link" className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr class="h-px my-12 w-2/3 bg-white border-0 " />
      <section className="min-w-full flex flex-col lg:flex-row items-center lg:items-start justify-between lg:px-24 gap-8 mb-12">
        <div>
          <h1 className="text-2xl ">GoDigital</h1>
        </div>
        <Image
          src="/projectImages/GoDigital/cover.png"
          alt="GoDigital Project"
          width={1500}
          height={740}
          quality={100}
          priority
          className="w-[375px] h-[185px] lg:w-[750px] lg:h-[370px] rounded-lg lg:rounded-xl"
        />
      </section>
    </section>
  );
}