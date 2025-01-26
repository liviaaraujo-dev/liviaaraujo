"use client";
import { useState } from "react";

export function About() {
  const [isEducation, setIsEducaton] = useState<boolean>(false);

  return (
    <section className="py-28 lg-pt-20 px-6 lg:px-12 xl:px-28" id="about">
      <h2 className="text-white text-3xl font-bold mb-3 my-2 leading-10 text-center lg:text-5xl">
        Sobre
      </h2>
      <div className="flex flex-col items-center lg:flex-row lg:items-start">
        <img
          src="/images/foto-livia-araujo.png"
          alt="foto"
          className="mt-10 h-[50%] sm:h-[30rem] sm:w-[60%] lg:mt-6 lg:h-[28rem] lg:w-[50%] xl:mr-24 xl:mt-8 2xl:h-[100vh] 2xl:w-[40%]"
        />
        <div>
          <p className="mt-8 text-purple-100 text-lg lg:w-[100%] xl:mt-8 lg:mt-0">
            Sou uma profissional dedicada e apaixonada por tecnologia e programação.
             Tenho experiência a mais de 1 ano na área, já atuei com desenvolvimento front-end, aplicativos móveis e com cloud computing.
            <br /> Possuo uma forte base em linguagens de programação como JavaScript, TypeScript e Dart, além de experiência em frameworks modernos como Flutter e React.
          </p>

          <div className="mt-6 flex gap-4">
            <button
              onClick={() => setIsEducaton(false)}
              className={
                isEducation == false
                  ? "bg-purple-900 text-white pl-4 pr-4 pt-1 pb-1 rounded-xl text-lg font-semibold"
                  : "bg-[#1c0849] text-purple-300 pl-4 pr-4 pt-1 pb-1 rounded-xl text-lg font-semibold"
              }
            >
              Experiências
            </button>
            <button
              onClick={() => setIsEducaton(true)}
              className={
                isEducation
                  ? "bg-purple-900 text-white pl-4 pr-4 pt-1 pb-1 rounded-xl text-lg font-semibold"
                  : "bg-[#1c0849] text-purple-300 pl-4 pr-4 pt-1 pb-1 rounded-xl text-lg font-semibold"
              }
            >
              Educação
            </button>
          </div>
          {!isEducation ? (
            <div>
              <div className="mt-6">
                <span className="text-purple-900 text-xl">
                  Abril 2024 - Atual
                </span>
                <p className="text-purple-100 text-xl">
                  Desenvolvedora de Software - Universidade Patativa do Assaré
                </p>
              </div>
              <div className="mt-6">
                <span className="text-purple-900 text-xl">2022 - Atual</span>
                <p className="text-purple-100 text-xl">Freelancer</p>
              </div>
              <div className="mt-6">
                <span className="text-purple-900 text-xl">
                  Nov 2022 - Dez 2023
                </span>
                <p className="text-purple-100 text-xl">
                  Desenvolvedora de Software - Avia Delivery
                </p>
              </div>
              <div className="mt-6">
                <span className="text-purple-900 text-xl">
                  Out 2021 - Dez 2021
                </span>
                <p className="text-purple-100 text-xl">
                  Estagiária de TI - Estúdio Esù
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="mt-6">
                <span className="text-purple-900 text-xl">2022 - 2024</span>
                <p className="text-purple-100 text-xl">Análise e Desenvolvimento de Sistemas</p>
                <p className="text-purple-100 text-lg">
                  Centro Universitário Paraíso
                </p>
              </div>
              <div className="mt-6">
                <span className="text-purple-900 text-xl">
                  2022 - 2023
                </span>
                <p className="text-purple-100 text-xl">
                  Técnico em Redes de Computadores
                </p>
                <p className="text-purple-100 text-lg">
                  EEEP Wellington Belém de Figueiredo
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
