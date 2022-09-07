import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StatsPokemonsInfo from './StatsPokemonsInfo';

const PokemonsInfo = ({ pokemon }) => {
  const [pokemonsInfo, setPokemonsInfo] = useState();

  useEffect(() => {
    axios.get(pokemon)
      .then(res => setPokemonsInfo(res.data))
      .catch(err => console.log(err))
  }, []);
  console.log(pokemonsInfo)
  return (
    <article className='card-pokemons_info'>
      <header className={`card-pokemons-info__header bg-${pokemonsInfo?.types[0].type.name}`}>
        <img className='card-pokemons-info__img' src={pokemonsInfo?.sprites.other["official-artwork"]["front_default"]} alt="Pokemon-Image" />
      </header>
      <section>
        <h1>{pokemonsInfo?.name}</h1>
        <ul>
          {
            pokemonsInfo?.types.map((slot) => (
              <li key={slot.type.url}> {slot.type.name} </li>
            ))
          }
        </ul>
      </section>
      <footer >
        <ul className='card-pokemons-info__ul'>
          {
            pokemonsInfo?.stats.map((stat) => (
              <StatsPokemonsInfo 
                key={stat.stat.url}
                statInfo={stat}
              />
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokemonsInfo