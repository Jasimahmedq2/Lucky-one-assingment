import React, { useState } from 'react';
import './Card.css'

const Card = (props) => {
  const {card} = props;
  const [pd, setPd] = useState('')
  const random = () => {
  const newItem =card[  Math.round(Math.random() * card.length)]
setPd(newItem.title)
  }
  console.log(card)

  return (
    <div>
      <h3 className='text-center text-primary'>product summary</h3>
      <div className='product-name'>
      {
        card.map(item => <h3 key={item.id}>{item.title}</h3>)
       }
       </div>
      <button className='btn btn-primary' onClick={()=> random()}>random</button>
      <button className='btn btn-primary ms-2'>remove</button>
      <h3>{pd}</h3>
      </div>
  );
};
export default Card;