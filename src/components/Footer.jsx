import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";

export default function Footer() {
  return (
    <nav className="flex flex-col items-center justify-between ">
      <div className="w-full flex flex-row items-center justify-between px-12 lg:px-48 py-8 lg:py-12">
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
            className="h-8 w-8 lg:h-12 lg:w-12 invert hover:drop-shadow-2xl hover:scale-110"
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
            className="h-8 w-8 lg:h-12 lg:w-12 invert hover:drop-shadow-2xl hover:scale-110"
          />
        </Link>
        <p className="hover:drop-shadow-2xl hover:scale-110">
          <Link
            href="/RESUME Maxim Murphy.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/footerIcons/resume.png"
              alt="resume"
              width={50}
              height={50}
              className="h-8 w-8 lg:h-12 lg:w-12 invert hover:drop-shadow-2xl hover:scale-110"
            />
          </Link>
        </p>
        {/* 
          <Link
            href="https://www.instagram.com/m8murphy/"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden"
          >
            <Image
              src="/footerIcons/instagram.png"
              alt="instagram logo"
              width={50}
              height={50}
              className="hover:drop-shadow-2xl hover:scale-110"
            />
          </Link>
          */}
      </div>

      <div className="mb-12 text-sm font-bold tracking-widest text-slate-300">
        <p>© 2023 Maxim Murphy</p>
      </div>
    </nav>
  );
}
