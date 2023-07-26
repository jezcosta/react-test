import { useEffect, useState } from 'react';
import './style.css';
import client from '../../client';

import logoPokemon from '../../assets/images/pokemon.png';
import PokemonCard from '../../components/PokemonCard';

type PokemonProps = {
  id: string,
  name: string,
  weight: number,
  height: number,
  base_experience: number
}

function Main() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  async function loadData(){
    const { data } = await client.get("pokemon/?limit=60");

    const connections:any = [];
    const pokemonsTemp:PokemonProps[] = [];

    data.results.forEach((item: any) => {
      connections.push(client.get(`pokemon/${item.name}`));
    })
    const result = await Promise.all(connections);
    result.forEach(resultItem => pokemonsTemp.push({...resultItem.data}));
    setPokemons([...pokemonsTemp]);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div className="App">
      <header>
        <img src={logoPokemon} alt='logomarca do Pokemon' />
        <h1>
          Encontre o seu Pokemon favorito!
        </h1>
      </header>
      <div className='cards'>
        {pokemons.map((pokemon: PokemonProps) => {       
          return(
            <PokemonCard
              key={pokemon?.id}
              pokemonId={pokemon?.id}
              pokemonName={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              pokemonImage={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon?.id.toString().padStart(3, '0')}.png`}
              pokemonHeight={pokemon?.height}
              pokemonWeight={pokemon?.weight}
              pokemonExperience={pokemon?.base_experience}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Main;
