import React from 'react'


function ProductCard(props) {
  return (
    <div className='productCard-container'>
        <div className='productCard-container__image'>
            <img src={props.image} alt="" />
        </div>
        <div className='productCard-container__text'>
            <h3>{props.title}</h3>
        </div>
    </div>
  )
}

export default ProductCard