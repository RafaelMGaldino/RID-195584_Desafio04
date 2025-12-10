import { useLanguage } from "../context/LanguageContext";
import { texts } from "../language/texts";
import LinkedinIcon from "../assets/Linkedin.svg";
import GithubIcon from "../assets/github.svg";


function Footer() {
  const { lang } = useLanguage();
  const t = texts[lang].footer;

  return (
   <footer className="footer mx-auto flex justify-between items-center px-4 py-4">
  <div>
    <span>
      {t.contact}
      <br /> 88 92180-9705
    </span>
  </div>

  <div>
    <span>
      {t.email}
      <br /> rafaelmartinsgaldino2020@gmail.com
    </span>
  </div>

  <nav className="flex justify-center items-center gap-6 ml-4 backgro">
    <a
      href="http://www.linkedin.com/in/rafaelmgaldino"
      target="_blank"
      rel="noreferrer"
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
      rel="noreferrer"
    >
      <img
        src={GithubIcon}
        alt="GitHub"
        className="w-6 h-6 hover:opacity-80"
      />
    </a>
  </nav>
</footer>

  );
}

export default Footer;
