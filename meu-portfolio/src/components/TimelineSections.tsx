/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../language/texts";

function Badge({ finished }: { finished: boolean }) {
  return (
    <div
      className={`w-4 h-4 rounded-full shadow ${
        finished ? "bg-green-500" : "bg-yellow-400 animate-pulse"
      }`}
    />
  );
}

function VerticalItem({ item }: any) {
  return (
    <div className="relative pl-10">
      
      <div className="absolute left-0 top-4">
        <Badge finished={item.finished} />
      </div>

      <div className="bg-white dark:bg-[#0f172a] p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 
                      hover:-translate-y-1 transition-all duration-300">

        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-semibold text-xl text-slate-900 dark:text-slate-100">
              {item.title}
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {item.institution}
            </p>
          </div>

          <span className="text-xs text-slate-500 dark:text-slate-400">
            {item.date}
          </span>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
          {item.short}
        </p>

        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {item.details}
        </p>

      </div>
    </div>
  );
}

export default function TimelineSections() {
  const { lang } = useLanguage();
  const t = texts[lang].formation; // 👈 Agora pega PT/EN automaticamente

  return (
    <section id="formacao" className="container mx-auto px-4 scroll-mt-20">

      <div className="max-w-4xl mx-auto mt-4 gap-8 px-6 py-16">

        <header className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold">{t.title}</h2>
          <p className="text-slate-500 mt-2">{t.subtitle}</p>
        </header>

        <div className="border-l-4 border-slate-300 dark:border-slate-700 pl-6">
          {t.list.map((item) => (
            <div key={item.id} className="mb-16">
              <VerticalItem item={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
