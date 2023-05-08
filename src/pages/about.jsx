import Image from "next/image";

export default function about() {
  return (
    <section className="bg-blue-950 w-full flex flex-col text-white text-lg lg:text-2xl font-bold tracking-wider px-12 lg:px-32 pt-12 gap-12 -mt-96">
      <h1 className="text-5xl lg:text-9xl font-bold text-center lg:text-end mt-96 pb-8">
        About Me
      </h1>
      <section className="flex flex-col items-center lg:flex-row justify-between gap-12">
        <div className="z-10 w-fit h-[550px] overflow-y-scroll bg-blue-950 rounded-3xl shadow-neueInset flex flex-col items-center text-center p-8 gap-4">
          <Image
            src="/about/osu.png"
            alt="OSU Logo"
            width={500}
            height={500}
            className="w-36 h-36"
          />
          <p>
            I graduated from The Ohio State University with a degree in Computer
            Science and Engineering in December 2022. My specialization was in
            Software Engineering. Some of my favorites classes were: Capstone
            Design - Software Applications, Mobile Application Development, Web
            Applications, and Computer Game & Animation Techniques
          </p>
        </div>
        <div className="z-10 w-fit h-[550px] overflow-y-scroll bg-blue-950 rounded-3xl shadow-neueInset flex flex-col items-center text-center p-8 gap-4">
          <Image
            src="/about/chm.png"
            alt="Plast Chornomortsi Logo"
            width={500}
            height={500}
            className="w-36 h-36"
          />
          <p>
            I am actively invovlved in the Ukrainian Scouting Organization,
            Plast. I have been a summer camp counselor since 2017 and in 2021, I
            joined a subdivision known as the Chornomortsi. Our focus is boating
            and planning a water sports camp. Since 2022, I&apos;ve been the
            administrator for this camp with the resposibility of creating
            registration forms, accepting applicants, and being in charge of the
            bank account.
          </p>
        </div>
        <div className="z-10 w-fit h-[550px] overflow-y-scroll bg-blue-950 rounded-3xl shadow-neueInset flex flex-col items-center text-center p-8 gap-4">
          <Image
            src="/about/musicNotes.png"
            alt="Music Note"
            width={500}
            height={500}
            className="w-36 h-32 invert"
          />
          <p>
            Outside of web development, my main interests are making electronic
            music, cooking, 35mm film photography, and hiking.
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
