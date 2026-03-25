function SkillBars() {
  const skills = [
    { nome: "HTML", nivel: 75, cor: "bg-orange-500" },
    { nome: "JavaScript", nivel: 55, cor: "bg-amber-400" },
    { nome: "CSS", nivel: 50, cor: "bg-sky-500" },
    { nome: "Java", nivel: 70, cor: "bg-red-600" },
    { nome: "MySQL", nivel: 65, cor: "bg-blue-800" },
    { nome: "PHP", nivel: 50, cor: "bg-violet-500" }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-5 text-gray-800">Nível Técnico</h3>
      <div className="space-y-5">
        {skills.map((s, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-bold text-gray-600">{s.nome}</span>
              <span className="text-xs font-medium text-gray-400">{s.nivel}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div 
                className={`${s.cor} h-2.5 rounded-full transition-all duration-1000 shadow-sm`} 
                style={{ width: `${s.nivel}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillBars;