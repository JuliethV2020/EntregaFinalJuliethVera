/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useTheme } from './utils/global.context';
import React from 'react'

const Theme = () => {
    
  const { dispatch} = useTheme();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div>
       <button type="button" class="btn btn-primary" onClick={toggleTheme}>Change theme </button>
    </div>
  )
}

export default Theme
