import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TypeSelect = ({setPokemonType, pokemonType, setpokemonSearch}) => {

  const [typesList, setTypesList] = useState();

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type";

    axios.get(URL)
      .then(res => setTypesList(res.data))
      .catch(err => console.log(err))
  }, []);

  const handleChange = (e) => {
    setPokemonType(e.target.value);
    setpokemonSearch();
  }

  return (
    <select value={pokemonType} onChange={handleChange}>
      <option value="All">All pokemons</option>
      {
        typesList?.results.map((type) => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))
      }
    </select>
  )
}

export default TypeSelect