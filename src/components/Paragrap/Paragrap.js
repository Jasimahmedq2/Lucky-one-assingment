import React from 'react';

const Paragrap = () => {
  return (
    <div className='row container'>
     
    <div className="card col-12 mx-2 col-lg-6 shadow  rounded my-2" style={{width: '18rem'}}>
       <div class="card-body">
    <h5 className="card-title">props and state</h5>
    <p className="card-text">
     Props  pass data from one component to another.
     props are Immutable.
     Props can be accessed by the child component.
     Props make components reusable.
     <br />
     <br />
     State cannot be accessed by child components.
     state is mutable.
     State cannot make components reusable.
    </p>
   
    
     </div>
    </div>

    <div className="card col-12 col-lg-6 mx-2 shadow  rounded my-2" style={{width: '18rem'}}>
       <div class="card-body">
    <h5 className="card-title">useState</h5>
    <p className="card-text">
     useState is a Hook that allows you to have state variables in function component.useSate declare in two element.The first element is initial state and the second  is a function that is used for updating the state.

    </p>
   
    
     </div>
    </div>
      
   </div>
  );
};

export default Paragrap;