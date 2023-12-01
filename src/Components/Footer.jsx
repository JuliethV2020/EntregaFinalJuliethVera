/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import dh from '../assets/image/descarga.png'

const Footer = () => {
  return (
    <>
    <div>
      <footer className='footer'>
        <p>Powered by <img src={dh}  alt='DH-logo' width={"30px"}/></p> 
      </footer> 
    </div>
      
    </>
  )
}

export default Footer
