import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { Header } from "../components/header";
import { IoLogoJavascript } from "react-icons/io5";


export default function App() {
  return (
    <>
        <Header />
        <main className=" bg-purple-black-900">
             <div className="flex items-start justify-start w-[100%] my-4 mt-20">
               <img src="/images/indecor.png" alt="Projeto Indecor" className="w-[100%] " />

                <FaCss3Alt color="#7F4FEB" size="35" />
                <FaHtml5 color="#7F4FEB" size="35" />
                <IoLogoJavascript color="#7F4FEB" size="35" />

               </div>
               <h3 className="text-xl font-bold text-white">Indecor</h3>
               <p className="text-white text-base">Uma landing page do evento InDecor, focado em design de interiores.</p>
        </main>
    </>
  );
}

