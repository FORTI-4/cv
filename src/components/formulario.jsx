import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import axios from 'axios';

function Formulario() {

  const { t } = useTranslation();

  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null }
  });

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telemovel: '',
    mensagem: ''
  });

  const handleOnChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, info: { error: false, msg: null } });

    try {
      const response = await axios({
        method: 'POST',
        url: 'https://formspree.io/f/mojpqaka', 
        data: formData,
      });

      if (response.status === 200) {
        setStatus({
          submitting: false,
          info: { error: false, msg: `Obrigado, ${formData.nome}! Entrarei em contacto em breve.` }
        });
        setFormData({ nome: '', email: '', telemovel: '', mensagem: '' });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        info: { error: true, msg: 'Ocorreu um erro ao enviar. Por favor, tente novamente.' }
      });
    }
  };

  return (
    <section id="formulario" className="mt-12 p-8 bg-slate-900 text-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6">{t('form_subtitle')}</h2>

      {status.info.msg && (
        <div className={`p-4 mb-6 rounded-lg border ${status.info.error ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-green-500/20 border-green-500 text-green-400'}`}>
          {status.info.msg}
        </div>
      )}

      {(!status.info.msg || status.info.error) && (
        <form onSubmit={handleOnSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="md:col-span-1">
            <label className="block text-sm mb-1">{t('form_field1')}</label>
            <input 
              name="nome" 
              type="text" 
              placeholder="Ex: João Silva" 
              value={formData.nome}
              onChange={handleOnChange}
              className="w-full p-2 rounded bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 transition-colors" 
              required 
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm mb-1">{t('form_field2')}</label>
            <input 
              name="email" 
              type="email" 
              placeholder="Ex: joaosilva@gmail.com" 
              value={formData.email}
              onChange={handleOnChange}
              className="w-full p-2 rounded bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 transition-colors" 
              required 
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1">{t('form_field3')}</label>
            <input 
              name="telemovel" 
              type="tel" 
              placeholder="Ex: 912 345 678" 
              value={formData.telemovel}
              onChange={handleOnChange}
              className="w-full p-2 rounded bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 transition-colors" 
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1">{t('form_field4')}</label>
            <textarea 
              name="mensagem" 
              rows="4" 
              placeholder={t('form_field4_subtitle')} 
              value={formData.mensagem}
              onChange={handleOnChange}
              className="w-full p-2 rounded bg-slate-800 border border-slate-700 outline-none focus:border-blue-500 transition-colors" 
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status.submitting}
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 py-3 rounded-lg font-bold transition-all active:scale-[0.98]"
          >
            {status.submitting ? 'A enviar...' : 'Enviar Mensagem'}
          </button>
        </form>
      )}
    </section>
  );
}

export default Formulario;