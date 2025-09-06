import {Projects,Hero, Header, Footer, About} from './components'

function App() {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 scroll-mt-20">
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;