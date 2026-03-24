function Experiencia(props) {
  return (
    <div className="mb-6 p-4 border-l-4 border-blue-500 bg-blue-50">
      <h3 className="text-lg font-bold text-gray-800">{props.cargo}</h3>
      <span className="text-sm text-blue-600 font-medium">{props.empresa}</span>
      <p className="text-gray-600 text-sm mt-1">{props.periodo}</p>
      <p className="text-gray-600 text-sm mt-2">{props.descricao}</p>
    </div>
  );
}

export default Experiencia;