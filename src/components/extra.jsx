import { GraduationCap, Music, Gamepad2, Dumbbell, BookOpen } from 'lucide-react';

function Extra() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="flex items-center gap-2 font-bold text-gray-800 mb-4">
          <GraduationCap size={20} className="text-blue-600" /> Educação
        </h3>
        <div className="border-l-2 border-blue-100 pl-4">
          <h4 className="text-sm font-bold text-gray-700">Técnico de Informática e Sistemas</h4>
          <p className="text-xs text-gray-500">Curso Profissional (Nível 4 EQF)</p>
          <p className="text-xs text-gray-400 mt-1 italic">
            Foco em Programação, Redes e Gestão de Bases de Dados.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">Lazer</h3>
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-medium text-gray-600">
            <Music size={14} /> Música & Freestyle
          </span>
          <span className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-medium text-gray-600">
            <Gamepad2 size={14} /> Gaming
          </span>
          <span className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-medium text-gray-600">
            <Dumbbell size={14} /> Desporto
          </span>
          <span className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-medium text-gray-600">
            <BookOpen size={14} /> Leitura(Comic & Manga)
          </span>
        </div>
      </div>
    </div>
  );
}

export default Extra;