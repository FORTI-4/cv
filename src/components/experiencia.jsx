import { Briefcase } from 'lucide-react';

function Experiencia() {
  const experiencias = [
    {
      cargo: "Estagiário de Programação",
      empresa: "Grupo Érre",
      data: "2026 - Presente",
      desc: "Focado na adaptação ao stack tecnológico da empresa e manutenção de plataformas digitais.",
    },
    {
      cargo: "Estagiário de Programação",
      empresa: "WFR",
      data: "2025",
      desc: "Apoio no desenvolvimento de interfaces e otimização de fluxos internos.",
    }
  ];

  return (
    <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-zinc-800">
      {experiencias.map((exp, index) => (
        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors group-hover:border-blue-500">
            <Briefcase size={16} className="group-hover:text-blue-500 transition-colors" />
          </div>
       
          <div className="w-[calc(100%-4rem)] md:w-[45%] bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-xl hover:shadow-blue-500/5">
            <div className="flex flex-col mb-4">
              <span className="text-blue-500 font-mono text-xs mb-1 tracking-widest uppercase">
                {exp.data}  
              </span>
              <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {exp.cargo}
              </h4>
              <span className="text-zinc-500 font-medium">{exp.empresa}</span>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
              {exp.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experiencia;