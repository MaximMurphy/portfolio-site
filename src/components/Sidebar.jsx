import Link from "next/link";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [description, setDescription] = useState("");

  const handleHover = (text) => {
    setDescription(text);
  };

  let menu;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    menu = document.getElementById("menu");
    let image = document.getElementById("rotateLogo");

    window.onscroll = () => {
      image.style.transform = "rotate(" + window.scrollY / 4 + "deg)";
    };
  }, []);

  return (
    <nav className="hidden md:flex z-40 fixed bg-offwhite-400 flex-col h-full w-80 items-center gap-12 py-4">
      <Link
        href="#home"
        onMouseEnter={() => handleHover("↑ back to the top ↑")}
        onMouseLeave={() => handleHover("")}
        scroll={false}
      >
        <h1 id="rotateLogo" className="text-[10rem] text-blue-950">
          ❉
        </h1>
      </Link>
      <div className="w-full flex flex-col text-start ml-52 gap-16 text-blue-950 text-lg font-semibold tracking-wide scroll-smooth">
        <Link
          href="#about"
          onMouseEnter={() => handleHover("More information about me 👨‍💻")}
          onMouseLeave={() => handleHover("")}
          scroll={false}
          className="hover:text-cyan-800"
        >
          ABOUT
        </Link>
        <Link
          href="#projects"
          onMouseEnter={() => handleHover("My software development work 🤖")}
          onMouseLeave={() => handleHover("")}
          scroll={false}
          className="hover:text-cyan-700"
        >
          PROJECTS
        </Link>
        <Link
          href="#contact"
          onMouseEnter={() => handleHover("Write me a message 📲")}
          onMouseLeave={() => handleHover("")}
          scroll={false}
          className="hover:text-cyan-600"
        >
          CONTACT
        </Link>
      </div>
      <p
        id="description"
        className="px-8 text-xs text-blue-950 tracking-wide mt-8 text-center"
      >
        {description}
      </p>
    </nav>
  );
};

export default Sidebar;
