import React from 'react';
import CatSquare from './CatSquare/CatSquare'

import styled from 'styled-components'

let className = ''

const UnstyledCategories = ({className}) => {
    className = className
    return (
        <div className={className}>
            <div className='rowContainer'>
                <img src='https://media.istockphoto.com/id/97999241/photo/people-under-umbrellas.jpg?s=612x612&w=0&k=20&c=GA35q4jS0y6ANpCcWnf0xgJscmB1fUfpuExgAdVV3i8='/>
                <CatSquare imageSrc='https://www.freeiconspng.com/thumbs/umbrella-png/red-umbrella-png-19.png' name='RAIN' desc= 'Para la lluvia'/>
            </div>
            <div className='rowContainer'>
                <CatSquare imageSrc='https://pngscreativos.files.wordpress.com/2016/07/puff.png' name='PUFF' desc= 'Para mas comodidad'/>
                <img src='https://cdn.shopify.com/s/files/1/0771/2925/products/NEGRO_8d1673bd-9973-4158-ad40-fab304806b57.png?v=1568701212'/>
            </div>
            <div className='rowContainer'>
                <img src='https://static.purseblog.com/images/2022/01/Purse-People-Chanel-Boy-Bag-1.jpg'/>
                <CatSquare imageSrc='https://w7.pngwing.com/pngs/131/784/png-transparent-museum-of-bags-and-purses-handbag-bag-luggage-bags-fashion-accessories-thumbnail.png' name='CART' desc= 'Para comprar'/>
            </div>
            <div className='rowContainer'>
                <CatSquare imageSrc='https://http2.mlstatic.com/D_NQ_NP_609547-MLA48187063001_112021-O.jpg' name='NAP' desc= 'Para la siesta'/>
                <img src='https://theraw.net/wp-content/uploads/2019/10/D%C4%99bowe-nowoczesne-%C5%82%C3%B3%C5%BCko-PUFF-5-1200x800.jpg'/>
            </div>
      </div>
    )
};

const Categories = styled(UnstyledCategories)`
${className}{
    display: flex;
    flex-direction: column;
  }
  

  .rowContainer {
    display: flex;
    width: 100%;
  }

  .rowContainer{
    height: 800px;
  }

  .rowContainer > * {
    width: 50%;
  }
`

export default Categories