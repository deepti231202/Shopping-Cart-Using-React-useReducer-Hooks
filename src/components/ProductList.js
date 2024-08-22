import React from 'react';
import './ProductList.css';

const ProductList = ({ addItemToCart }) => {
  const products = [
    { id: 1, name: 'Apple', price: 10 },
    { id: 2, name: 'Orange', price: 20 },
    { id: 3, name: 'Mango', price: 30 }
  ];

  return (
    <div>
      <h2 class="cont">Available Items</h2>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name} - Rs {product.price}</p>
          <button onClick={() => addItemToCart(product)}>Add {product.name}</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
