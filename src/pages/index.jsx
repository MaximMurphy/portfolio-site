import LegoModel from "@/components/LegoModel";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="w-full flex items-center lg:items-end justify-center lg:justify-end lg:pr-32 2xl:pr-52">
        <LegoModel />
      </div>
      <section className="h-full w-full flex flex-col lg:flex-row items-center text-center justify-between px-8 lg:px-48 2xl:px-64 pb-24 gap-12 lg:-mt-24">
        <Image
          src="/profilePic2.jpg"
          alt="Maxim Murphy"
          height={1200}
          width={1200}
          className="w-64 h-64 lg:w-96 lg:h-96"
        />
        <div className="flex flex-col gap-12 font-bold tracking-wider">
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
