import { useTranslation } from 'react-i18next';
import { Tooltip } from 'react-tooltip';
function Contacto () {

    const { t } = useTranslation();
    
    const email = "diogooliveiraibz@gmail.com";
    const telemovel = "+351965146268";

    const copiar = (texto) => {
        navigator.clipboard.writeText(texto);
    };

    return(
            
                <section id="contacto">
                <h3 className="font-bold text-blue-800">{t('contact_title')}</h3>
                <p className="text-sm text-blue-600 mt-2"><a target="_blank" 
                href="https://www.google.com/maps/search/?api=1&query=Esposende,Braga,Portugal">📍 Esposende, Braga, Portugal</a></p>
                <div>
                <p onClick={() => copiar(telemovel)} className="text-sm text-blue-600 mt-2"
                    style={{ cursor: 'pointer' }} 
                    data-tooltip-id="meu-tooltip" 
                    data-tooltip-content="Copiado!" 
                    data-tooltip-events="click">
                    📱 +351 965 146 268
                </p>
                <p onClick={() => copiar(email)} className="text-sm text-blue-600 mt-2"
                    style={{ cursor: 'pointer'}}
                    data-tooltip-id="meu-tooltip" 
                    data-tooltip-content="Copiado!" 
                    data-tooltip-events="click">
                    📧 diogooliveiraibz@gmail.com
                </p>
                    
                    <Tooltip 
                    id="meu-tooltip" 
                    globalEventOff="click"
                    delayEvents={0}
                    closeEvents="mouseleave"
                    />
                    </div>
                </section>
        );
    };

export default Contacto;