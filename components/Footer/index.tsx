import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";

export function Footer() {
  return (
    <footer>
      <div className="md:text-center ml-8" >
        <p>
          <span className="text-[#BA00EF] text-lg">© Lívia Araujo 2023</span>
          <p>
            Todos os
            direitos reservados
          </p>
        </p>
      </div>

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
    </footer>
  )
}

