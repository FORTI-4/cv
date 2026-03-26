import { useTranslation } from 'react-i18next';
import { Database, Terminal } from 'lucide-react';
import { FiLayout } from "react-icons/fi";
function Competencias() {
  
  const { t } = useTranslation();

  const categorias = [
    { title: "Frontend", icon: <FiLayout />, skills: ["React", "JS", "Tailwind", "HTML/CSS"], color: "text-blue-600" },
    { title: "Backend", icon: <Database />, skills: ["Java", "PHP", "Python", "MySQL"], color: "text-green-600" },
    { title: t('skills_subtitle'), icon: <Terminal />, skills: ["Git", "VS Code", "NetBeans"], color: "text-purple-600" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
      {categorias.map((cat, i) => (
        <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className={`${cat.color} mb-4`}>{cat.icon}</div>
          <h4 className="font-bold text-gray-800 mb-3">{cat.title}</h4>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map(s => (
              <span key={s} className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-lg border border-gray-100 font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Competencias;