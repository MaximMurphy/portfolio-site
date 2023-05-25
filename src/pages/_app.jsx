import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";

import { Montserrat, Raleway, Mulish, Urbanist } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`w-full ${font.className}`}>
      <Sidebar />
      <div className="hidden md:flex ml-80 z-50 fixed w-1 h-full bg-blue-950"></div>
      <Component {...pageProps} />
    </main>
  );
}
