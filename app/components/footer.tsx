import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";

export function Footer() {
  return (
    <footer className="flex flex-col bg-purple-black-800 px-6 pt-16 pb-10 lg:pb-6 lg:pt-8 lg:px-32">
      <div className="flex justify-between">
        <img
          src="/images/logo-purple.png"
          alt="Lívia Araujo Logo"
          className="h-14 2xl:h-24"
        />

        <div className="flex gap-4 mt-2">
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

      <div className="md:text-center mt-20 lg:mt-4">
          <span className="text-purple-900 text-xl">© Lívia Araujo 2024</span>
          <p className="text-white text-xl">Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
