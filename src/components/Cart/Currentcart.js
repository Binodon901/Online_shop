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
   

        <div className="container">
            <div className='row'>
            <h1> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> CART <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></h1><br></br>
            <h5>Current order</h5>
            <h6>Currently selected : {props.cart.length}</h6>  
            <h6>Price: {total}</h6>
            </div>
            

        </div>
    );
};

export default Currentcart;
