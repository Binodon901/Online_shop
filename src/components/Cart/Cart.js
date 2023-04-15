import React from 'react';

const Cart = (props) => {
    let total=0;
    let quant=0;
    console.log(props);
    
    
    for(let i=0;i<props.cart.length; i++){
        const product=props.cart[i];
        total=Math.round(total+((props.cart[i].price)*(props.cart[i].quantity))); 
        quant=quant+(props.cart[i].quantity)   
       
    }

    const vat=(total*.1).toFixed(2);
    let grandTotal=total+Number(vat);
    console.log(grandTotal);

    return (
   

        <div className="container">
            <h1>Order Summary</h1><br></br>
            <h6>Items ordered: {quant}</h6>  
            <h6>Product price: {total}</h6>
            <small>VAT (5%): {vat}</small><br></br>
            <br></br>
            <h6>Grand Total Price: {grandTotal}</h6>

        </div>
    );
};

export default Cart;
