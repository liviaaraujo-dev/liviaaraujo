import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";

export function Footer(){
    return(
        <footer>
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
        </footer>
    )
}