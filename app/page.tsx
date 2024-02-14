import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/";
import { Home } from "@/components/Home";
import { Projects } from "@/components/Projects";
import { Technologies } from "@/components/Technologies";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Header />
      <main className=" bg-purple-black-900">
        <Home />
        <About />
        <Technologies />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
