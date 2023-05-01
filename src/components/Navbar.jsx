import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center justify-between px-24 pt-24 pb-4">
      <div className="flex flex-col items-center justify-between gap-y-12 w-full text-base tracking-widest lg:flex-row lg:px-24">
        <Link href="/">
          <h1 className="font-bold">Maxim</h1>
        </Link>
        <h1 className="font-bold">MENU</h1>
      </div>
    </nav>
  );
}
