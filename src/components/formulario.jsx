import { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telemovel: '',
    mensagem: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados recolhidos:", formData);
    setEnviado(true);
  };

  return (
    <section id="contacto" className="mt-12 p-8 bg-slate-900 text-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Vamos conversar?</h2>

      {enviado ? (
        <div className="bg-green-500/20 border border-green-500 p-4 rounded-lg text-green-400">
          Obrigado, {formData.nome}! Entrarei em contacto em breve para o email {formData.email}.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <label className="block text-sm mb-1">Nome</label>
            <input name="nome" type="text" placeholder="Ex: João Silva" onChange={handleChange} className="w-full p-2 rounded bg-slate-800 border border-slate-700" required />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm mb-1">Email</label>
            <input name="email" type="email" placeholder="Ex: joaosilva@gmail.com" onChange={handleChange} className="w-full p-2 rounded bg-slate-800 border border-slate-700" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Mensagem</label>
            <textarea name="mensagem" rows="4" placeholder="Mande a sua proposta" onChange={handleChange} className="w-full p-2 rounded bg-slate-800 border border-slate-700" required></textarea>
          </div>
          <button type="submit" className="md:col-span-2 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold transition-all">
            Enviar Mensagem
          </button>
        </form>
      )}
    </section>
  );
}

export default Formulario;