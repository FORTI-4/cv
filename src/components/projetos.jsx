import { useState } from 'react';
import { Heart } from 'lucide-react'; 
function Projetos({ nome, descricao, imagem }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all mb-8">
      <div className="h-52 overflow-hidden bg-gray-200">
        <img 
          src={imagem} 
          alt={nome} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{nome}</h3>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">{descricao}</p>
        
        <div className="flex items-center justify-between mt-6">        
          <button 
            onClick={() => setLikes(likes + 1)} 
            className="flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-xs font-bold hover:bg-pink-100 transition-all active:scale-95"
          >
            <Heart size={16} fill={likes > 0 ? "#db2777" : "none"} /> {likes}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projetos;