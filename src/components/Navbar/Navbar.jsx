import React, {useState} from 'react';
import NavItem from './NavItem';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { GiSofa } from 'react-icons/gi';
import { IoMdUmbrella } from 'react-icons/io';
import { IoIosBriefcase } from 'react-icons/io';
import { BiBlanket } from 'react-icons/bi';

import styled from 'styled-components'
const categories = [
    {
        imageSrc: <GiSofa/>,
        name: 'PUFI PUFF'
    },
    {
        imageSrc: <IoMdUmbrella/>,
        name: 'PUFI RAIN'
    },
    {
        imageSrc: <IoIosBriefcase/>,
        name: 'PUFI CART'
    },
    {
        imageSrc: <BiBlanket/>,
        name: 'PUFI NAP'
    }
];

const UnstyledNavBar = ({className}) => {
    return (
        <header className={className}>
            <nav>
                <a href='#'>
                    <h2>Pufi</h2>
                </a>
                <ul id="categorias">   
                    {categories.map((c, i) => <NavItem className={'navItem'} {...c} key={i} />)}
                </ul>
                <div className='topButtons'>
                    <a href='#'>MI CUENTA</a>
                    <a href='#'>MI COMPRA</a>
                </div>
            </nav>
            <h1>ESTÁR CÓMODO,<br></br>NUNCA FUE TAN FÁCIL.</h1>
            <Carousel showStatus={false} dynamicHeight={150} infiniteLoop={true} showThumbs={false} autoPlay interval={4000} showArrows={false} showIndicators={true} indicatorClassName="my-indicators">
                <div>
                    <img src="https://img.freepik.com/fotos-premium/puf-playa-fondo-mar-oceano_1339-155327.jpg?w=2000" />
                </div>
                <div>
                    <img src="https://imagenes.elpais.com/resizer/ANVFJCk-IxorsDbmAtr9vHl7u_Q=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/MZY3IC4AXZCX5EZQKFXCCP7QRE.webp" />
                </div>
                <div>
                    <img src="https://www.happers.es/server/Portal_0010689/img/galeria/carrusel_happers_to_go_s7_30455.jpg" />
                </div>
            </Carousel>
            <a id='shop1' href='#'>SHOP</a>
        </header>
    )
};

const NavBar = styled(UnstyledNavBar)`

position: relative;
display: flex;
align-items: center;
justify-content: center;
h1 {
    position: absolute;
    z-index: 30;
    font-family: 'Roboto', serif;
    font-size: 5rem;
    text-align: center;
    color: whitesmoke;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  }
img {
  max-height: 700px;
  object-fit: cover;
}
nav {
  display: flex;
  gap: 15px;
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  z-index: 2;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
}
nav a {
  color: black;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
nav a:hover {
  color: #1a73e8;
}
nav div {
  display: flex;
  gap: 5px;
}
#categorias {
  margin-left: 33%;
  margin-right: auto;
  display: flex;
  list-style: none;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
#categorias li {
  font-size: 1.2rem;
  cursor: pointer;
}

.topButtons > *{
    

    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    padding: 12px 24px;
    border: 0;
    color: #fff;
    background: #000a47;
    line-height: 1.15;
    font-size: 16px;
    :hover {
        transition: all .1s ease;
        box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
    }


}

#categorias li:hover {
    color: #1a73e8;
    }
    #shop1 {
        position: absolute;
        bottom: 40px;
        left: 50%;
        display: inline-block;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        border-radius: 8px;
        padding: 14px 24px;
        border: none;
        transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
        background: linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%);
        color: #fff;
        transform: translateX(-50%);
        text-decoration:none;
        }
        
        #shop1:hover {
        transform: translateX(-50%) scale(1.1);
        }
        
        h2 {
            font-size: 2rem;
            font-weight: bold;
            color: white;
            text-transform: uppercase;
          }
        
`

export default NavBar