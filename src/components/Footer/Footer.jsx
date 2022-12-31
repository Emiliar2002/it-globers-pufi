import React from 'react';
import styled from 'styled-components';

import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const UnstyledFooter = ({className}) => {
    return (
        <footer className={className}>
            <h2>Pufi</h2>
            <div>
                <a href='#'>PUFI RAIN</a>
                <a href='#'>PUFI PUFF</a>
                <a href='#'>PUFI CART</a>
                <a href='#'>PUFI NAP</a>
            </div>
            <div>
                <a href='#'>CONTACTO</a>
                <a href='#'>AYUDA</a>
                <a href='#'>CÓMO COMPRAR</a>
                <a href='#'>TÉRMINOS Y CONDICIONES</a>
            </div>
            <div>
                <a href='#'>COMPRA 100% SEGURA</a>
                <div>
                    <AiFillFacebook/>
                    <AiFillTwitterSquare/>
                    <AiFillInstagram/>
                </div>
            </div>
        </footer>
    )
};

const Footer = styled(UnstyledFooter)`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding: 40px;
    background-color: #333;
    color: #fff;

h2 {
margin: 0;
font-size: 24px;
font-weight: 600;
}

div {
display: flex;
align-items: center;
margin-bottom: 20px;
}
a {
    display: block;
    margin-right: 20px;
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    transition: color 0.2s;
  
    &:hover {
      color: #eee;
    }
  }
  
  div {
    display: flex;
    align-items: center;
    margin-left: 20px;
  
    svg {
      width: 32px;
      height: 32px;
      fill: #fff;
      transition: fill 0.2s;
  
      &:hover {
        fill: #eee;
      }
    }
  }
`

export default Footer