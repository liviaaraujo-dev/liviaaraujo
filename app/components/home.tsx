import { FiArrowUpRight } from "react-icons/fi";

export function Home() {
  return (
    <section
      id="home"
      className="bg-[url('/images/bg-fullhd.png')] flex flex-col px-8 py-16 md:flex-row-reverse md:lg:items-start md:justify-between md:h-[70vh] md:px-12 lg:px-14 lg:pt-20 lg:h-[100vh] xl:px-28 2xl:justify-end 2xl:pt-40"
    >
      <img
        src="/images/foto1234.png"
        alt="foto"
        className="mt-10 h-[50%] md:h-[20rem] lg:mt-6 lg:h-[26rem] xl:lg:h-[32rem]  xl:mr-24 xl:mt-16"
      />

      <div className="flex flex-col mt-10 md:mt-20 lg:mt-24 xl:mt-44">
        <p className="text-white text-3xl font-bold leading-10 lg:text-6xl">
          Olá!
        </p>

        <p className="text-white text-3xl font-bold leading-10 lg:text-6xl">
          Eu sou <span className="text-purple-900">Lívia Araujo</span>,
        </p>

        <p className="text-white text-3xl font-bold mb-3 my-2 leading-10 lg:text-6xl">
          Frontend Developer
        </p>

        <div className="flex flex-col items-start mt-6 gap-6 lg:gap-8 lg:flex-row">
          <a
            href="https://www.linkedin.com/in/liviaaraujodev"
            target="_blank"
            className="text-purple-900 text-xl font-bold flex justify-center items-center transition-transform duration-300 transform-gpu hover:scale-125 lg:text-2xl"
          >
            Linkedin
            <FiArrowUpRight fontWeight={"900"} color="#7F4FEB" size={"30"} />
          </a>
          <a
            href="https://github.com/liviaaraujo-dev"
            target="_blank"
            className="text-purple-900 text-xl font-bold flex justify-center items-center transition-transform duration-300 transform-gpu hover:scale-125 lg:text-2xl"
          >
            Github
            <FiArrowUpRight fontWeight={"900"} color="#7F4FEB" size={"30"} />
          </a>
          <a
            href="https://www.instagram.com/liviaaraujo._/"
            target="_blank"
            className="text-purple-900 text-xl font-bold flex justify-center items-center transition-transform duration-300 transform-gpu hover:scale-125 lg:text-2xl"
          >
            Instagram
            <FiArrowUpRight fontWeight={"900"} color="#7F4FEB" size={"30"} />
          </a>
        </div>
      </div>
    </section>
  );
}
