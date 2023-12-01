/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    // Validar nombre
    if (nombre.length <= 5) {
      setError('El nombre debe tener más de 5 caracteres.');
      return false;
    }
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingrese un correo electrónico válido.');
      return false;
    }
    // Limpiar mensaje de error
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Mostrar mensaje de éxito
      setSuccessMessage(`Gracias ${nombre}, te contactaremos cuando antes vía mail.`);
      // Limpiar campos del formulario
      setNombre('');
      setEmail('');
    }
  };

  return (
    <div className='form' >
      <h3>Formulario para contactar a la empresa</h3>
      <form onSubmit={handleSubmit}>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Nombre: </label>
        <div class="col-sm-7">
        <input
          class="form-control"
           id="nombre"
            type="text"
            name="nombre"
            placeholder='Nombre completo'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
       </div>
       </div>

        <br></br>

       <div class="form-group row">
          <label  class="col-sm-2 col-form-label">Email:</label>
          <div class="col-sm-7">
          <input
            class="form-control" 
            type="text"
            id="email"
            placeholder='Email'
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
       </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <br></br>
       
        <button type="submit" class="btn btn-primary">Enviar</button>
      
       
      </form>
    </div>
  );
};

export default ContactForm;
