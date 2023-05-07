import Image from "next/image";

export default function about() {
  return (
    <>
      <section className="bg-blue-950 w-full flex flex-col text-white text-lg lg:text-2xl font-bold tracking-wider px-12 lg:px-32 pb-40 pt-12 gap-12 -mt-96">
        <h1 className="text-5xl lg:text-9xl font-bold text-center lg:text-end mt-96">
          About Me
        </h1>
        <section className="lg:z-40 flex flex-col items-center lg:flex-row justify-between gap-12">
          <div className="z-10 w-fit h-[500px] overflow-y-scroll bg-white/20 rounded-xl backdrop-blur border-solid border border-white/20 shadow-xl flex flex-col items-center text-center p-8 gap-4">
            <Image
              src="/about/osu.png"
              alt="OSU Logo"
              width={500}
              height={500}
              className="w-36 h-36"
            />
            <p>
              I graduated from The Ohio State University with a degree in
              Computer Science and Engineering in December 2022. My
              specialization was in Software Engineering. Some of my favorites
              classes were: Capstone Design - Software Applications, Mobile
              Application Development, Web Applications, and Computer Game &
              Animation Techniques
            </p>
          </div>
          <div className="z-10 w-fit h-[500px] overflow-y-scroll bg-white/20 rounded-xl backdrop-blur border-solid border border-white/20 shadow-xl flex flex-col items-center text-center p-8 gap-4">
            <Image
              src="/about/chm.png"
              alt="Plast Chornomortsi Logo"
              width={500}
              height={500}
              className="w-36 h-36"
            />
            <p>
              I am actively invovlved in the Ukrainian Scouting Organization,
              Plast. I have been a summer camp counselor since 2017 and in 2021,
              I joined a subdivision known as the Chornomortsi. Our focus is
              boating and planning a water sports camp. Since 2022, I&apos;ve
              been the administrator for this camp with the resposibility of
              creating registration forms, accepting applicants, and being in
              charge of the bank account.
            </p>
          </div>
          <div className="z-10 w-fit h-[500px] overflow-y-scroll bg-white/20 rounded-xl backdrop-blur border-solid border border-white/20 shadow-xl flex flex-col items-center text-center p-8 gap-4">
            <Image
              src="/about/musicNotes.png"
              alt="Music Note"
              width={500}
              height={500}
              className="w-36 h-32 invert"
            />
            <p>
              Outside of web development, my main interests are making
              electronic music, 35mm film photography, and hiking.
            </p>
          </div>
        </section>
      </section>
      <div className="absolute flex flex-col justify-center items-center invisible lg:visible">
        <Image
          src="/about/earl.png"
          alt="A 3D rendered duck"
          width={500}
          height={500}
          className="w-36 h-36 lg:-mt-[83rem] animate-bounceAround lg:animate-sideToSide"
        />
        <Image
          src="/about/earlCopy.png"
          alt="A 3D rendered duck"
          width={500}
          height={500}
          className="absolute w-36 h-36 lg:-mt-[18rem] animate-bounceAround lg:animate-sideToSide2"
        />
      </div>
    </>
  );
}
