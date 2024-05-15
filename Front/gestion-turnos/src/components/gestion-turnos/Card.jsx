import React from 'react';
import { PAGES } from '../../constants/constants';

const Card = ({ title, image, handleService }) => {
  return (
    <div
      className="card"
      onClick={() => {
        handleService(`${title}`);
      }}
    >
      <img className="cardImage" src={image} />
      <p className="cardText">{title}</p>
    </div>
  );
};

export default Card;
