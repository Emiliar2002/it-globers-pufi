import React from 'react'
import styled from 'styled-components';

const UnstyledCatSquare = (cat) => {
    return (
        <div className={cat.className}>
            
            <div className='imageDiv'>
            <img src={cat.imageSrc}/></div>
            <div>
                <p>Pufi {cat.name}</p>
                <p>{cat.desc}</p>
                <a href='#'>{'>'} VER MAS</a>
            </div>
        </div>
    )
};

const CatSquare = styled(UnstyledCatSquare)`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 8px;
transition: all 0.2s ease-in-out;
font-family: 'Roboto', sans-serif;
color: #333;


&:hover {
  transform: scale(1.05);
}

img {
  height: 300px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
}

p {
  margin: 8px 0;
  font-size: 16px;
}

a {
  display: block;
  margin-top: 16px;
  background-color: #333;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #444;
  }
}
`;
export default CatSquare;