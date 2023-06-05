import LegoModel from "@/components/LegoModel";
import Head from "next/head";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Repos from "@/components/Repos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maxim Murphy</title>
      </Head>
      <div className="min-h-screen lg:ml-80 overflow-hidden">
        <About />
        {/* 
        <div className="w-full flex items-center justify-center">
          <LegoModel />
        </div>
        */}
        <div className="w-full lg:-ml-24 h-[0.1rem] lg:h-1 my-12 lg:my-24 bg-blue-950"></div>
        <Projects />
        <Repos />
        <div className="w-full lg:-ml-24 h-[0.1rem] lg:h-1 my-12 lg:my-24 bg-blue-950"></div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}
