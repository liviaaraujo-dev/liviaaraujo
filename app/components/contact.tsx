"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdOutlineWhatsapp } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { database } from "@/services/firebase";
import { ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isInvalidForm, setIsInvalidForm] = useState(false)

  async function clickSave(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    if (name.length < 1 || email.length < 1 || message.length < 1) {
      setIsInvalidForm(true);
      return;
    }

    const uuid = uuidv4();

    set(ref(database, `messages/${uuid}`), {
      name: name,
      email: email,
      message: message,
    })

    toast.success("Enviado com sucesso!");

    setName("");
    setEmail("");
    setMessage("");

    setIsInvalidForm(false);
  }

  return (
    <section className="flex flex-col items-center justify-center px-6 pb-20">
      <h2 className="text-white text-4xl font-bold leading-10 text-center lg:text-5xl">
        Contato
      </h2>
      <div className="flex flex-col w-full justify-center gap-10 mt-10 lg:mt-16 lg:flex-row">
        <div className="flex gap-4 mt-2 flex-col">
          <a
            href="mailto:liviaaraujo.dev@gmail.com"
            target="_blank"
            className="flex items-center gap-2"
          >
            <MdEmail size={30} color="white" />
            <span className="text-white font-semibold text-lg">
              liviaaraujo.dev@gmail.com
            </span>
          </a>
          <a
            href="https://wa.me/558892858695"
            target="_blank"
            className="flex items-center"
          >
            <MdOutlineWhatsapp size={32} color="white" />
            <span className="text-white font-semibold text-lg">
              +55 (88) 992858695
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/liviaaraujodev"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FaLinkedin size={30} color="white" />
            <span className="text-white font-semibold text-lg">
              liviaaraujo-dev
            </span>
          </a>
        </div>

        <form action="" className="flex flex-col w-full lg:w-[40%] gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="bg-purple-black-700 py-4 px-4 rounded-lg text-xl text-white placeholder:text-gray-400 placeholder:font-medium"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-purple-black-700 py-4 px-4 rounded-lg text-xl text-white placeholder:text-gray-400 placeholder:font-medium"
          />
          <textarea
            placeholder="Mensagem"
            className="bg-purple-black-700 resize-none py-4 px-4 pb-20 rounded-lg text-xl text-white placeholder:text-gray-400 placeholder:font-medium"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {isInvalidForm && <p className="text-lg text-red-500">Preencha todos os campos!</p>}
          <button
            onClick={(e) => clickSave(e)}
            className="bg-purple-900 w-[8rem] text-white py-2 rounded-md text-xl font-medium flex items-center justify-center"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
