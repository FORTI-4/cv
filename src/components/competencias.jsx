function Competencias() {
  const lista = ["HTML", "CSS", "JavaScript", "PHP", "MySQL","Java", "Python"];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-200 mb-4">
        Competências
      </h2>
      
      <div className="flex flex-wrap gap-2">

        {lista.map((item, index) => (
          <span 
            key={index} 
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Competencias;