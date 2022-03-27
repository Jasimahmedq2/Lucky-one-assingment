import React from 'react';
import './Product.css'
import {AiOutlineShoppingCart} from "react-icons/ai"

const Product = (props) => {
  const {AddToCard, product} = props 
  const {title,image,price, id} = product

  return (
 <div className='col-12 col-lg-4 col-md-6  shadow-md p-3  rounded'>

<div className="card" style={{width: '18rem' }}>
  <img src={image} className="card-img-top w-100" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">name: {title}</h5>
    <h5 className="card-text">price: ${price}</h5>
    <h5>id: {id}</h5>
    
    <button className="btn btn-primary" onClick={()=>AddToCard(product)}>Add to card <AiOutlineShoppingCart></AiOutlineShoppingCart></button> 
  </div>
  </div>
      
  </div>
  );
};

export default Product;