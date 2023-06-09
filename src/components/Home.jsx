import Link from "next/link";

export default function Home() {
  return (
    <section
      id="home"
      className="mb-8 lg:mb-0 h-full w-full flex flex-col lg:flex-row items-center justify-center p-12"
    >
      <div className="flex flex-col items-center font-semibold tracking-widest gap-8 p-4">
        <nav className="z-40 w-full justify-center fixed top-0 bg-offwhite-400/60 backdrop-blur-sm lg:hidden flex flex-row gap-8 text-xs p-4 text-blue-950">
          <Link href="#home" scroll={false} className="hover:text-teal-600">
            HOME
          </Link>
          <Link href="#about" scroll={false} className="hover:text-cyan-600">
            ABOUT
          </Link>
          <Link
            href="#projects"
            scroll={false}
            className="hover:text-orange-600"
          >
            PROJECTS
          </Link>
          <Link href="#contact" scroll={false} className="hover:text-green-600">
            CONTACT
          </Link>
        </nav>
        <h1 className="relative text-7xl text-blue-950 lg:hidden animate-spinslow">
          ❉
        </h1>

        <div className="w-full h-[0.1rem] bg-blue-950 lg:hidden"></div>
        <div>
          <h1 className="text-7xl lg:text-[10rem] italic font-serif antialiased">
            <span className="text-blue-950">M</span>
            <span className="text-cyan-950 -ml-1 lg:-ml-1">A</span>
            <span className="text-blue-950 -ml-1 lg:ml-0">X</span>
            <span className="text-cyan-950 -ml-2 lg:-ml-3">I</span>
            <span className="text-blue-950 -ml-2 lg:-ml-3">M</span>
          </h1>
          <h1 className="text-7xl lg:text-[10rem] italic font-serif ml-4 lg:ml-12 antialiased">
            <span className="text-blue-950">M</span>
            <span className="text-cyan-950 -ml-2 lg:-ml-3">U</span>
            <span className="text-blue-950 -ml-1 lg:-ml-2">R</span>
            <span className="text-cyan-950 -ml-1 lg:-ml-1">P</span>
            <span className="text-blue-950 -ml-2 lg:-ml-4">H</span>
            <span className="text-cyan-950 -ml-1 lg:-ml-1">Y</span>
          </h1>
        </div>

        <div className="text-3xl lg:text-5xl text-cyan-800 w-80 lg:w-[30rem]">
          <div className="flex flex-row justify-between">
            <p>CREATIVE</p>
            <p>WEB</p>
          </div>
          <p>DEVELOPER</p>
          <div className="flex flex-row justify-between">
            <p>&</p>
            <p>DESIGNER</p>
          </div>
        </div>

        <div className="mt-4 flex flex-row gap-12 lg:gap-48 text-xl lg:text-3xl text-cyan-800 tracking-widest">
          <p className="animate-spinslow">✢</p>
          <p className="animate-spinslowreverse">✧</p>
          <p>⌘</p>
          <p className="animate-spinslowreverse">✧</p>
          <p className="animate-spinslow">✢</p>
        </div>
        <div className="w-full h-[0.1rem] bg-blue-950 lg:hidden"></div>
      </div>
    </section>
  );
}
