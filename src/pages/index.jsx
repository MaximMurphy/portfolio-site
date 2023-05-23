import LegoModel from "@/components/LegoModel";
import Skills from "@/components/Skills";
import Head from "next/head";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home / Maxim Murphy</title>
      </Head>
      <main className="min-h-screen lg:ml-80">
        <About />
        <Skills />
        <div className="w-full flex items-center justify-center">
          <LegoModel />
        </div>
        <Footer />
      </main>
    </>
  );
}
