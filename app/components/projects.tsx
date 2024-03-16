import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";



export function Projects() {
  return (
    <section className="pb-28 px-10 lg:px-12 lg-pt-28 xl:px-28 flex flex-col items-center">
      <h2 className="text-white text-4xl font-bold mb-3 my-2 leading-10 text-center lg:text-5xl">
        Projetos
      </h2>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-[#2C243B] flex flex-col p-4 rounded-xl cursor-pointer justify-between">
          <div>
            <img
              src="/images/indecor.png"
              alt="Projeto Indecor"
              className="w-[100%] "
            />
            <div className="flex items-start justify-start w-[100%] my-4 gap-1">
              <FaCss3Alt color="#7F4FEB" size="35" />
              <FaHtml5 color="#7F4FEB" size="35" />
              <IoLogoJavascript color="#7F4FEB" size="35" />
            </div>
            <h3 className="text-xl font-bold text-white">Indecor</h3>
            <p className="text-white text-base">
              Uma landing page do evento InDecor.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
            <a
              href="https://liviaaraujo-dev.github.io/InDecor/"
              target="_blank"
              className="bg-purple-900 hover:bg-purple-600 flex items-center text-white font-medium w-[100%] justify-between px-4 gap-4 py-2 rounded-lg lg:w-[50%]"
            >
              <TbWorld color="#ffffff" size={25} />
              View
              <MdArrowOutward size="25" />
            </a>
            <a
              href="https://github.com/liviaaraujo-dev/InDecor"
              target="_blank"
              className="bg-[#413A4F] hover:bg-[#675c7e] flex items-center text-white font-medium w-[100%] justify-between px-4 gap-4 py-2 rounded-lg lg:w-[50%]"
            >
              <FaGithub color="#ffffff" size={25} />
              Código
              <MdArrowOutward size="25" />
            </a>
          </div>
        </div>

        <div className="bg-[#2C243B] flex flex-col p-4 rounded-xl cursor-pointer justify-between">
          <div>
            <img
              src="/images/weather-app.png"
              alt="Projeto Indecor"
              className="w-[100%] "
            />
            <div className="flex items-start justify-start w-[100%] my-4 gap-1">
              <FaCss3Alt color="#7F4FEB" size="35" />
              <FaHtml5 color="#7F4FEB" size="35" />
              <IoLogoJavascript color="#7F4FEB" size="35" />
            </div>
            <h3 className="text-xl font-bold text-white">Weather App</h3>
            <p className="text-white text-base">
              O Weather App é um projeto que realiza a pesquisa do clima da cidade, com os dados fornecidos pela API OpenWeather.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
            <a
              href="https://liviaaraujo-dev.github.io/weather-app/"
              target="_blank"
              className="bg-purple-900 hover:bg-purple-600 flex items-center text-white font-medium w-[100%] justify-between px-4 gap-4 py-2 rounded-lg lg:w-[50%]"
            >
              <TbWorld color="#ffffff" size={25} />
              View
              <MdArrowOutward size="25" />
            </a>
            <a
              href="https://github.com/liviaaraujo-dev/weather-app"
              target="_blank"
              className="bg-[#413A4F] hover:bg-[#675c7e] flex items-center text-white font-medium w-[100%] justify-between px-4 gap-4 py-2 rounded-lg lg:w-[50%]"
            >
              <FaGithub color="#ffffff" size={25} />
              Código
              <MdArrowOutward size="25" />
            </a>
          </div>
        </div>  

        <div className="bg-[#2C243B] flex flex-col p-4 rounded-xl cursor-pointer justify-between">
        <div>
          <img
            src="/images/film-lib.png"
            alt="Projeto Indecor"
            className="w-[100%] "
          />
          <div className="flex items-start justify-start w-[100%] my-4 gap-1">
            <FaReact color="#7F4FEB" size="35" />
            <IoLogoJavascript color="#7F4FEB" size="35" />
            <FaCss3Alt color="#7F4FEB" size="35" />
            <FaHtml5 color="#7F4FEB" size="35" />
          </div>
          <h3 className="text-xl font-bold text-white">Film Lib</h3>
          <p className="text-white text-base">
            Oferece uma listagem e pesquisa de filmes, aproveitando os dados fornecidos pela API The Movie Database.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
          <a
            href="https://liviaaraujo-dev.github.io/weather-app/"
            target="_blank"
            className="bg-purple-900 hover:bg-purple-600 flex items-center text-white font-medium w-[100%] justify-between px-4 gap-4 py-2 rounded-lg lg:w-[50%]"
          >
            <TbWorld color="#ffffff" size={25} />
            View
            <MdArrowOutward size="25" />
          </a>
          <a
            href="https://github.com/liviaaraujo-dev/weather-app"
            target="_blank"
            className="bg-[#413A4F] hover:bg-[#675c7e] flex items-center text-white font-medium w-[100%] justify-between px-4 gap-4 py-2 rounded-lg lg:w-[50%]"
          >
            <FaGithub color="#ffffff" size={25} />
            Código
            <MdArrowOutward size="25" />
          </a>
        </div>
      </div>  

        <div className="bg-[#2C243B] flex flex-col p-4 rounded-xl cursor-pointer justify-between">
          <div>
            <img
              src="/images/dt-money.png"
              alt="Projeto Indecor"
              className="w-[100%] "
            />
            <div className="flex items-start justify-start w-[100%] my-4 gap-2">
              <FaReact color="#7F4FEB" size="35" />
              <SiTypescript color="#7F4FEB" size="35" />
              <SiVite color="#7F4FEB" size="35" />
              <FaCss3Alt color="#7F4FEB" size="35" />
              <FaHtml5 color="#7F4FEB" size="35" />
              <SiStyledcomponents color="#7F4FEB" size="35" />
            </div>
            <h3 className="text-xl font-bold text-white">DT Money</h3>
            <p className="text-white text-base">
              Aplicação de controle financeiro, onde é possível cadastrar e excluir transações e ver o saldo de entrada e saída.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
            <a
              href="https://github.com/liviaaraujo-dev/dt-money"
              target="_blank"
              className="bg-[#413A4F] hover:bg-[#675c7e] flex items-center text-white font-medium w-[100%] justify-between px-4 gap-4 py-2 rounded-lg lg:w-[50%]"
            >
              <FaGithub color="#ffffff" size={25} />
              Código
              <MdArrowOutward size="25" />
            </a>
          </div>
        </div>  

        <div className="bg-[#2C243B] flex flex-col p-4 rounded-xl cursor-pointer justify-between">
        <div>
          <img
            src="/images/quiz-harry-potter.png"
            alt="Projeto Indecor"
            className="w-[100%] "
          />
          <div className="flex items-start justify-start w-[100%] my-4 gap-1">
            <FaReact color="#7F4FEB" size="35" />
            <SiNextdotjs color="#7F4FEB" size="35" />
            <SiTypescript color="#7F4FEB" size="35" />
            <FaCss3Alt color="#7F4FEB" size="35" />
            <FaHtml5 color="#7F4FEB" size="35" />
          </div>
          <h3 className="text-xl font-bold text-white">Quiz Harry Potter</h3>
          <p className="text-white text-base">
            Oferece uma listagem e pesquisa de filmes, aproveitando os dados fornecidos pela API The Movie Database.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
          <a
            href="https://quiz-harry-potter-phi.vercel.app/"
            target="_blank"
            className="bg-purple-900 hover:bg-purple-600 flex items-center text-white font-medium w-[100%] justify-between px-4 gap-4 py-2 rounded-lg lg:w-[50%]"
          >
            <TbWorld color="#ffffff" size={25} />
            View
            <MdArrowOutward size="25" />
          </a>
          <a
            href="https://github.com/liviaaraujo-dev/quiz-harry-potter"
            target="_blank"
            className="bg-[#413A4F] hover:bg-[#675c7e] flex items-center text-white font-medium w-[100%] justify-between px-4 gap-4 py-2 rounded-lg lg:w-[50%]"
          >
            <FaGithub color="#ffffff" size={25} />
            Código
            <MdArrowOutward size="25" />
          </a>
        </div>
      </div>  

      <div className="bg-[#2C243B] flex flex-col p-4 rounded-xl cursor-pointer justify-between">
        <div>
          <img
            src="/images/notes.png"
            alt="Projeto Indecor"
            className="w-[100%] "
          />
          <div className="flex items-start justify-start w-[100%] my-4 gap-1">
            <FaReact color="#7F4FEB" size="35" />
            <SiTypescript color="#7F4FEB" size="35" />
            <FaHtml5 color="#7F4FEB" size="35" />
            <SiTailwindcss color="#7F4FEB" size="35" />
          </div>
          <h3 className="text-xl font-bold text-white">Notes</h3>
          <p className="text-white text-base">
            Consiste em salvar notas no local storage, permitindo que seja possível gravar falando.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
          <a
            href="https://quiz-harry-potter-phi.vercel.app/"
            target="_blank"
            className="bg-purple-900 hover:bg-purple-600 flex items-center text-white font-medium w-[100%] justify-between px-4 gap-4 py-2 rounded-lg lg:w-[50%]"
          >
            <TbWorld color="#ffffff" size={25} />
            View
            <MdArrowOutward size="25" />
          </a>
          <a
            href="https://github.com/liviaaraujo-dev/quiz-harry-potter"
            target="_blank"
            className="bg-[#413A4F] hover:bg-[#675c7e] flex items-center text-white font-medium w-[100%] justify-between px-4 gap-4 py-2 rounded-lg lg:w-[50%]"
          >
            <FaGithub color="#ffffff" size={25} />
            Código
            <MdArrowOutward size="25" />
          </a>
        </div>
      </div>  

      </div>


    </section>
  );
}
