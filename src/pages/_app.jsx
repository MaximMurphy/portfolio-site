import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`w-full ${montserrat.className}`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}