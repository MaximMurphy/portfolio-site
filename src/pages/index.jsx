import LegoModel from "@/components/LegoModel";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen w-full flex flex-col content-center text-center font-bold tracking-wider p-4 gap-4">
        <LegoModel />
        <div className="flex flex-col gap-12">
          <h1 className="text-4xl text-blue-950"> I&apos;m Maxim, </h1>
          <p className="text-3xl text-slate-200">
            {" "}
            a full stack web developer and designer.
          </p>
          <h1 className="text-5xl">👨‍💻⚡️🌐</h1>
        </div>
      </section>
      <Skills />
    </main>
  );
}
