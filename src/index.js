import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// <App />

const prix1 = 120
const prix2 = 120

/*const fruits=["mangues","bananes","avocats"]

const read = ()=>{
  let myFruits= []

  myFruits = fruits.map((fruit)=>{
   return  <li>
        {fruit}
      </li>
  })
  
  return myFruits
}
*/
root.render(
  /*<div>
  <h1>
    Liste de fruits {prix1+prix2}
  </h1>
  <ul>
   {read()} 
  </ul>
  </div>*/
  <App></App>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
