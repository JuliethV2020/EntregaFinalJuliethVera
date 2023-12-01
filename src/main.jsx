import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import NotFund from './Routes/NotFund'


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/dentist/:id' element={<Detail/>}/>
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='*' element={<NotFund/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
