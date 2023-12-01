/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useTheme } from '../Components/utils/global.context';
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

 const { theme } = useTheme();

 const {id} = useParams()

 const [dentist, setDentist] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setDentist(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };
    fetchData();
  }, [id]); 

 
return (
  <>
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }} className='detalle'>
      <h3>Detalle de productos</h3>
      <div class="row row-cols-1 row-cols-md-4 g-4"> 
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{dentist.id} - {dentist.name}</h5>
            <p>{dentist.email}</p>
            <p>{dentist.phone}</p>
            <p>{dentist.webside}</p>
            <Link  class="btn btn-primary" to={`/home`} >Volver</Link>
         </div> 
        </div>
      </div>
    </div>  
    </div>
  </>

)
  
}

export default Detail