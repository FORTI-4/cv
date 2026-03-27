import { useTranslation } from 'react-i18next';
import { Download, Globe } from "lucide-react"; 

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-black text-blue-600 text-xl tracking-tighter">
          <a href="https://forti-4.github.io/cv/">DO.</a>
        </span>
        <div className="hidden md:flex gap-6 text-sm font-bold text-gray-500">
          <a href="#inicio" className="hover:text-blue-600 transition-colors">{t('nav_home')}</a>
          <a href="#sobre" className="hover:text-blue-600 transition-colors">{t('nav_about')}</a>
          <a href="#experiencia" className="hover:text-blue-600 transition-colors">{t('nav_experience')}</a>
          <a href="#competencias" className="hover:text-blue-600 transition-colors">{t('nav_skills')}</a>
          <a href="#extra" className="hover:text-blue-600 transition-colors">{t('nav_extra')}</a>
          <a href="#projetos" className="hover:text-blue-600 transition-colors">{t('nav_projects')}</a>
          <a href="#formulario" className="hover:text-blue-600 transition-colors">{t('nav_form')}</a>
          <a href="#contacto" className="hover:text-blue-600 transition-colors">{t('nav_contact')}</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg border border-gray-200">
            <button 
              onClick={() => changeLanguage('pt')}
              className={`px-2 py-1 text-xs font-bold rounded ${i18n.language === 'pt' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400'}`}
            >
              PT
            </button>
            <button 
              onClick={() => changeLanguage('en')}
              className={`px-2 py-1 text-xs font-bold rounded ${i18n.language === 'en' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400'}`}
            >
              EN
            </button>
          </div>
          <a 
            href={`${import.meta.env.BASE_URL}cv-diogo-pt.pdf`} 
            download 
            className="flex items-center gap-1 bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            <Download size={16}/> {t('download_cv')}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;