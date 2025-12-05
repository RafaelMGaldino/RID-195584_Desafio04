import { useLanguage } from "../context/LanguageContext";
import { texts } from "../language/texts";

export default function About() {
  const { lang } = useLanguage();
  const { title, text } = texts[lang].about;

  return (
    <section id="sobre" className="py-16">
      <h2>{title}</h2>
      <p className="mx-auto text-gray-300 whitespace-pre-line">{text}</p>
    </section>
  );
}