import { FiArrowUpRight } from "react-icons/fi";

export function Home() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row-reverse px-10 md:lg:items-start md:justify-between md:h-[70vh] md:px-12 lg:px-20 lg:pt-4 lg:h-[90vh] xl:px-28 2xl:justify-end 2xl:pt-40"
    >
      <img
        src="/images/foto1.png"
        alt="foto"
        className="mt-10 h-[50%] md:h-[20rem] lg:mt-6 lg:h-[32rem] xl:mr-24 xl:mt-16"
      />

      <div className="flex flex-col mt-10 lg:mt-36">
        <p className="text-white text-4xl font-bold mb-3 my-2 leading-10 lg:text-6xl">
          Olá!
        </p>

        <p className="text-white text-4xl font-bold mb-3 my-2 leading-10 lg:text-6xl">
          Eu sou <span className="text-purple-900">Lívia Araujo</span>,
        </p>

        <p className="text-white text-4xl font-bold mb-3 my-2 leading-10 lg:text-6xl">
          Frontend Developer
        </p>

        <div className="flex flex-col items-start mt-4 gap-4 lg:gap-8 lg:flex-row">
          <a
            href=""
            className="text-purple-900 text-xl font-bold flex justify-center items-center"
          >
            Linkedin
            <FiArrowUpRight fontWeight={"900"} color="#7F4FEB" size={"30"} />
          </a>
          <a
            href=""
            className="text-purple-900 text-xl font-bold flex justify-center items-center"
          >
            Github
            <FiArrowUpRight fontWeight={"900"} color="#7F4FEB" size={"30"} />
          </a>
          <a
            href=""
            className="text-purple-900 text-xl font-bold flex justify-center items-center"
          >
            Instagram
            <FiArrowUpRight fontWeight={"900"} color="#7F4FEB" size={"30"} />
          </a>
        </div>

        {/* <p className="text-purple-100 text-lg font-normal mt-4 lg:w-[80%]">
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. 8 years
          of professional experience, specializing in backend development.{" "}
        </p> */}

        {/* <div className="flex gap-4 mt-4">
          <a href="https://github.com/liviaaraujo-dev" target="_blank">
            <FaGithub size={35} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/liviaaraujodev" target="_blank">
            <FaLinkedin size={35} color="white" />
          </a>
          <a href="https://wa.me/558892858695" target="_blank">
            <MdOutlineWhatsapp size={40} color="white" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
