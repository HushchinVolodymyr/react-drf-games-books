// Card.js

import React from 'react';
import './Card.css';

const Card = ({ id, image, title, description }) => {
  const img = "http://localhost:8000" + image
  const url = '/post/' + id


  return (
    <a href={url}>
      <div className="card">
        <div className={'img-container'}>
          <img className="card-image" src={img} alt={title} />
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
