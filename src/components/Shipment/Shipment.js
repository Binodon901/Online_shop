import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { Container, Alert } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { removeFromDatabaseCart } from '../../utilities/databaseManager';
import { getDatabaseCart} from '../../utilities/databaseManager';
import './Shipment.css';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const [cart, setCart] = useState([]);
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
    
    // Automatically logout when component unmounts or route changes
    useEffect(() => {
        const unlisten = history.listen(() => {
            setLoggedInUser({});
            localStorage.clear();
        });

        return () => {
            unlisten();
        };
    }, [history, setLoggedInUser]);

    console.log(watch("example")); // watch input value by passing the name of it

    const handleSignOut = () => {
      setLoggedInUser({});
      removeFromDatabaseCart(); // Call removeFromDatabaseCart to clear the database cart
  }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className='container'>
            <div className='row col-md-12'>
        <Container className="mt-5">
            <Alert variant="success">
                <Alert.Heading>Congratulations {loggedInUser.name}!{loggedInUser.displayName}</Alert.Heading>
                <p className="mb-3">
                    Your email, <strong>{loggedInUser.email}</strong>!
                </p>
                <p>
                    Your order has been confirmed {loggedInUser.name}. Thank you for your purchase. If you have
                    any questions, please contact our customer support.
                    
                </p>
                <Cart cart={cart}></Cart>
            </Alert>
            
        </Container>
        </div>
        </div>
        
    );
};

export default Shipment;

