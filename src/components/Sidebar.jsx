import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Sidebar() {
  let menu;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    menu = document.getElementById("menu");
    let image = document.getElementById("rotateLogo");

    window.onscroll = () => {
      image.style.transform = "rotate(" + window.scrollY / 4 + "deg)";
    };
  }, []);

  return (
    <nav className="hidden md:flex z-40 fixed bg-offwhite-400 flex-col h-full w-80 items-center gap-12 p-4">
      <Link href="#home" scroll={false}>
        <h1 id="rotateLogo" className="text-[10rem] text-blue-950">
          ❉
        </h1>
      </Link>
      <div className="flex flex-col gap-16 text-blue-950 text-lg font-semibold tracking-wide scroll-smooth">
        <Link href="#about" scroll={false}>
          ABOUT
        </Link>
        <Link href="#projects" scroll={false}>
          PROJECTS
        </Link>
        <Link href="#contact" scroll={false}>
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
