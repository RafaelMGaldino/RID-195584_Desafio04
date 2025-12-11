
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../language/texts";
import LinkedinIcon from "../assets/Linkedin.svg";
import GithubIcon from "../assets/github.svg";

function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const t = texts[lang].header;

  return (
    <header className="header bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">

        <a href="#" className="logo text-xl font-bold">
          Rafael Martins - {new Date().getFullYear()}
        </a>

      <nav className="flex-1 flex justify-center gap-8">
        <a href="#projetos" className="hover:text-blue-500">{t.projects}</a>
        <a href="#sobre" className="hover:text-blue-500">{t.about}</a>
        <a href="#formaçao" className="hover:text-blue-500">{t.certificates}</a>
      </nav>


        <nav className=" flex justify-center gap-8 items-center">
           
          <button
            onClick={toggleLanguage}
           className="btn  btn-tercery bg-blue-200 text-white w-6 h-6 hover:opacity-80 gradient-primary ">
            {t.button ?? (lang === "pt" ? "EN" : "PT")
            }
            
          </button>

          <a href="http://www.linkedin.com/in/rafaelmgaldino" target="_blank" rel="noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" className="  w-6 h-6 hover:opacity-80" />
          </a>

          <a href="https://github.com/rafaelmgaldino" target="_blank" rel="noreferrer">
            <img src={GithubIcon} alt="GitHub" className=" w-6 h-6 hover:opacity-80" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
