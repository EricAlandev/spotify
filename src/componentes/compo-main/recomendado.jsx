import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import EmAlta from '../../musicas/EmAlta.json'

const Recomendados = () =>{
    const { id } = useParams();

    const musica = EmAlta.find((m) => m.id === id);

  
  const recomendados = EmAlta
  .filter((m) => m.categoria === musica.categoria && m.id !== id)
  .sort(() => Math.random() - 0.5)
  .slice(0, 5);

  if (!musica) {
    return <p>Música não encontrada.</p>;
  }

    return(
        <main className='mb-[80px]'>

        {recomendados.map((rec) => (
            <Link to={`/musica/${rec.id}`}>
                <section key={rec.id} className="flex items-center gap-2 my-2">
                <img
                    src={rec.image}
                    alt={rec.titulo}
                    className="w-12 h-12 rounded object-cover"
                />
                <section>
                    <h2 className="text-white text-sm font-semibold">{rec.titulo}</h2>
                    <h3 className="text-gray-400 text-xs">{rec.bandaNome}</h3>
                </section>
            </section>
            </Link>
          ))}
        </main>
    )
}

export default Recomendados