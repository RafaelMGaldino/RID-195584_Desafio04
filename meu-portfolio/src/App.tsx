import { Projects, Hero, Header, Footer, About, Certificates } from "./pages";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen">
        <Header />

        <main className="container mx-auto px-4 scroll-mt-20">
          <Hero />
          <Projects />
          <About />
          <Certificates />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
