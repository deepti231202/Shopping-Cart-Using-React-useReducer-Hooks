import React from 'react';
import './CartItem.css';

const CartItem = ({ item, updateItemQuantity, removeItemFromCart }) => {
  return (
    <div>
      <p>{item.name} - Rs {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
        +
      </button>
      <button
        onClick={() =>
          item.quantity > 1
            ? updateItemQuantity(item.id, item.quantity - 1)
            : removeItemFromCart(item.id)
        }
      >
        -
      </button>
      <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
