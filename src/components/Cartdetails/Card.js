import React, { useState } from 'react';
import './Card.css'

const Card = (props) => {
  const {card, setcard} = props;
  const [Pd, setPd] = useState([])
  const random = () => {
  const newItem = card[Math.round(Math.random() * card.length)]
   setPd(newItem)

  }
  const removeData =() => {
   setcard([])
   setPd([])
   
  }
  return (
    <div>
      <h3 className='text-center'>select product</h3>
      <div className='product-name'>
      {
        card.map(item => <h3 key={item.id}>{item.title}</h3>)
       }
       </div>
      <button className='btn btn-primary' onClick={()=> random()}>choose one</button>
      <br />
      <button className='btn btn-primary mt-2' onClick={removeData}>reset</button>
      <h3 className='Randompd mt-2'>{Pd.title}</h3>
      </div>
  );
};
export default Card;