/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useTheme } from '../Components/utils/global.context';

const Home = () => {

    
  const { theme } = useTheme();
  const [dentists, setDentists] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setDentists(response.data);
        } catch (error) {
          console.error('Error al obtener datos de la API:', error);
        }
      };
      fetchData();
    }, []); 

  return (
  <>
    <main style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }} className='home'>
    <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map(dentist => (
          <div class="row row-cols-1 row-cols-md-4 g-4" key={dentist.id}> 
              <Card
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
              />     
          </div>       
      ))}
      </div>
    </main>
  </>
  )
}

export default Home
