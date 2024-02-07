interface Tech {
  name: string;
  img: string;
}
export function Technologies() {
  const techs: Tech[] = [
    {
      name: "HTML",
      img: "/images/techs/html.png",
    },
    {
      name: "CSS",
      img: "/images/techs/css.png",
    },
    {
      name: "Javascript",
      img: "/images/techs/javascript.png",
    },
    {
      name: "Typescript",
      img: "/images/techs/typescript.png",
    },
    {
      name: "Flutter",
      img: "/images/techs/flutter.png",
    },
    {
      name: "Dart",
      img: "/images/techs/flutter.png",
    },

    {
      name: "Github",
      img: "/images/techs/git.png",
    },
    {
      name: "Github",
      img: "/images/techs/github.png",
    },
      {
      name: "Figma",
      img: "/images/techs/figma.png",
    },
     {
      name: "React",
      img: "/images/techs/react.png",
    },
      {
      name: "Next Js",
      img: "/images/techs/nextjs.png",
    },
    {
      name: "Node Js",
      img: "/images/techs/nodejs.png",
    },
    {
        name: "Tailwind",
        img: "/images/techs/tailwind.png"
    },
     {
        name: "Sass",
        img: "/images/techs/sass.png"
    },
      {
        name: "Firebase",
        img: "/images/techs/firebase.png"
    },
      {
        name: "Linux",
        img: "/images/techs/linux.png"
    },
      {
        name: "Docker",
        img: "/images/techs/docker.png"
    },
      {
        name: "Google Cloud",
        img: "/images/techs/google-cloud.png"
    },
      {
        name: "Azure",
        img: "/images/techs/azure.png"
    }
  ];

  return (
    <section className="pb-28 px-10 lg:px-12 lg-pt-20 xl:px-28 flex flex-col items-center">
      <h2 className="text-white text-4xl font-bold mb-3 my-2 leading-10 text-center lg:text-5xl">
        Tecnologias
      </h2>

      <div className="grid grid-cols-3 mt-10 sm:grid-cols-4 lg:grid-cols-5 lg:items-start lg:justify-start xl:w-[80%] xl:grid-cols-6 ">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center gap-2 mt-6 cursor-pointer transition-transform duration-300 w-18 transform-gpu hover:scale-125"
          >
            <img src={tech.img} alt={`Logo ${tech.name}`} className="h-16 xl:h-18" />
            <p className="text-purple-100 text-lg font-semibold text-center md:text-xl">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
