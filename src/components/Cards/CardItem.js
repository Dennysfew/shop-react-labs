import React from 'react';
import { Link } from "react-router-dom";
function CardItem(props) {
  return (
    <>
    <div className='cards__item'>
      <Link className='cards__item__link' to={props.path}>
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
            className='cards__item__img'
            alt='Clothes image'
            src={props.src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
          <p className='price'>{props.price}$</p>
        </div>
        </Link>
    </div>
  </>
  );
}

export default CardItem;
