import React from 'react';
import { Link } from "react-router-dom";
function CardItem(props) {
  const {label, src, text, price, id, key, sex, color, description} = props
  return (
    <>
    <div className='cards__item {className}'>
      <Link className='cards__item__link' to= {"/catalog/item/" + id} state={{img: src, name: text,
                        price: price, description: description, color: color, sex: label}}>
        <figure className='cards__item__pic-wrap' data-category={ label }>
          <img
            className='cards__item__img'
            alt='Clothes image'
            src={src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{ text }</h5>
          <p className='price'>{ price }$</p>
        </div>
        </Link>
    </div>
  </>
  );
}

export default CardItem;
