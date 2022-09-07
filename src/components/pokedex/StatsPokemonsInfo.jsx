import React from 'react'

const StatsPokemonsInfo = ({statInfo}) => {
  return (
    <li className='stats-pokemons-info__li'>
      <h4>{statInfo.stat.name}</h4>
      <p>{statInfo.base_stat}</p>
    </li>
  )
}

export default StatsPokemonsInfo