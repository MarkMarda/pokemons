import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ParticularPokemonInfo from './components/ParticularPokemonInfo';
import Pokedex from './components/Pokedex';
import ProtectedRoutes from './components/ProtectedRoutes';
import './Pokemon.css';

function Pokemon() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:name' element={<ParticularPokemonInfo />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default Pokemon