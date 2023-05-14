import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import '../Product/Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignIn} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Review = () => {
    const [cart, setCart] = useState([]);
  
    const history=useHistory();
    const placeOrderHandler=()=>{
        history.push('/shipment')
    }
    const removeProduct = (productKey) => {

        console.log("it works", productKey)
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        console.log(cartProducts);
    }, []);

    

    return (

        <div className="container">
            <div className='row'>
            
            <div className='col-md-6'>
            <Cart cart={cart}></Cart>
                <button className="mainButton" onClick={placeOrderHandler}><FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>Order</button>
                <br></br>
                <br></br>
                <br></br>
                </div>
            
            <div className="col-md-6">
            <h1>Total {cart.length} types of item</h1>
            {
                cart.map(pd => <ReviewItem product={pd} removeProduct={removeProduct}></ReviewItem>)
            }
            </div>
        </div>
        </div>

    );
};

export default Review;