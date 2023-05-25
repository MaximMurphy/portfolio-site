import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify-icon/react";

export default function ReviewYourFood() {
  return (
    <div className="h-[36rem] w-[320px] lg:w-96 flex flex-col items-start bg-offwhite-600 border-2 border-offwhite-800 text-cyan-950 rounded-xl p-8 gap-8">
      <h1 className="text-2xl font-semibold">Review Your Food</h1>
      <div className="w-fit h-fit peer">
        <Link
          href="https://review-your-food.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/projectImages/ReviewYourFood/reviewyourfood.gif"
            alt="Review Your Food"
            width={800}
            height={385}
            quality={100}
            priority
            className="w-full h-full rounded-lg"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start gap-2 peer-hover:text-green-700">
        <Image
          src="/projectImages/ReviewYourFood/reviewyourfoodfavicon.png"
          alt="Review Your Food"
          width={192}
          height={192}
          quality={100}
          priority
          className="w-8 h-8"
        />
        <p className="text-justify text-lg">
          A web application for users to review food from a restaraunt and share
          with others. Developed using NextJS for frontend and Firebase for
          backend
        </p>
        <div className="flex flex-row gap-2 mt-2 text-cyan-950 font-bold">
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
  );
}
