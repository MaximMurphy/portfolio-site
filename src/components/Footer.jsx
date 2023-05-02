import Link from "next/link";

export default function Footer() {
  return (
    <nav className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-between h-60 w-full font-bold text-lg tracking-widest text-blue-950 p-24 mb-24 gap-6 lg:flex-row">
        <p>GITHUB</p>
        <div className="flex flex-col items-center justify-between lg:gap-4">
          <break className="mb-12"></break>
          <p>PAGES</p>
          <div className="text-white flex flex-col items-center justify-between">
            <a>About</a>
            <a>Projects</a>
            <a>Contact</a>
          </div>
        </div>
        <p>LINKEDIN</p>
      </div>
      <div className="mb-24 text-sm font-bold tracking-widest text-slate-300">
        <p>Copyright 2023 Maxim Murphy</p>
      </div>
    </nav>
  );
}
