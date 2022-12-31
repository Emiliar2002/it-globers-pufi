import React from 'react';

import styled from 'styled-components'


const UnstyledInstagram = ({className}) => {
    return(
    <div className={className}>
        <h3>INSTAGRAM</h3>
        <p>#ESPUFI</p>
        <div>
        <img src='https://http2.mlstatic.com/D_NQ_NP_679098-MLA31072397150_062019-O.webp'/>
        <img src='https://http2.mlstatic.com/D_NQ_NP_721952-MLA43833953155_102020-O.webp'/>
        <img src='https://www.coolhuntercanarias.com/wp-content/uploads/2016/08/puff_playa_canarias_cool_ocean.jpg'/><br></br>
        <img src='https://imagenes.elpais.com/resizer/E7qcSQbOR91WKvOxf02oFAClUVo=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/MZY3IC4AXZCX5EZQKFXCCP7QRE.webp'/>
        <img src='https://http2.mlstatic.com/D_NQ_NP_788626-MLA51559335810_092022-O.jpg'/>
        <img src='https://img.freepik.com/fotos-premium/sombrillas-naranjas-sillones-tipo-puff-playa-arena-blanca_33842-4424.jpg?w=2000'/>
        </div>
    </div>
    )
}

const Instagram = styled(UnstyledInstagram)`
font-family: 'Roboto', sans-serif;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
margin: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;

img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
  }
}

h3 {
  font-family: "Montserrat", sans-serif; /* Use a modern sans-serif font */
  font-size: 2rem;
  color: #ff0080;
  margin-bottom: 10px;
}

p {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

`

export default Instagram
