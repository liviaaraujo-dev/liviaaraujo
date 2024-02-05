import { About } from "@/components/About";
import { Header } from "@/components/Header/";
import { Home } from "@/components/Home";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Header />
      <main className="mt-20 bg-purple-black-900">

      <Home />
      <About />
      </main>
    </>
  );
}
