import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTrainerName } from '../store/slices/trainerName.slice';

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = e.target.name.value.trim();
    
    if(input.length !== 0) {
      dispatch(setTrainerName(input));
      navigate('/pokedex');
    }
    
    e.target.name.value = ""
  };
//Falta guardar en local storage. Creo es después del navigate
  return (
    <div>
      <h1>Welcome Trainer!</h1>
      <p>Please, give your name to star</p>
      <form onSubmit={handleSubmit}>
        <input id='name' type="text" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Home