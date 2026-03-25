import { useTranslation } from 'react-i18next';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Sobre from './components/sobre';
import Competencias from './components/competencias';
import SkillBars from './components/skillbars';
import Extra from './components/extra';
import Experiencia from './components/experiencia';
import Projetos from './components/projetos';
import Formulario from './components/formulario';
import Contacto from './components/contacto';
import imgprojeto1 from './assets/imgprojeto1.png';
import { FileText } from 'lucide-react';
import { DiGithubBadge,  } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

function App() {
  
  const { t } = useTranslation();

  return (
    <div className="bg-white selection:bg-blue-100">
      <Navbar />

      <main>
        <section id="inicio" className="min-h-screen">
          <Hero />
        </section>

        <section id="sobre" className="py-20 bg-zinc-900/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-black mb-7">SOBRE MIM</h1>
          <Sobre />
        </div>
        </section>                

       <section id="experiencia" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-2">Linha do Tempo</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white">Percurso</h3>
            </div>
            <a 
              href="/cv-diogo.pdf" 
              download
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-400 px-5 py-3 rounded-xl hover:text-white hover:border-blue-500 transition-all group"
              title="Download CV(PT)">
              <span className="text-sm font-bold">CV(PT)</span>
              <FileText size={18} className="group-hover:scale-110 transition-transform" /></a>
            <a 
              href="/cv-diogo-espanhol.pdf" 
              download
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-400 px-5 py-3 rounded-xl hover:text-white hover:border-blue-500 transition-all group"
              title="Download CV(ES)">
              <span className="text-sm font-bold">CV(ES)</span>
              <FileText size={18} className="group-hover:scale-110 transition-transform" /></a>
            <a 
              href="/cv-diogo-english.pdf" 
              download
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-400 px-5 py-3 rounded-xl hover:text-white hover:border-blue-500 transition-all group"
              title="Download CV(EN)">
              <span className="text-sm font-bold">CV(EN)</span>
              <FileText size={18} className="group-hover:scale-110 transition-transform" /></a>
            <a href="https://github.com/FORTI-4" 
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-400 px-5 py-3 rounded-xl hover:text-white hover:border-blue-500 transition-all group" 
              target="_blank"
              title="GitHub">
              <span className="text-sm font-bold">GitHub</span><DiGithubBadge size={20} /></a>
            <a href="https://www.linkedin.com/in/diogo-oliveira-783a92387/" 
              className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-400 px-5 py-3 rounded-xl hover:text-white hover:border-blue-500 transition-all group"
              target="_blank"
              title="LinkedIn">
              <span className="text-sm font-bold">LinkedIn</span><FaLinkedin size={18} /></a>
          </div>
          <Experiencia />           
        </div>
      </section>

        <section id="competencias" className="py-20 bg-zinc-950/1">
          <h3 className="text-4xl font-black text-gray-900 text-center pb-10">Competências Técnicas</h3>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Competencias />
          <SkillBars />
        </div>
        <section id="extra" className="py-25">
        <div className="-auto px-6">
          <Extra />
        </div>
        </section>
        </section>        

        <section id="projetos" className="py-24 px-6 bg-black text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black mb-12">Projetos</h2>
            <Projetos imagem={imgprojeto1} nome="Treino Freestyle Rap" descricao="Um projeto realizado em Javafx no NetBeans com a implementação de uma API também realizada por mim em Java com o apoio do Spring Boot. A função deste projeto é tentar apoiar as novas pessoas ou pessoas que já estão neste mundo, para poderem melhorar." />
          </div>
        </section>   
        
        <section id="formulario" className="bg-slate-900 py-20 px-20 text-left">
          <h1 className="text-4xl font-black mb-12 text-white">Formulário</h1>
        <Formulario />
        </section>

      </main>
      <footer className="bg-zinc-900 p-6 text-center text-gray-500 text-sm">
          <p><Contacto /></p>
          <p className="m-4">© 2026 Diogo Oliveira. Construído com React e Tailwind CSS.</p>
        </footer>
    </div>
  );
}

export default App;