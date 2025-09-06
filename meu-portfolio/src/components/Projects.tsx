import { useState, useEffect } from "react";

// Imports das imagens
import homeProject1 from "../assets/homeProject1.png";
import loginProject1 from "../assets/loginProject1.png";
import perfilProject1 from "../assets/perfilProject1.png";

import projeto2 from "../assets/projeto2.png";
import projetoa2 from "../assets/projetoa2.png";

import projeto3 from "../assets/projeto3.png";
import projeto3a from "../assets/projeto3a.png";
import projeto3ab from "../assets/projeto3ab.png";

import projeto4 from "../assets/projeto4.png";
import projeto4a from "../assets/projeto4a.png";

function Projects() {
  const projetos = [
    {
      id: 1,
      titulo: "Projeto 1",
      desc: "Projeto Dashboard E-commerce, onde tem integração com API e o Usuário/Empresa pode acessar",
      imagens: [perfilProject1, loginProject1, homeProject1],
      link: "", 
    },
    {
      id: 2,
      titulo: "Projeto 2",
      desc: "Gerenciador de Tarefas, onde o Usuário pode criar, editar e excluir tarefas",
      imagens: [projeto2, projetoa2],
      link: "https://task-mangar.netlify.app",
      
    },
    {
      id: 3,
      titulo: "Projeto 3",
      desc: "Website de Arquetitera, onde o Usuário pode ver os modelos de casas e entrar em contato",
      imagens: [projeto3, projeto3a, projeto3ab],
      link: "https://dnc-arq-rafael-mg-g1j4-80q5vjj5e-rafaelmgaldinos-projects.vercel.app",


    },
    {
      id: 4,
      titulo: "Projeto 4",
      desc: "Projeto de Blog, onde o Usuário pode ler artigos sobre desenvolvimento web",
      imagens: [projeto4, projeto4a],
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
  }, []);

  const prevImage = (i: number) => {
    setCurrentImages(prev => {
      const newImages = [...prev];
      newImages[i] =
        (newImages[i] - 1 + projetos[i].imagens.length) %
        projetos[i].imagens.length;
      return newImages;
    });
  };

  const nextImage = (i: number) => {
    setCurrentImages(prev => {
      const newImages = [...prev];
      newImages[i] = (newImages[i] + 1) % projetos[i].imagens.length;
      return newImages;
    });
  };

  return (
    <section id="projetos" className="projetos py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>
      <div className="projetos-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {projetos.map((p, i) => (
          <div
            key={p.id}
            className="projeto-card bg-white rounded shadow p-4 flex flex-col items-center"
          >
            <div className="projeto-image relative w-full mb-4">
              <img
                src={p.imagens[currentImages[i]]}
                alt={p.titulo}
                className="w-full h-48 object-cover rounded"
              />
              <button
                onClick={() => prevImage(i)}
                className="btn-primary absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
              >
                ◀
              </button>
              <button
                onClick={() => nextImage(i)}
                className="btn-primary absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
              >
                ▶
              </button>
            </div>

            <h3 className="font-semibold text-xl mb-2">{p.titulo}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>

            <div className="projeto-links">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Ver Projeto
                </a>
              ) : (
                <span className="text-gray-400 italic">Em breve...</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

