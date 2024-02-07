"use client";

import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
    
export function Header() {

    const [isMenu, setIsMenu] = useState<boolean>(false);

    return (
        <header className={
            isMenu ? "bg-purple-black-900 fixed top-0 left-0 right-0 z-50 px-10 py-2.5 h-full lg:flex" 
            : "bg-black/95 fixed top-0 left-0 right-0 z-50 px-10 py-2.5 lg:flex lg:px-18 lg:items-center xl:px-28"}>
                
            <div className="flex w-full justify-between">
                <h1 className="lg:mt-2">
                    <img src="/images/logo-purple.png" alt="Lívia Araujo" className="h-14 2xl:h-24"/>
                </h1>
                <button onClick={() => setIsMenu(!isMenu)} className="lg:hidden">
                    {
                        isMenu ? <MdClose size={40} color="#fff" /> :  <MdMenu size={40} color="#fff"/> 
                    }       
                </button>
            </div>
            
            <nav className={isMenu ? "flex mt-20" : "hidden lg:flex"}>
                <ul 
                className="text-purple-200 text-xl font-medium flex flex-col gap-8 lg:flex-row lg:gap-12">
                    <li>
                        <a href="#home" className="hover:text-purple-900">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-purple-900">Sobre</a>
                    </li>
                    <li>
                        <a href="#technologies" className="hover:text-purple-900">Tecnologias</a>
                    </li>
                    
                    <li>
                        <a href="#projects" className="hover:text-purple-900">Projetos</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-purple-900">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
