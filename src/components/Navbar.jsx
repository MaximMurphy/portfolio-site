import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="z-10 sticky w-full top-0 flex flex-col items-center justify-between pt-4 lg:pt-8 pb-4 gap-y-6 text-base tracking-widest lg:flex-row lg:px-24">
      <Link href="/">
        <Image
          src="/maximLogo.png"
          alt="maxim logo"
          width={350}
          height={350}
          className="invert"
        />
      </Link>
      <h1 className="font-bold hover:text-blue-950">MENU</h1>
    </nav>
  );
}
