export function Projects() {
  return (
    <section className="pb-28 px-10 lg:px-12 lg-pt-28 xl:px-28 flex flex-col items-center">
      <h2 className="text-white text-4xl font-bold mb-3 my-2 leading-10 text-center lg:text-5xl">
        Projetos
      </h2>
      
      <div className="flex flex-col items-center">
        <div className="bg-purple-black-800 px-10 py-6 w-[80%] flex flex-col gap-8 mt-8 rounded-lg lg:flex-row">
          <img src="/images/print.png" alt="" className="w-[40%]" />
          <div className="flex flex-col gap-4 ">
            <h3 className="text-white font-bold text-2xl">Arc Carrousel</h3>

            <div className="flex gap-2">
              <div className="border-purple-700 border px-3 rounded-2xl flex items-center justify-center">
                <p className="text-white text-sm">React</p>
              </div>
              <div className="border-purple-700 border px-3 rounded-2xl flex items-center justify-center">
                <p className="text-white text-sm">Typescript</p>
              </div>
            </div>

            <p className="text-white text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit
            </p>

            <div className="flex gap-4">
              <button className="bg-purple-700 px-4 h-10 rounded-xl flex items-center justify-center">
                <p className="text-white text-lg font-semibold">WebSite</p>
              </button>

              <button className="border-purple-700 border px-4 h-10 rounded-xl flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Código</p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-purple-black-800 px-10 py-6 w-[80%] flex flex-col gap-8 mt-8 rounded-lg lg:flex-row">
          <img src="/images/print2.png" alt="" className="w-[40%]" />
          <div className="flex flex-col gap-4 ">
            <h3 className="text-white font-bold text-2xl">Arc Carrousel</h3>

            <div className="flex gap-2">
              <div className="border-purple-700 border px-3 rounded-2xl flex items-center justify-center">
                <p className="text-white text-sm">React</p>
              </div>
              <div className="border-purple-700 border px-3 rounded-2xl flex items-center justify-center">
                <p className="text-white text-sm">Typescript</p>
              </div>
            </div>

            <p className="text-white text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit
            </p>

            <div className="flex gap-4">
              <button className="bg-purple-700 px-4 h-10 rounded-xl flex items-center justify-center">
                <p className="text-white text-lg font-semibold">WebSite</p>
              </button>

              <button className="border-purple-700 border px-4 h-10 rounded-xl flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Código</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
