import { About } from "@/app/components/about";
import { Header } from "@/app/components/header";
import { Home } from "@/app/components/home";
import { Projects } from "@/app/components/projects";
import { Technologies } from "@/app/components/technologies";
import Image from "next/image";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";


export default function App() {
  return (
    <>
      <Header />
      <main className=" bg-purple-black-900">
        <Home />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
