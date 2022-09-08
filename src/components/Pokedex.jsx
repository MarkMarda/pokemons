import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import InputSearch from './pokedex/InputSearch';
import PokemonsInfo from './pokedex/PokemonsInfo';
import TypeSelect from './pokedex/TypeSelect';

const Pokedex = () => {

  const [pokemons, setPokemons] = useState();

  const [pokemonSearch, setpokemonSearch] = useState();

  const [pokemonType, setPokemonType] = useState("All");

  useEffect(() => {
    if (pokemonType !== "All") {
      //Logic about filter type
      const URL = `https://pokeapi.co/api/v2/type/${pokemonType}`;

      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemons({ results: arr })
        })
        .catch(err => console.log(err))
    } else if (pokemonSearch) {
      //Logic about searching of input 
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`;

      const obj = {
        results: [{ url }]
      }
      setPokemons(obj)
    } else {
      //Logic about all pokemons
      const URL = "https://pokeapi.co/api/v2/pokemon";

      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    } 
  }, [pokemonSearch, pokemonType]);

  const trainerName = useSelector(state => state.trainerName);

  return (
    <div>
      <h2>Welcome {trainerName}, catch them all</h2>
      <InputSearch 
        setpokemonSearch={setpokemonSearch} 
        setPokemonType={setPokemonType}
      />
      <TypeSelect 
        setPokemonType={setPokemonType} 
        pokemonType={pokemonType} 
        setpokemonSearch={setpokemonSearch}
      />
      <div className='pokedex'>
        {
          pokemons?.results.map((pokemon) => (
            <PokemonsInfo key={pokemon.url} pokemon={pokemon.url} />
          ))
        }
      </div>
    </div>

  )
}

export default Pokedex