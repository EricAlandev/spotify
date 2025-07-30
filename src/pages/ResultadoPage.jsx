import { useLocation } from "react-router-dom";
import data from "../musicas/EmAlta.json"; // ou o JSON que você salvou

const ResultadoPage = () => {
  const { search } = useLocation();
  const termo = new URLSearchParams(search).get("q")?.toLowerCase() || "";

  const resultados = data.filter((item) =>
    item.titulo.toLowerCase().includes(termo) ||
    item.bandaNome.toLowerCase().includes(termo)
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">
        Resultados para: <span className="text-purple-400">{termo}</span>
      </h2>

      {resultados.length === 0 ? (
        <p className="text-gray-400">Nenhuma música encontrada.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resultados.map((item) => (
            <li key={item.id} className="bg-[#1a1a1a] p-4 rounded-xl text-white">
              <img src={item.image} alt={item.titulo} className="rounded mb-2" />
              <h3 className="text-lg font-semibold">{item.titulo}</h3>
              <p className="text-sm text-gray-400">{item.bandaNome}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultadoPage;
