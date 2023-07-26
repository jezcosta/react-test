import './style.css';

interface PokemonCardProps {
  pokemonId: string,
  pokemonName: string,
  pokemonImage: string,
  pokemonHeight: number,
  pokemonWeight: number,
  pokemonExperience: number
}

export default function PokemonCard({
  pokemonId,
  pokemonName,
  pokemonImage,
  pokemonHeight,
  pokemonWeight,
  pokemonExperience
}:PokemonCardProps){
  return(
    <div className='card-pokemon'>
      <div className='number'>
        <p>#{pokemonId}</p>
      </div>
      <img src={pokemonImage} alt={`imagem do Pokemon ${pokemonName}`} />
      <p id='name-pokemon'>
        {pokemonName}
      </p>
      <div className='characteristics'>
        <div>
          <p id='title'>
            Peso
          </p>
          <p>
            {pokemonWeight} Kg
          </p>
        </div>
        <div>
          <p id='title'>
            Altura
          </p>
          <p>
            {pokemonHeight} m
          </p>
        </div>
      </div>
      <div id='title'>
        Experiência: <span>{pokemonExperience}</span>
      </div>
    </div>
  )
}