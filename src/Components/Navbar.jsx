/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from './utils/global.context';
import Theme from './Theme';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme } = useTheme();

  return (
    <>
    <div className='link' style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}> 
      <nav class="nav"  >
     
      <li >
        <Link to= '/home' class="nav-link">Home</Link>
      </li>

      <li>
        <Link to= '/contacto' class="nav-link">Contact</Link>
      </li>

      <li  >
        <Link to= '/favs' class="nav-link">Favs</Link>
      </li>
        
      <Theme/>

     
    </nav>
    </div>
    
    </>
  )
}

export default Navbar