
import './ShoppingCart.css';

import React, { useReducer } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const initialState = {
  cart: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, { ...action.item, quantity: 1 }]
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id
            ? { ...item, quantity: action.quantity }
            : item
        )
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id)
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', item });
  };

  const updateItemQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  return (
    <div>
      <h1 class="cont">Fruit Shop</h1>
      <ProductList addItemToCart={addItemToCart} />
      <Cart 
        cart={state.cart} 
        updateItemQuantity={updateItemQuantity} 
        removeItemFromCart={removeItemFromCart} 
      />
    </div>
  );
};

export default ShoppingCart;
