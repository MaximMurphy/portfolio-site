import Link from "next/link";
import LegoModel from "@/components/LegoModel";

export default function Navbar() {
  return (
    <nav className="sticky w-full top-0 z-50 flex flex-col items-center justify-between px-24 pt-24 pb-4 gap-y-12 text-base tracking-widest lg:flex-row lg:px-24">
      <Link href="/">
        <LegoModel />
      </Link>
      <h1 className="font-bold">MENU</h1>
    </nav>
  );
}
