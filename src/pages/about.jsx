import Image from "next/image";

export default function about() {
  return (
    <section className="bg-blue-950 w-full flex flex-col text-white text-lg lg:text-2xl font-bold tracking-wider px-12 lg:px-32 pt-12 gap-12 -mt-96">
      <h1 className="text-5xl lg:text-9xl font-bold text-center lg:text-end mt-96 lg:pb-8">
        About Me
      </h1>
      <section className="flex flex-col items-center lg:flex-row justify-between gap-12">
        <div className="z-10 w-fit h-[550px] overflow-y-scroll bg-blue-950 rounded-3xl shadow-neueInset flex flex-col items-center text-center lg:text-start p-8 gap-8">
          <Image
            src="/about/osu.png"
            alt="OSU Logo"
            width={500}
            height={500}
            className="w-36 h-36"
          />
          <p>
            I graduated from The Ohio State University in December 2022 with a
            degree in Computer Science and Engineering, specializing in Software
            Engineering. Key courses included Capstone Design - Software
            Applications, Mobile Application Development, Web Applications, and
            Computer Game & Animation Techniques.
          </p>
        </div>
        <div className="z-10 w-fit h-[550px] overflow-y-scroll bg-blue-950 rounded-3xl shadow-neueInset flex flex-col items-center text-center lg:text-start p-8 gap-8">
          <Image
            src="/about/chm.png"
            alt="Plast Chornomortsi Logo"
            width={500}
            height={500}
            className="w-36 h-36"
          />
          <p>
            Actively involved in the Ukrainian Scouting Organization, Plast, my
            entire life. I have been a summer camp counselor since 2017. In
            2021, I joined the Chornomortsi subdivision with a focus on boating
            and running a water sports camp. Currently, I serve as the camp
            administrator, responsible for developing registration forms,
            coordinating logistics for gear transportation, and overseeing
            financial operations.
          </p>
        </div>
        <div className="z-10 w-fit h-[550px] overflow-y-scroll bg-blue-950 rounded-3xl shadow-neueInset flex flex-col items-center text-center lg:text-start p-8 gap-8">
          <Image
            src="/about/musicNotes.png"
            alt="Music Note"
            width={500}
            height={500}
            className="w-36 h-32 invert"
          />
          <p>
            Beyond web development, I have a passion for electronic music
            production, culinary arts, 35mm film photography, and travel.
          </p>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center p-20">
        <Image
          src="/about/earl.png"
          alt="A 3D rendered duck"
          width={500}
          height={500}
          className="h-36 w-36 lg:w-48 lg:h-48 animate-sideToSide2 lg:animate-sideToSide"
        />
      </div>
    </section>
  );
}
