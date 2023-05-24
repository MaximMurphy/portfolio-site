import LegoModel from "@/components/LegoModel";
import Head from "next/head";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maxim Murphy</title>
      </Head>
      <main className="min-h-screen lg:ml-80 overflow-hidden">
        <About />
        {/* 
        <div className="w-full flex items-center justify-center">
          <LegoModel />
        </div>
        */}
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
