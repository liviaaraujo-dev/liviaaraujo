interface Tech {
  id: number;
  name: string;
  img: string;
}
export function Technologies() {
  const techs: Tech[] = [
    {
      id: 1,
      name: "HTML",
      img: "/images/techs/html.png",
    },
    {
      id: 2,
      name: "CSS",
      img: "/images/techs/css.png",
    },
    {
      id: 3,
      name: "Javascript",
      img: "/images/techs/javascript.png",
    },
    {
      id: 4,
      name: "Typescript",
      img: "/images/techs/typescript.png",
    },
    {
      id: 5,
      name: "React",
      img: "/images/techs/react.png",
    },
    {
      id: 6,
      name: "Flutter",
      img: "/images/techs/flutter.png",
    },
    {
      id: 7,
      name: "Dart",
      img: "/images/techs/dart.png",
    },

    {
      id: 8,
      name: "Git",
      img: "/images/techs/git.png",
    },
    {
      id: 9,
      name: "Github",
      img: "/images/techs/github.png",
    },

    {
      id: 10,
      name: "Next Js",
      img: "/images/techs/next.png",
    },
    {
      id: 11,
      name: "Node Js",
      img: "/images/techs/nodejs.png",
    },
    {
      id: 12,
      name: "Tailwind",
      img: "/images/techs/tailwind.png",
    },
    {
      id: 15,
      name: "Firebase",
      img: "/images/techs/firebase.png",
    },
    {
      id: 16,
      name: "Linux",
      img: "/images/techs/linux.png",
    },
    {
      id: 17,
      name: "Docker",
      img: "/images/techs/docker.png",
    },
    {
      id: 18,
      name: "AWS",
      img: "/images/techs/aws.png",
    },
    {
      id: 19,
      name: "Azure",
      img: "/images/techs/azure.png",
    },
    
    {
      id: 14,
      name: "VS Code",
      img: "/images/techs/vs-code.png",
    },
  ];

  return (
    <section className="pb-28 px-6 lg:px-12 lg-pt-20 xl:px-28 flex flex-col items-center">
      <h2 className="text-white text-4xl font-bold mb-3 my-2 leading-10 text-center lg:text-5xl">
        Tecnologias
      </h2>

      <div className="grid grid-cols-3 mt-10 sm:grid-cols-4 lg:grid-cols-5 lg:items-start lg:justify-start xl:w-[80%] xl:grid-cols-6 ">
        {techs.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center justify-center gap-2 mt-6 cursor-pointer transition-transform duration-300 w-18 transform-gpu hover:scale-125"
          >
            <img
              src={tech.img}
              alt={`Logo ${tech.name}`}
              className="h-16 xl:h-18"
            />
            <p className="text-purple-100 text-lg font-semibold text-center md:text-xl">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
