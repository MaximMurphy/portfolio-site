import GoDigital from "@/components/projects/GoDigital";
import ReviewYourFood from "@/components/projects/ReviewYourFood";
import Wavform from "@/components/projects/Wavform";

export default function projects() {
  return (
    <div className="bg-gradient-to-b from-softblue-400 via-blue-400 to-blue-300 w-full flex flex-col text-white font-bold tracking-wider px-8 pb-24 pt-8 lg:pt-0 gap-4 lg:gap-12">
      <h1 className="text-5xl lg:text-9xl font-bold text-end mb-8 lg:px-20">
        Projects
      </h1>
      <Wavform />
      <hr className="h-px my-12 w-full bg-white border-0 px-12" />
      <ReviewYourFood />
      <hr className="h-px my-12 w-full bg-white border-0 px-12" />
      <GoDigital />
    </div>
  );
}
