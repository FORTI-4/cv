import { CircleArrowDown } from 'lucide-react';

function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 px-6">
      

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4">
          DIOGO <span className="text-zinc-500">OLIVEIRA</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Técnico de Informática & Sistemas
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <a 
            href="#projetos" 
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-zinc-200 transition-all active:scale-95"
          >
            Ver Projetos
          </a>
          <a 
            href="#contacto" 
            className="border border-zinc-700 px-8 py-3 rounded-full font-bold hover:bg-zinc-900 transition-all"
          >
            Contacto
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-zinc-500">
        <a href="#sobre"><CircleArrowDown size={67} /></a>
      </div>
    </section>
  );
}

export default Hero;