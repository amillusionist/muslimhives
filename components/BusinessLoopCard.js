import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './starRating'

const BusinessLoopCard = ({ photo, name, description, onClick }) => {
  return (
    <div className="loopbusiness-card flex col gap-20 card">
      <div className="loopbusiness-card__photo">
        <img src={photo} alt={name} />
      </div>
      <div className="loopbusiness-card__info flex col">
        <h3 className="loopbusiness-card__name">{name}</h3>
        <p className="loopbusiness-card__description">{description}</p>
        <div className='flex gap-5 mT5'><StarRating /></div>
        
      </div>
      <button className="loopbusiness-card__button" onClick={onClick}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

BusinessLoopCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BusinessLoopCard;
