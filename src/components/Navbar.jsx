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
    <nav className="z-10 sticky min-w-full top-0 flex flex-row items-start justify-between gap-y-10 p-8 lg:flex-row lg:pt-8 lg:px-16">
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
      <h1 className="font-bold text-base tracking-widest mt-6 lg:mt-12 hover:text-blue-950 hover:drop-shadow-2xl hover:scale-110">
        MENU
      </h1>
    </nav>
  );
}
