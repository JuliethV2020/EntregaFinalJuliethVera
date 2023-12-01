/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
 import {useFavorites } from "../Components/utils/favorite"

const Card = ( { name, username, id }) => {
   const { dispatch } = useFavorites();
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
       dispatch({ type: 'ADD_FAVORITE', payload: { name, username, id } });
  
  }
       
 return (
  
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{id} - {name}</h5>
            <p>{username}</p>
            <Link  class="btn btn-primary" to={`/dentist/${id}`} >Detalle</Link>
            <button onClick={addFav}  class="btn btn-success">Add fav</button>
          </div>
        </div>
      </div>
  
 )
};

export default Card;
