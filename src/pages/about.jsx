import Image from "next/image";

export default function about() {
  return (
    <>
      <section className="bg-gradient-to-b from-softblue-400 to-blue-300 w-full flex flex-col items-center text-white text-lg lg:text-2xl font-bold tracking-wider px-12 lg:px-32 pb-24 pt-12 lg:pt-2 gap-12">
        <h1 className="underline decoration-2 underline-offset-4 text-3xl mb-12">
          About Me
        </h1>
        <section className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="w-fit h-[500px] overflow-y-scroll bg-white/20 rounded-xl backdrop-blur border-solid border border-white/20 shadow-xl flex flex-col items-center text-center p-8 gap-4">
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
              specialization was in Software Engineering.
            </p>
          </div>
          <div className="w-fit h-[500px] overflow-y-scroll bg-white/20 rounded-xl backdrop-blur border-solid border border-white/20 shadow-xl flex flex-col items-center text-center p-8 gap-4">
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
              boating and planning a water sports camp. In 2022, I was the
              administrator for this camp with the resposibility of creating
              registration forms, accepting applicants, and being in charge of
              the bank account.
            </p>
          </div>
          <div className="w-fit h-[500px] overflow-y-scroll bg-white/20 rounded-xl backdrop-blur border-solid border border-white/20 shadow-xl flex flex-col items-center text-center p-8 gap-4">
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
        <Image
          src="/about/earl.png"
          alt="photo of a duck"
          width={200}
          height={200}
        />
      </section>
    </>
  );
}
