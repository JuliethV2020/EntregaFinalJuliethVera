/*eslint-disable react/no-unknown-property */
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from 'react-router-dom'
import './App.css'
import {ThemeProvider} from './Components/utils/global.context'
import {FavoritesProvider} from './Components/utils/favorite'

function App() {
  


  return (
  <>
  
    <ThemeProvider >
    <FavoritesProvider>
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/> 
    </div>
      
   
      </FavoritesProvider>
    </ThemeProvider>
  

  </>
  );
}

export default App;