import React from 'react'

const InputSearch = ({setpokemonSearch, setPokemonType}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setpokemonSearch(e.target.textSearch.value.trim().toLowerCase());
    setPokemonType("All");
    e.target.textSearch.value = ""
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input id='textSearch' type="text" />
      <button>Search</button>
    </form>
  )
}

export default InputSearch