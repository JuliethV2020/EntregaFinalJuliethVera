/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
//import Card from "../Components/Card";
import { useFavorites } from "../Components/utils/favorite"
import { useTheme } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { theme } = useTheme();
  const { favorites, dispatch } = useFavorites();

  const removeFromFavorites = (favorite) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: favorite });

  };

  return (
    <>
    <div className="fav" style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}> 
      <div> 
      <h1>Dentists Favs</h1>
      
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map((favorite) => (
        <div class="row row-cols-1 row-cols-md-4 g-4" key={favorites.id}> 
          <div class="col">
            <div class="card">
              <div class="card-body">
               
                  <h3>{favorite.name}</h3>
                  <p>{favorite.username}</p>
                  <button type="button" class="btn btn-danger" onClick={() => removeFromFavorites(favorite)}>Eliminar</button>
            
              </div>
            </div>
           </div>
        </div>       
        ))}
      </div>  
    </div>
      
    </>
  );
};

export default Favs;
