import React from 'react';
import Card from './Card/Card';

const CardSection = (props) => {
  return (
    <section className='p-3'>
      <Card data={props.data} newCard={props.newCard} />
    </section>
  );
};

export default CardSection;