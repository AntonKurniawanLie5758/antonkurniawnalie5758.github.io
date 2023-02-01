import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Archivo } from "@next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";

const archivo = Archivo({
  weight: ["100", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <main className={archivo.className}>
        <Component {...pageProps} />
      </main>
    </ParallaxProvider>
  );
}
