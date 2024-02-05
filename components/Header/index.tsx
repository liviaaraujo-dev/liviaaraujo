"use client";

import Image from "next/image";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

export function Header() {

    const [isMenu, setIsMenu] = useState<boolean>(false);

    return (
        <header className={isMenu ? "bg-purple-black-900 fixed top-0 left-0 right-0 z-50 px-10 py-4 lg:flex h-[100vh]" : "bg-purple-black-900 fixed top-0 left-0 right-0 z-50 px-10 py-4 lg:flex lg:px-18 lg:items-center xl:px-28"}>
            <div className="flex w-[100%] justify-between">
                <h1 className="lg:mt-2">
                    <Image src="/images/logo-purple.png" alt="Lívia Araujo" height={70} width={70}/>
                </h1>
                <button onClick={() => setIsMenu(!isMenu)} className="lg:hidden">
                    {
                        isMenu ? <MdClose size={40} color="#fff" /> :  <MdMenu size={40} color="#fff"/> 
                    }
                        
                </button>
            </div>
            
            <nav className={isMenu ? "flex mt-20" : "hidden lg:flex"}>
                <ul className="text-purple-200 text-xl font-medium flex flex-col gap-8 lg:flex lg:text-2xl lg:flex-row lg:gap-10">
                    <li>
                        <a href="#" className="hover:text-purple-900">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-purple-900">Sobre</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-purple-900">Skills</a>
                    </li>
                    
                    <li>
                        <a href="#" className="hover:text-purple-900">Projetos</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-purple-900">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
