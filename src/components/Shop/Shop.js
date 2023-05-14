import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import image from '../img/wp2519762-sunderbans-national-park-wallpapers.jpg'
import './Shop.css'
import { useHistory } from 'react-router-dom';
import '../Product/Product.css'
import { Button, Form } from 'react-bootstrap';
import Currentcart from '../Cart/Currentcart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        const sameProduct = newCart.filter(i => i.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    const history = useHistory();
    const placeReviewOrderHandler = () => {
        history.push('/orderreview')
    }
    return (

        <div className="container">
            <div className="row">
                <div className='col-md-8'>
                    <div className='shop-container'>
                        <div className='product-container'>
                            {
                                products.map(product => <Product
                                    key={product.key}
                                    product={product}

                                    handleAddProduct={handleAddProduct}>

                                </Product>)
                            }

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>


                    <div className='cart-container col-md-3'>
                        <Currentcart cart={cart}></Currentcart> 
                        <Button
                            variant="primary"
                            onClick={placeReviewOrderHandler}
                            className="d-flex align-items-center"
                        >View Full Order</Button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Shop;