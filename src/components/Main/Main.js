import React, { useEffect, useState } from 'react';
import Card from '../Cartdetails/Card';
import Product from '../Product/Product';
import './Main.css'

const Main = () => {
 const [products, setproducts] = useState([])
 const [card, setcard] = useState([])


 useEffect(()=>{
    fetch(`https://fakestoreapi.com/products?fbclid=IwAR2c-tIM-XP8V-KcuV8Pe4Ub3p-wTeH6L67CmiU6KK-Ei6uZ61bV5SVY1xo`)
    .then(res => res.json())
    .then(data => setproducts(data))
 },[]) 

 const AddToCard = (product) => {
   const newcard = [...card, product]
   setcard(newcard)
 }
  return (
    <div className='row'>
      <div className='col-12 col-md-10 col-lg-9 row'>
       {
          products.map(product => <Product product={product} 
            key={product.id}
            AddToCard={AddToCard}
            ></Product>)
         }
      </div>
     
   
        <div className='col-10 col-md-2 col-lg-2 details-style h-50'>
          <Card card={card} setcard={setcard}></Card>
          
          
        </div>
      
    </div>
  );
};


export default Main;