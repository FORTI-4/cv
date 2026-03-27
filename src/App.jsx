import { useTranslation } from 'react-i18next';
import './i18n';
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
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

function App() {
  const { t } = useTranslation();

  return (
    <div className="bg-white selection:bg-blue-100 ">
      <Navbar />

      <main>
        <section id="inicio" className="min-h-screen">
          <Hero />
        </section>

        <section id="sobre" className="py-24 bg-zinc-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-10 text-zinc-900">{t('about_title')}</h2>
            <Sobre />
          </div>
        </section>

        <section id="experiencia" className="py-24 bg-zinc-950 border-y border-zinc-900">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-2">{t('timeline_subtitle')}</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white">{t('experience_title')}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'PT', file: 'cv-diogo-pt.pdf' },
                  { label: 'ES', file: 'cv-diogo-es.pdf' },
                  { label: 'EN', file: 'cv-diogo-en.pdf' }
                ].map((cv) => (
                  <a 
                    key={cv.label}
                    href={`${import.meta.env.BASE_URL}${cv.file}`}
                    download
                    className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-400 px-4 py-2 rounded-xl hover:text-white hover:border-blue-500 transition-all text-xs font-bold"
                  >
                    {cv.label} <FileText size={14} />
                  </a>
                ))}
                
                <a 
                  href="https://github.com/FORTI-4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-xl hover:text-white hover:border-blue-500 transition-all"
                  title="GitHub"
                >
                  <DiGithubBadge size={22} />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/diogo-oliveira-783a92387/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-xl hover:text-white hover:border-blue-500 transition-all"
                  title="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
            <Experiencia />
          </div>
        </section>

        <section id="competencias" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-4xl font-black text-zinc-900 text-center mb-16">{t('skills_title')}</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <Competencias />
              <SkillBars />
            </div>

            <div className="pt-10 border-t border-zinc-100">
              <Extra />
            </div>
          </div>
        </section>

        <section id="projetos" className="py-24 bg-black text-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-black mb-16">{t('projects_title')}</h2>
            <Projetos imagem={imgprojeto1} nome={t('project1_name')} descricao={t('project1_desc')} />
          </div>
        </section>

        <section id="formulario" className="bg-slate-950 py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-black mb-12 text-white text-center">{t('form_title')}</h2>
            <Formulario />
          </div>
        </section>
      </main>

      <footer className="bg-zinc-950 py-12 border-t border-zinc-900 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <Contacto />
          <p className="mt-8 text-zinc-500 text-sm">
            © 2026 Diogo Oliveira. {t('footer_text')}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;