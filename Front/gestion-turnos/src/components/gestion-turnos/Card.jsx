import React from 'react';

const Card = ({title, image}) => {
  return (
    <div className='card'>
      <img className='cardImage' src={image} />
      <p className='cardText'>{title}</p>
    </div>
  );
};

export default Card;
