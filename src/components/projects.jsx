import GoDigital from "@/components/projects/GoDigital";
import ReviewYourFood from "@/components/projects/ReviewYourFood";
import Wavform from "@/components/projects/Wavform";

export default function Projects() {
  return (
    <div
      id="projects"
      className="bg-offwhite-400 w-full flex flex-col text-teal-800 font-bold tracking-wider px-8 pt-8 gap-4 lg:gap-12"
    >
      <h1 className="italic font-serif text-[3.25rem] lg:text-9xl font-bold text-end tracking-widest mb-8 lg:px-20">
        <span className="text-blue-950">P</span>
        <span className="text-cyan-950 -ml-2 lg:-ml-5">R</span>
        <span className="text-blue-950 -ml-2 lg:-ml-6">O</span>
        <span className="text-cyan-950 -ml-2 lg:-ml-4">J</span>
        <span className="text-blue-950 -ml-2 lg:-ml-5">E</span>
        <span className="text-cyan-950 -ml-2 lg:-ml-5">C</span>
        <span className="text-blue-950 -ml-[.60rem] lg:-ml-5">T</span>
        <span className="text-cyan-950 -ml-2 lg:-ml-4">S</span>
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
        <Wavform />
        <GoDigital />
        <ReviewYourFood />
      </div>
    </div>
  );
}
