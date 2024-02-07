import { About } from "@/components/About";
import { Header } from "@/components/Header/";
import { Home } from "@/components/Home";
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
      </main>
    </>
  );
}
