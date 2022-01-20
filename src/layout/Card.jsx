import React from 'react';

const Card = (props) => {
  return <div className={`card ${props.reverse ? 'reverse' : ''}`}>{props.children}</div>;
};

export default Card;
