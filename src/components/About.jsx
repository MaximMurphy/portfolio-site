import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

export default function About() {
  return (
    <section>
      <Home />
      <Skills />
      <Socials />
      <div className="my-12 w-full lg:-ml-24 h-[0.1rem] lg:h-1 bg-blue-950"></div>
    </section>
  );
}
