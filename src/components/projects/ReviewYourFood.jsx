import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify-icon/react";

export default function ReviewYourFood() {
  return (
    <section className="min-w-full flex flex-col lg:flex-row items-center justify-between lg:px-20 gap-8">
      <div className="w-fit h-full bg-white/20 p-2 rounded-xl backdrop-blur border-solid border border-white/20 shadow-xl flex items-center justify-center animate-shiftUp1 lg:animate-shiftSide1">
        <Link
          href="https://review-your-food.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/projectImages/ReviewYourFood/newcover.png"
            alt="Review Your Food"
            width={1500}
            height={740}
            quality={100}
            priority
            className="w-full h-full rounded-lg lg:rounded-xl"
          />
        </Link>
      </div>
      <div className="w-[320px] lg:w-96 bg-white/20 p-8 rounded-xl backdrop-blur border-solid border border-white/20 shadow-xl flex flex-col items-start justify-center gap-8">
        <h1 className="text-2xl ">Review Your Food</h1>
        <div className="flex flex-col items-start gap-2">
          <p>ABOUT</p>
          <p>
            A web application for users to review food from a restaraunt and
            share with others. Developed using NextJS for frontend and Firebase
            for backend
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
  );
}
