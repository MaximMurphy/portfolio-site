import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Navbar() {
  let menu;
  useEffect(() => {
    menu = document.getElementById("menu");

    window.onscroll = () => {
      let image = document.getElementById("rotateLogo");
      image.style.transform = "rotate(" + window.scrollY / 2 + "deg)";
    };
  }, []);

  const handleOpen = () => {
    console.log("open menu");
    menu.classList.remove("w-0");
    menu.classList.add("w-full");
  };

  const handleClose = () => {
    console.log("close menu");
    menu.classList.remove("w-full");
    menu.classList.add("w-0");
  };

  return (
    <>
      <div
        className="z-50 w-0 fixed bg-green-950 min-h-screen flex flex-col items-center overflow-hidden "
        id="menu"
      >
        <div className="min-w-full top-0 flex justify-center mt-16 lg:mt-28 ml-[50%] lg:ml-[75%] ">
          <button
            className="font-bold tracking-widest hover:text-orange-400 hover:scale-110"
            onClick={handleClose}
          >
            CLOSE
          </button>
        </div>
        <ul className="text-4xl font-bold tracking-widest flex flex-col gap-12 mt-32 lg:mt-36">
          <Link href="/">
            <li className="hover:-translate-y-1 hover:text-orange-200 hover:drop-shadow-2xl">
              HOME
            </li>
          </Link>
          <Link href="/about">
            <li className="hover:-translate-y-1 hover:text-orange-400 hover:drop-shadow-2xl">
              ABOUT
            </li>
          </Link>
          <Link href="/projects">
            <li className="hover:-translate-y-1 hover:text-orange-600 hover:drop-shadow-2xl">
              PROJECTS
            </li>
          </Link>
          <Link href="/contact">
            <li className="hover:-translate-y-1 hover:text-orange-800 hover:drop-shadow-2xl">
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
      <nav className="z-10 sticky min-w-full top-0 flex flex-row items-start justify-between px-8 pt-8 lg:flex-row lg:pt-8 lg:px-16">
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
