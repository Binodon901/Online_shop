import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Inv from './components/Inv/Inv';
import Blank from './components/Blank/blank';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './components/ProductDetails/ProductDetails';
import Review from './components/Review/Review';
import Shipment from './components/Shipment/Shipment';
import Private from './components/Private/Private';

export const UserContext=createContext();
function App() {
   const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <Header></Header>
     
        <Switch>
  
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Private path="/manageinventory">
          <Shop></Shop>
          </Private>
          <Route path="/orderreview">
            <Review></Review>
          </Route>
          <Private path='/shipment'>
              <Shipment></Shipment>
          </Private>
          <Route path='/login'>
              <Login></Login>
          </Route>
       
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path="*">
            <Shop></Shop>
          </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
