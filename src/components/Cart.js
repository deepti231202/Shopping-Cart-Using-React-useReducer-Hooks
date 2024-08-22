import React from 'react';
import CartItem from './CartItem';
import './Cart.css';

const Cart = ({ cart, updateItemQuantity, removeItemFromCart }) => {
  return (
    <div>
      <h2 class="cont">Cart</h2>
      {cart.length > 0 ? (
        cart.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            updateItemQuantity={updateItemQuantity} 
            removeItemFromCart={removeItemFromCart} 
          />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div>
        <h2 class="cont">Total</h2>
        <p class="Rs">
          Rs{' '}
          {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
