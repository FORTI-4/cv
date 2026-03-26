import { useTranslation } from 'react-i18next';
import { GraduationCap, Heart, Music, Gamepad2, Dumbbell, BookOpen } from 'lucide-react';

function Extra() {

  const { t } = useTranslation();

  const hobbies = [
    { nome: t('extra_leisure_subtitle1'), icon: <Music size={14} /> },
    { nome: t('extra_leisure_subtitle2'), icon: <Gamepad2 size={14} /> },
    { nome: t('extra_leisure_subtitle3'), icon: <Dumbbell size={14} /> },
    { nome: t('extra_leisure_subtitle4'), icon: <BookOpen size={14} /> }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
        <h3 className="flex items-center gap-3 text-xl font-bold text-gray-800 mb-6">
          <GraduationCap className="text-blue-500" /> {t('extra_educ_title')}
        </h3>
        <div className="border-l-2 border-blue-500 pl-4">
          <h4 className="font-bold text-gray-700">{t('extra_educ_course')}</h4>
          <p className="text-sm text-gray-500 font-medium">{t('extra_educ_course_subtitle')}</p>
          <p className="text-xs text-gray-400 mt-2 italic">{t('extra_educ_course_desc')}</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="flex items-center gap-3 text-xl font-bold text-gray-800 mb-6">
          <Heart className="text-red-500" /> {t('extra_leisure_title')}
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