import React, { useState } from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux'
import { subscribeToNewsletter } from "../../redux/actions";


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const UnstyledNewsletter = ({className}) => {

    const [input, setInput] = useState('')

    let dispatch = useDispatch()
    let subscriptionStatus = useSelector((state) => state.response)

      const submitHandler = (e) => {
        e.preventDefault()
        if(!validateEmail(input) && input !== '') return
        dispatch(subscribeToNewsletter(input))
      }

      console.log(subscriptionStatus)
    
    return(
    <div className={className}>
      <h3>NEWSLETTER</h3>
      <p id="cta">SUSCRIBETE</p>
      <p>Y enterate de todas las novedades</p>
      <form onSubmit={e => submitHandler(e)}>
        <input className="emailInput" type={'email'} onChange={e => setInput(e.target.value)}/>
        <button type='submit'>Enviar</button>
        {(!validateEmail(input) && input !== '') && <p className="error">Introduzca un correo valido.</p>}
        {subscriptionStatus.format_valid === true && <p className="success">¡Usted se ha suscrito a nuestro newsletter!</p>}
      </form>
    </div>
    )
}

const Newsletter = styled(UnstyledNewsletter)`

margin: 20px;

h3 {
  font-size: 2rem;
  color: #ff0080;
  text-transform: uppercase;  
  font-family: 'Arial', sans-serif;
}

p {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  font-size: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;

  .emailInput {
    width: 50%;
    height: 2rem;
    border: 2px solid #333;
    border-radius: 5px;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    width: 20%;
    height: 2rem;
    border: none;
    border-radius: 5px;
    background-color: #ff0080;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
}

p.error {
  color: #ff0000;
  font-size: 1.5rem;
}

p.success {
  color: #00ff00;
  font-size: 1.5rem;
}

#cta{
  font-size: 40px;
}


`


export default Newsletter