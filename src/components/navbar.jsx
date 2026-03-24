function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-black text-blue-600 text-xl tracking-tighter"><a href="App.jsx">DO.</a></span>
        
        <div className="hidden md:flex gap-8 text-sm font-bold text-gray-500">
          <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre</a>
          <a href="#competencias" className="hover:text-blue-600 transition-colors">Competências</a>
          <a href="#experiencia" className="hover:text-blue-600 transition-colors">Experiência</a>
          <a href="#extra" className="hover:text-blue-600 transition-colors">Info-Extra</a>
          <a href="#projetos" className="hover:text-blue-600 transition-colors">Projetos</a>
          <a href="#formulario" className="hover:text-blue-600 transition-colors">Formulário</a>
          <a href="#contacta" className="hover:text-blue-600 transition-colors">Contacta-me</a>
        </div>

        <a 
          href="/cv-diogo.pdf" 
          download 
          className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;