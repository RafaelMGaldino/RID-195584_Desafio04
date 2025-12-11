import { useLanguage } from "../context/LanguageContext";
import { texts } from "../language/texts";
import LinkedinIcon from "../assets/Linkedin.svg";
import GithubIcon from "../assets/github.svg";

function Footer() {
  const { lang } = useLanguage();
  const t = texts[lang].footer;

  return (
    <footer className="footer w-full py-6">
      <nav className="max-width justify-center flex gap-20 px-4">
        <div className="flex flex-col gap-1 ">
          <span className="font-semibold text-lg">{t.contact}</span>
          <span>88 92180-9705</span>
        </div>

        <div className="flex flex-col gap-1 margin-left">
          <span className="font-semibold text-lg">{t.email}</span>
          <span>rafaelmartinsgaldino2020@gmail.com</span>
        </div>

        <div className="flex items-center">
          <a
            href="http://www.linkedin.com/in/rafaelmgaldino"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-gray-700 transition"
          >
            <img src={LinkedinIcon} alt="LinkedIn" className="w-7 h-7" />
          </a>

        </div>
         <div className="flex items-center">
        
          <a
            href="https://github.com/rafaelmgaldino"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-gray-700 transition"
          >
            <img src={GithubIcon} alt="GitHub" className="w-7 h-7" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
