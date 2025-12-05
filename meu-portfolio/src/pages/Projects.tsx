/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../language/texts";


import * as Images from "../assets";

function Projects() {
  const { lang } = useLanguage();
  const t = texts[lang].projects;

  const projetos = [
    {
      id: 1,
      ...t.list[0],
      imagens: [Images.perfilProject1, Images.loginProject1, Images.homeProject1],
      link: "",
    },
    {
      id: 2,
      ...t.list[1],
      imagens: [Images.projeto2, Images.projetoa2],
      link: "https://task-mangar.netlify.app",
    },
    {
      id: 3,
      ...t.list[2],
      imagens: [Images.projeto3, Images.projeto3a, Images.projeto3ab],
      link: "https://dnc-arq-rafael-mg-g1j4-80q5vjj5e-rafaelmgaldinos-projects.vercel.app",
    },
    {
      id: 4,
      ...t.list[3],
      imagens: [Images.projeto4, Images.projeto4a],
      link: "https://procjet-blog-dev-responsive-rafaelmg.netlify.app",
    },
  ];

  const [currentImages, setCurrentImages] = useState(projetos.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prev =>
        prev.map((imgIndex, i) => (imgIndex + 1) % projetos[i].imagens.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [lang, projetos]);

  return (
    <section id="projetos" className="projetos py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-12 text-center">{t.title}</h2>

      <div className="projetos-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {projetos.map((p, i) => (
          <div key={p.id} className="projeto-card bg-white rounded shadow p-4 flex flex-col items-center">
            
            <div className="projeto-image relative w-full mb-4">
              <img
                src={p.imagens[currentImages[i]]}
                alt={p.titulo}
                className="w-full h-[280px] object-contain bg-gray-50 rounded"
              />
            </div>

            <h3 className="font-semibold text-xl mb-2">{p.titulo}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>

            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded 
                           hover:bg-blue-600 transition"
              >
                {t.seeProject}
              </a>
            ) : (
              <span className="text-gray-400 italic">{t.soon}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
