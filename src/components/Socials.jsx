import Link from "next/link";

export default function Socials() {
  return (
    <div className="w-full flex flex-row items-center font-semibold justify-between px-12 lg:px-48 py-8 lg:py-12">
      <Link
        href="https://github.com/MaximMurphy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-950 hover:text-cyan-800"
      >
        Github
      </Link>
      <Link
        href="https://www.linkedin.com/in/maxim-murphy8/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-950 hover:text-cyan-800"
      >
        Linkedin
      </Link>

      <Link
        href="/RESUME Maxim Murphy.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-950 hover:text-cyan-800"
      >
        Resume
      </Link>
    </div>
  );
}
