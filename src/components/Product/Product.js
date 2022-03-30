import React from 'react';
import './Product.css'
const Product = (props) => {

    return (
  
        <div className='product'>
          <div>
            <img src={props.product.img} alt="" />
            </div>
        <div className='product-name'>
            <h3>{props.product.name}</h3>
            <br/>
            <p><small>by:{props.product.seller}</small></p>
            <br/>
            <p>Price:${props.product.price}</p>
            <br/>
            <p><small>stock only left:  {props.product.stock}</small></p>
            <button className="mainButton" onClick={()=>props.handleAddProduct(props.product)}>Add to cart</button>

        </div>
        </div>
    );
};

export default Product;