import LegoModel from "@/components/LegoModel";
import Skills from "@/components/Skills";

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
      <Skills />
    </main>
  );
}
