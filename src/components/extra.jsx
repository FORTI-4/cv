import { GraduationCap, Heart, Music, Gamepad2, Dumbbell, BookOpen } from 'lucide-react';

function Extra() {
  const hobbies = [
    { nome: "Música & Freestyle", icon: <Music size={14} /> },
    { nome: "Gaming", icon: <Gamepad2 size={14} /> },
    { nome: "Desporto", icon: <Dumbbell size={14} /> },
    { nome: "Leitura (Comics & Manga)", icon: <BookOpen size={14} /> }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
        <h3 className="flex items-center gap-3 text-xl font-bold text-gray-800 mb-6">
          <GraduationCap className="text-blue-500" /> Educação
        </h3>
        <div className="border-l-2 border-blue-500 pl-4">
          <h4 className="font-bold text-gray-700">Técnico de Informática e Sistemas</h4>
          <p className="text-sm text-gray-500 font-medium">Curso Profissional (Nível 4 EQF)</p>
          <p className="text-xs text-gray-400 mt-2 italic">
            Foco em Programação, Redes e Gestão de Bases de Dados.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="flex items-center gap-3 text-xl font-bold text-gray-800 mb-6">
          <Heart className="text-red-500" /> Lazer
        </h3>
        <div className="flex flex-wrap gap-2">
          {hobbies.map((hobby) => (
            <span 
              key={hobby.nome} 
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100 font-bold uppercase tracking-wider"
            >
              {hobby.icon}
              {hobby.nome}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Extra;