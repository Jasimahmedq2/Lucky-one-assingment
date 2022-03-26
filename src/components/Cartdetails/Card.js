import React from 'react';
const Card = (props) => {
  const {card} = props;

  return (
    <div>
      <h3>hello world</h3>
      {
        card.map(item => <h3 key={item.id}>{item.title}</h3>)
      }
      <button>random</button>
      <button>remove</button>
      </div>
  );
};
export default Card;