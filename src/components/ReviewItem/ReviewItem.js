import React from 'react';
import '../Product/Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const ReviewItem = (props) => {
    const{name,quantity,key}=props.product;
    return (
        <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
        <div className='products'>
        <h6 className='product-name'>{name}</h6><br></br>
        <p>Quantity: {quantity}</p><br></br>
        <button className="mainButton" onClick={()=>props.removeProduct(key)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Remove</button>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ReviewItem;