import { useTranslation } from 'react-i18next';
function Contacto () {

    const { t } = useTranslation();

    const copiarParaAreaDeTransferencia = (texto) => {
        navigator.clipboard.writeText(texto)
            .then(() => {
            alert("Copiado para a área de transferência!");
            })
            .catch(err => {
            console.error("Erro ao copiar: ", err);
            });
        };

    return(
        
            <section id="contacto">
            <h3 className="font-bold text-blue-800">{t('contact_title')}</h3>
            <p className="text-sm text-blue-600 mt-2"><a target="_blank" 
            href="https://www.google.com/maps/search/?api=1&query=Esposende,Braga,Portugal">📍 Esposende, Braga, Portugal</a></p>
            <div>
            <p onClick={() => copiarParaAreaDeTransferencia("+351 965 146 268")} className="text-sm text-blue-600 mt-2"
                style={{ cursor: 'pointer'}}>
                📱 +351 965 146 268
            </p>
            <p onClick={() => copiarParaAreaDeTransferencia("diogooliveiraibz@gmail.com")} className="text-sm text-blue-600 mt-2"
                style={{ cursor: 'pointer'}}>
                📧 diogooliveiraibz@gmail.com
            </p>
            </div>
            </section>
        
    );
}

export default Contacto;