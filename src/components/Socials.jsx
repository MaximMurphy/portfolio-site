import Link from "next/link";

export default function Socials() {
  return (
    <div className="w-full flex flex-row items-center justify-between px-12 lg:px-48 py-8 lg:py-12">
      <Link
        href="https://github.com/MaximMurphy"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </Link>
      <Link
        href="https://www.linkedin.com/in/maxim-murphy8/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin
      </Link>

      <Link
        href="/RESUME Maxim Murphy.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        resume
      </Link>

      <Link
        href="https://www.instagram.com/m8murphy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        instagram
      </Link>
    </div>
  );
}
