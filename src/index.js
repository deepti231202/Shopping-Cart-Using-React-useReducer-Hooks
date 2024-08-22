// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(<App />,document.getElementById("root"));

// // Render the App component inside the root element
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 


// Find the root element in your HTML where you want to mount the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
