"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Navbar() {
  let menu;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    menu = document.getElementById("menu");
    let image = document.getElementById("rotateLogo");

    window.onscroll = () => {
      image.style.transform = "rotate(" + window.scrollY / 2 + "deg)";
    };
  }, []);

  const handleOpen = () => {
    menu = document.getElementById("menu");
    console.log("open menu");

    menu.classList.add("w-full");
  };

  const handleClose = () => {
    menu = document.getElementById("menu");
    console.log("close menu");
    menu.classList.remove("w-full");
  };

  return (
    <>
      <div
        className="z-50 w-0 fixed bg-green-950 min-h-screen flex flex-col items-center overflow-hidden origin-left duration-300"
        id="menu"
      >
        <div className="min-w-full top-0 flex justify-center mt-14 lg:mt-20 ml-[68%] lg:ml-[88%] ">
          <button
            className="font-bold tracking-widest hover:text-orange-400 hover:scale-110"
            onClick={handleClose}
          >
            CLOSE
          </button>
        </div>
        <ul className="text-4xl font-bold tracking-widest flex flex-col gap-12 mt-32 lg:mt-36">
          <Link href="/">
            <li
              className="hover:-translate-y-1 hover:text-orange-200 hover:drop-shadow-2xl"
              onClick={handleClose}
            >
              HOME
            </li>
          </Link>
          <Link href="/about">
            <li
              className="hover:-translate-y-1 hover:text-orange-400 hover:drop-shadow-2xl"
              onClick={handleClose}
            >
              ABOUT
            </li>
          </Link>
          <Link href="/projects">
            <li
              className="hover:-translate-y-1 hover:text-orange-600 hover:drop-shadow-2xl"
              onClick={handleClose}
            >
              PROJECTS
            </li>
          </Link>
          <Link href="/contact">
            <li
              className="hover:-translate-y-1 hover:text-orange-800 hover:drop-shadow-2xl"
              onClick={handleClose}
            >
              CONTACT
            </li>
          </Link>
        </ul>
      </div>

      <nav className="z-40 sticky min-w-full top-0 flex flex-row items-start justify-between px-8 pt-8 lg:flex-row lg:pt-8 lg:px-16">
        <Link href="/">
          <Image
            src="/maximMurphyAllCapsStars.png"
            alt="maxim logo"
            id="rotateLogo"
            width="800"
            height="800"
            className="invert w-2/5 h-2/5 lg:w-64 lg:h-64 2xl:w-2/5 xl:h-2/5"
          />
        </Link>
        <button
          className="font-bold text-base tracking-widest mt-6 lg:mt-12 hover:text-blue-950 hover:drop-shadow-2xl hover:scale-110"
          onClick={handleOpen}
        >
          MENU
        </button>
      </nav>
    </>
  );
}
