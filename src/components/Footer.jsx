import Link from "next/link";

export default function Footer() {
  return (
    <nav className="relative z-50 flex flex-col items-center justify-between ">
      <div className=" flex flex-col lg:w-full lg:px-48 lg:flex-row">
        <div className=" flex flex-col items-center lg:items-start font-bold text-lg tracking-widest text-blue-950 p-24 lg:gap-4">
          <p className="mb-4 lg:mb-0">PAGES</p>
          <div className="flex flex-col items-center lg:items-start text-white gap-2">
            <Link href="/about" className="hover:text-blue-950">
              About
            </Link>
            <Link href="/projects" className="hover:text-blue-950">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-blue-950">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-between w-full font-bold text-lg tracking-widest text-blue-950 gap-6 px-24 pb-10 lg:mt-24 lg:flex-row">
          <p>GITHUB</p>
          <p>LINKEDIN</p>
          <p>RESUME</p>
        </div>
      </div>

      <div className="mb-24 text-sm font-bold tracking-widest text-slate-300">
        <p>© 2023 Maxim Murphy</p>
      </div>
    </nav>
  );
}
