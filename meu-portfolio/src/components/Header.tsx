import { useState } from "react";
import LinkedinIcon from "../assets/Linkedin.svg";
import GithubIcon from "../assets/github.svg";

function Header() {
  const [menuOpen] = useState(false);

  return (
    <header className="header bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo*/}
        <a href="#" className="logo text-xl font-bold">
          Rafael Martins - {new Date().getFullYear()} 
        </a>

        {/* Navegação */}
        <nav
          className={`flex-1 flex justify-center gap-8 ${
            menuOpen ? "flex-col" : ""
          }`}
        >
          <a href="#projetos" className="hover:text-blue-500">
            Projetos
          </a>
          <a href="#sobre" className="hover:text-blue-500">
            Sobre mim
          </a>
        </nav>

        {/* Ícones sociais*/}
        <div className="flex gap">
          <a
            href="http://www.linkedin.com/in/rafaelmgaldino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedinIcon}
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
          <a
            href="https://github.com/rafaelmgaldino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              alt="GitHub"
              className="w-6 h-6 hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
