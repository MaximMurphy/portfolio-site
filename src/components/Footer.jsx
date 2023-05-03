import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <nav className="flex flex-col items-center justify-between ">
      <div className="flex flex-col lg:w-full lg:px-48 lg:flex-row">
        <div className="flex flex-col items-center lg:items-start font-bold text-lg tracking-widest text-blue-950 p-20 lg:p-12 lg:mt-12 lg:gap-4">
          <p className="mb-4 lg:mb-0">PAGES</p>
          <div className="flex flex-col items-center lg:items-start text-white gap-2">
            <Link
              href="/"
              className="hover:text-orange-200 hover:drop-shadow-2xl hover:scale-110"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="hover:text-orange-400 hover:drop-shadow-2xl hover:scale-110"
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              className="hover:text-orange-600 hover:drop-shadow-2xl hover:scale-110"
            >
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className="hover:text-orange-800 hover:drop-shadow-2xl hover:scale-110"
            >
              CONTACT
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-between w-full font-bold text-lg tracking-widest text-white gap-6 px-24 pb-10 lg:mt-24 lg:flex-row">
          <Link
            href="https://github.com/MaximMurphy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/footerIcons/github.png"
              alt="github logo"
              width={50}
              height={50}
              className="invert hover:drop-shadow-2xl hover:scale-110"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/maxim-murphy8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/footerIcons/linkedin.png"
              alt="linkedin logo"
              width={50}
              height={50}
              className="invert hover:drop-shadow-2xl hover:scale-110"
            />
          </Link>
          <Link
            href="https://www.instagram.com/m8murphy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/footerIcons/instagram.png"
              alt="instagram logo"
              width={50}
              height={50}
              className="hover:drop-shadow-2xl hover:scale-110"
            />
          </Link>
          <p className="hover:drop-shadow-2xl hover:scale-110 hover:text-blue-950">
            RESUME
          </p>
        </div>
      </div>

      <div className=" mb-16 text-sm font-bold tracking-widest text-slate-300">
        <p>© 2023 Maxim Murphy</p>
      </div>
    </nav>
  );
}
