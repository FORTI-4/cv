import { useTranslation } from 'react-i18next';
function Sobre() {
  
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto text-center">
        {t('about_desc')}
      </p>
    </div>
  );
}

export default Sobre;