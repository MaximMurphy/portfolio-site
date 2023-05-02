import LegoModel from "@/components/LegoModel";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen w-full flex flex-col content-center text-center font-bold tracking-wider p-4 gap-12">
        <LegoModel />
        <h1 className="text-4xl text-blue-950"> I&apos;m Maxim, </h1>
        <p className="text-3xl text-slate-200">
          {" "}
          a full stack web developer and designer.
        </p>
        <p className="text-3xl text-slate-200"></p>
      </section>
      <section className="min-h-screen w-full flex flex-col text-center lg:text-start text-softblue-400 text-2xl tracking-wider p-12 py-36 bg-blue-950 gap-12">
        <h1 className="text-slate-300 underline font-bold text-center">
          Skills
        </h1>
        <div className="flex flex-col justify-between px-12 gap-16 lg:px-96 lg:flex-row">
          <div className="flex flex-col gap-8">
            <h1 className="text-slate-300 font-bold">Front End Technologies</h1>
            <p>ReactJS</p>
            <p>NextJS</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-slate-300 font-bold">Back End Technologies</h1>
            <p>NodeJS</p>
            <p>Firebase</p>
            <p>Java</p>
          </div>

          <div className="flex flex-col gap-8">
            <h1 className="text-slate-300 font-bold">Other</h1>
            <p>Typescript</p>
            <p>ThreeJS</p>
            <p>P5</p>
            <p></p>
          </div>
        </div>
        <break className="mb-8"></break>
        <p className="text-center">
          I graduated from The Ohio State University with a degree in Computer
          Science and Engineering in December 2022 Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </section>
    </main>
  );
}
