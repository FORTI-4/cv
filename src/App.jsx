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

function App() {
  return (
    <div className="bg-white selection:bg-blue-100">
      <Navbar />

      <main>
        <section id="inicio" className="min-h-screen">
          <Hero />
        </section>

        <section id="sobre" className="py-24 bg-zinc-900/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-black mb-7">SOBRE MIM</h1>
          <Sobre />
        </div>
        </section>                

        <section id="experiencia" className="py-24 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black mb-12">Percurso</h2>
              <Experiencia cargo="Estagiário" empresa="WFR" periodo="2025" descricao="Apoio técnico no desenvolvimento e manutenção de sistemas informáticos, com foco na otimização de fluxos de trabalho internos." />
          </div>
        </section>

        <section id="competencias" className="py-24 bg-zinc-950/1">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Competencias />
          <SkillBars />
        </div>
        </section>

        <section className="py-24 bg-zinc-100">
        <div className="max-w-4xl mx-auto px-6">
          <Extra />
        </div>
        </section>

        <section id="projetos" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black mb-12">Projetos</h2>
            <Projetos imagem={imgprojeto1} nome="Treino Freestyle Rap" descricao="Um projeto realizado em Javafx no NetBeans com a implementação de uma API também realizada por mim em Java com o apoio do Spring Boot. A função deste projeto é tentar apoiar as novas pessoas ou pessoas que já estão neste mundo, para poderem melhorar." />
          </div>
        </section>   
        <Formulario />     
      </main>
      <footer className="bg-zinc-900 p-6 text-center text-gray-500 text-sm">
          <p><Contacto /></p>
          <p className="m-4">© 2026 Diogo Oliveira. Construído com React e Tailwind CSS.</p>
        </footer>
    </div>
  );
}

export default App;