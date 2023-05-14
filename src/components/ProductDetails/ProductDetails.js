import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey}=useParams();
    const product=fakeData.find(pd=>pd.key===productKey);
    return (
      
         <div className='container'>
         <div className='row'>
         <div className='col-md-12'>
       <div className='product'>
       <h1>Product key: {productKey}</h1>
              
        <img src={product.img} alt="" />
            </div>
       <div className='product-name'>
           <h4>{product.name}</h4>
           <p>Comment</p>
           <br/>
           <p><small>by:{product.seller}</small></p>
           <br/>
           <p>Price:${product.price}</p>
           <br/>
           <p><small>Only {product.stock} products left in stock - Order soon:</small></p>
           

       </div>
       </div>
       </div>
       </div>
       
   );
};


export default ProductDetails;