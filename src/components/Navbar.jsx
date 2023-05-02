import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Navbar() {
  useEffect(() => {
    // checking for screen size

    window.onscroll = () => {
      let image = document.getElementById("rotateLogo");
      image.style.transform = "rotate(" + window.scrollY / 2 + "deg)";
    };
  }, []);

  return (
    <nav className="z-10 sticky min-w-full top-0 flex flex-row items-center justify-between gap-y-10 p-8 lg:flex-row lg:pt-8 lg:px-24">
      <Link href="/">
        <Image
          src="/maximMurphyAllCapsStars.png"
          alt="maxim logo"
          id="rotateLogo"
          width="800"
          height="800"
          className="invert w-2/5 h-2/5 lg:w-72 lg:h-72 2xl:w-2/5 xl:h-2/5"
        />
      </Link>
      <h1 className="font-bold text-base tracking-widest hover:text-blue-950">
        MENU
      </h1>
    </nav>
  );
}
