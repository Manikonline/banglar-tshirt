import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveCart}) => {
    // alternative:01;(all alternative are written blow)
    let message;
    if(cart.length===0){
        message= <p>Please add some product</p>
    }
    return (
        <div>
           <h2 className={cart.length === 1? 'blue':'yellow'}>Order Summary:{cart.length}</h2> 
           {/* Alternative:05 */}
           <p className={`blod bordered${cart.length===3 ? 'purple': 'red'}`}>Something</p>
           {/* alternative :02 */}
           {
            cart.length >2 ? <span className=''>Aro kino</span>:<span>fokira</span>
           }
           {message}
           {
            
             cart.map(tshirt=><p
                 key={tshirt._id}
                 >{tshirt.name} <button onClick={()=>handleRemoveCart(tshirt._id)}>X</button> </p>)
           }
           {/* alternative:03 */}
           {
            cart.length === 2 && <p>Double bonanza</p>
           }
           {/* alternative:04 */}
           {
            cart.length ===3 || <h3>Tinta to hoilo na!!</h3>
           }
        </div>
    );
};

export default Cart;

/**
 *CONDITTIONAL RENDERING
 *1.use if else to set a variable that will contain an element, components 
 2.ternary operator : condition >Please add some product? 'for true' : 'false'
 3.logical $$ : (if the condition is true then the next thing will be displayed)
 4. logical || (if the condition  is false then the next thing will be displayed)
**/ 


/*
*5.CONDITIONAL CSS
*/ 