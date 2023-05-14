import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Currentcart = (props) => {
    let total=0;
   
    console.log(props);
    
    
    for(let i=0;i<props.cart.length; i++){
        const product=props.cart[i];
        total=Math.round(total+props.cart[i].price); 
     
    }
  
    const vat=(total*.1).toFixed(2);
    let grandTotal=total+Number(vat);
    console.log(grandTotal);

    return (
   

        <div>
            <h1>CART <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></h1>
            <h6>Current Item: {props.cart.length}</h6>  
            <h6>Price: {total}</h6>
        </div>
    );
};

export default Currentcart;
