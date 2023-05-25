import Link from "next/link";
import Image from "next/image";

export default function Socials() {
  return (
    <section className="flex flex-col px-10 lg:px-24 gap-12 font-base tracking-wider">
      <div>
        <p className="w-full text-cyan-700 text-2xl text-justify leading-8 lg:leading-9">
          Maxim Murphy is a software developer who holds a degree in Computer
          Science & Engineering from The Ohio State University. With a strong
          focus on full stack web development and design, he combines technical
          skills with a passion for creating dynamic and user-centric digital
          experiences.
        </p>
      </div>
      <div className="w-full flex flex-row justify-between font-semibold text-sm lg:text-lg">
        <Link
          href="https://github.com/MaximMurphy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-950 hover:text-cyan-600 underline"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/maxim-murphy8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-950 hover:text-orange-600 underline"
        >
          LinkedIn
        </Link>

        <Link
          href="/RESUME Maxim Murphy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-950 hover:text-green-700 underline"
        >
          Resume
        </Link>
      </div>
    </section>
  );
}
