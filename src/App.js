
// import React from 'react';
// import ReactDOM from 'react-dom';
// import ShoppingCart from './ShoppingCart';

// const App = () => (
//   <div>
//     <ShoppingCart />
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import Cart from './components/Cart';

const App = () => (
  <div>
    <ShoppingCart />
    {/* <ProductList />
    <CartItem />
    <Cart /> */}
  </div>
);

export default App;
