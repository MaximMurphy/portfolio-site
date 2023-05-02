export default function Home() {
  return (
    <section className="w-full flex flex-col text-center lg:text-start text-softblue-400 text-2xl tracking-wider p-12 py-24 bg-blue-950 gap-12">
      <h1 className="text-slate-300 underline font-bold text-center">Skills</h1>
      <div className="flex flex-col justify-between px-12 gap-16 lg:px-80 lg:flex-row">
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
        </div>
      </div>
    </section>
  );
}
