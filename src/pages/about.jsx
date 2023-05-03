import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function about() {
  return (
    <>
      <section className="bg-gradient-to-b from-softblue-400 to-blue-300 w-full flex flex-col items-center text-white text-2xl font-bold tracking-wider px-12 lg:px-48 pb-24 pt-8 lg:pt-0 gap-12">
        <Image src="/earl.png" alt="photo of a duck" width={200} height={200} />
        <h1>About Me</h1>
        <p className="text-center">
          I graduated from The Ohio State University with a degree in Computer
          Science and Engineering in December 2022.
        </p>
        <p className="text-blue-950">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </>
  );
}
