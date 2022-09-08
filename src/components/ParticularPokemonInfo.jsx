import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ParticularPokemonInfo = () => {

  const [specificPokemonInfo, setSpecificPokemonInfo] = useState();

  const { name } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;

    axios.get(URL)
      .then(res => setSpecificPokemonInfo(res.data))
      .catch(err => console.log(err))
  }, []);
  console.log(specificPokemonInfo)

  return (
    <article className={`card-particular-pokemon-info bg-${specificPokemonInfo?.types[0].type.name}`}>
      <header>
        <img src={specificPokemonInfo?.sprites.other["official-artwork"].front_default} alt="pokemon image" />
        <h2> {specificPokemonInfo?.name}</h2>
      </header>
      <section>
        <ul>
          {
            specificPokemonInfo?.types.map((slot) => (
              <li key={slot.type.url}> {slot.type.name} </li>
            ))
          }
        </ul>
      </section>
      <footer className='card-particular-pokemon-info__footer'>
        {
          specificPokemonInfo?.moves.map((move) => (
            <p key={move.name}>{move.move.name}</p>
          ))
        }
      </footer>
    </article>
  )
}

export default ParticularPokemonInfo