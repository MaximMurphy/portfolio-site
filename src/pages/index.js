import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-full items-center justify-between text-lg flex flex-col gap-y-12 lg:flex-row lg:px-24">
        <h1 className="font-bold">Hello World</h1>
        <h1 className="font-bold">Maxim Murphy</h1>
      </div>
    </main>
  );
}
