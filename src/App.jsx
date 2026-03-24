import Navbar from './components/navbar';
import Sobre from './components/sobre';
import Experiencia from './components/experiencia'; 
import Competencias from './components/competencias';
import SkillBars from './components/skillbars';
import Extra from './components/extra';
import Projetos from './components/projetos';
import Formulario from './components/formulario';
import imgprojeto1 from './assets/imgprojeto1.png';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
    <div className="min-h-screen bg-gray-50 p-4 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        
        <header className="bg-blue-600 p-10 text-white text-center">
          <h1 className="text-5xl font-black">Diogo Oliveira</h1>
          <p className="text-xl opacity-90 mt-2">Técnico de Informática & Sistemas</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          <aside className="bg-slate-50 p-8 border-r border-gray-100">

            <section id="sobre"><Sobre /></section>
            <section id="competencias"><Competencias /></section>
            <br></br>
            <SkillBars />
            <br></br>
            <section id="extra"><Extra /></section>

            <div className="mt-10 p-4 bg-blue-50 rounded-xl">
              <section id="contacta">
              <h3 className="font-bold text-blue-800">Contacto Direto</h3>
              <p className="text-sm text-blue-600 mt-2">📍 Esposende, Braga, Portugal</p>
              <p className="text-sm text-blue-600">📱 +351 965 146 268</p>
              <p className="text-sm text-blue-600">📧 diogooliveiraibz@gmail.com</p>
              </section>
            </div>
          </aside>

          <main className="lg:col-span-2 p-8">
            <section id="experiencia">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Percurso Profissional</h2>
              <Experiencia cargo="Estagiário" empresa="WFR" periodo="2025" descricao="Apoio técnico no desenvolvimento e manutenção de sistemas informáticos, com foco na otimização de fluxos de trabalho internos." />
              <Experiencia cargo="Estagiário" empresa="Grupo Érre" periodo="2026" />
            </section>

            <section id="projetos" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Projetos em Destaque</h2>
              <Projetos imagem={imgprojeto1} nome="Treino Freestyle Rap" descricao="Um projeto realizado em Javafx no NetBeans com a implementação de uma API também realizada por mim em Java com o apoio do Spring Boot. A função deste projeto é tentar apoiar as novas pessoas ou pessoas que já estão neste mundo, para poderem melhorar." />
            </section>

            <section id="formulario"><Formulario /></section>

          </main>
        </div>

        <footer className="bg-gray-100 p-6 text-center text-gray-500 text-sm">
          © 2026 Diogo Oliveira. Construído com React e Tailwind CSS.
        </footer>
        </div>
      </div>
    </div>
  );
}

export default App;