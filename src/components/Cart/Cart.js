import React from 'react';
const Cart = (props) => {
    let total=0;
    console.log(total);
    for(let i=0;i<props.cart.length; i++){
        const product=props.cart[i];
        total=Math.round(total+props.cart[i].price);
       
    }
    return (
   

        <div>
            <h3>This is cart</h3>
            <h6>Cart length:{props.cart.length}</h6>  
            <h6>Product price:{total}</h6>
        </div>
    );
};

export default Cart;