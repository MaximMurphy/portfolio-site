import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`w-full ${montserrat.className}`}>
      <Sidebar />
      <div className="hidden md:flex ml-80 z-50 fixed w-2 h-full bg-blue-950"></div>
      <Component {...pageProps} />
    </main>
  );
}
