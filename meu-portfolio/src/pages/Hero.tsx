import { useLanguage } from "../context/LanguageContext";
import { texts } from "../language/texts";

function Hero() {
  const { lang } = useLanguage();
  const t = texts[lang].hero;

  return (
    <section className="hero text-center py-16">
      <h2>{t.title}</h2>
      <p>{t.subtitle}</p>
      <a href="#projetos" className="btn btn-primary">
        {t.button}
      </a>
    </section>
  );
}

export default Hero;
