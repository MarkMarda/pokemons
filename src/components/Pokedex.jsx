import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonsInfo from './pokedex/PokemonsInfo';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon"
    axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='pokedex'>
      {
        pokemons?.results.map((pokemon) => (
          <PokemonsInfo key={pokemon.url} pokemon={pokemon.url} />
        ))
      }
    </div>
  )
}

export default Pokedex