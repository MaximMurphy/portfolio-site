import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Navbar() {
  let didMatch, width, height;

  useEffect(() => {
    // checking for screen size
    didMatch = window.matchMedia("(min-width: 701px)").matches;

    window.onscroll = () => {
      let image = document.getElementById("rotateLogo");
      image.style.transform = "rotate(" + window.scrollY / 2 + "deg)";
    };
  }, []);

  // checking for screen size
  if (didMatch) {
    //bigger screens
    width = 400;
    height = 400;
  } else {
    //mobile
    width = 250;
    height = 250;
  }

  return (
    <nav className="z-10 sticky min-w-full top-0 flex flex-col items-center justify-between pt-y-4 gap-y-6 p-8 lg:flex-row lg:pt-8 lg:px-24">
      <Link href="/">
        <Image
          src="/maximAllCaps.png"
          alt="maxim logo"
          width={width}
          height={height}
          id="rotateLogo"
          className="invert"
        />
      </Link>
      <h1 className="font-bold text-base tracking-widest hover:text-blue-950">
        MENU
      </h1>
    </nav>
  );
}
