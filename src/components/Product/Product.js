import React from 'react';
import './Product.css'
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {key}=props.product;         
    return (
        <div className='container'>
          <div className='row'>
        <div className='product'>
          <div>
            <img src={props.product.img} alt="" />
          </div>
        <div className='product-name'>
            <h5><Link to ={"/product/"+key}>{props.product.name}</Link></h5>

          
            <br/>
            <p>Price:${props.product.price}</p>
            <br/>
            
            <button className="mainButton" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart</button>

        </div>
        </div>
        </div>
        </div>
    );
};

export default Product;