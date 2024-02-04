import { motion } from "framer-motion";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Home() {
  return (
    <section
      id="home"
      className="flex flex-col px-10 lg:flex-row-reverse lg:px-28  items-center pb-32 lg:pt-4"
    >
      <img
        src="/images/foto-livia-araujo.png"
        alt="foto"
        className="mt-10 lg:mr-24 lg:w-[40%]"
      />

      <div className="flex flex-col gap-2 mt-10">
        <p className="text-purple-100 text-2xl font-medium lg:text-3xl">
          Hello, I’am
        </p>
        <h2 className="text-purple-900 text-4xl font-bold lg:text-6xl my-2">
          &lsaquo;Livia Araujo /&rsaquo;
        </h2>
        <span className="text-[#ADABB2] text-2xl font-semibold lg:text-3xl">
          Frontend Developer
        </span>
        <p className="text-purple-100 text-lg font-normal mt-4 lg:w-[80%]">
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. 8 years
          of professional experience, specializing in backend development.{" "}
        </p>

        <div className="flex gap-4 mt-4">
          <a href="https://github.com/liviaaraujo-dev" target="_blank">
            <FaGithub size={35} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/liviaaraujodev" target="_blank">
            <FaLinkedin size={35} color="white" />
          </a>
          <a href="https://wa.me/558892858695" target="_blank">
            <MdOutlineWhatsapp size={40} color="white" />
          </a>
        </div>
      </div>
    </section>
  );
}
