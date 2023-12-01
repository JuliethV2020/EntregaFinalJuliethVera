/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useReducer } from 'react';

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const newFavorite = action.payload;
      const isDuplicate = state.some(favorite => favorite.id === newFavorite.id);

      if (!isDuplicate) {
        const updatedFavorites = [...state, newFavorite];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
      } else {
        return state;
      }
    case 'REMOVE_FAVORITE':
      const updatedFavorites = state.filter(favorite => favorite.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    default:
      return state;
  }
};

const FavoritesProvider = ({ children }) => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, dispatch] = useReducer(favoritesReducer, storedFavorites);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export { FavoritesProvider, useFavorites };