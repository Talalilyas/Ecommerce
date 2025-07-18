import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductCarousel from './ProductCarousel';
import TopDealsSection from './TopDealsSection';
import Blackfriday from './Blackfriday';
import Collection from './Collection';
import Discovermore from "./Discovermore"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ProductCarousel />
     <TopDealsSection />


     <Blackfriday/>
     <Collection/>
     <Discovermore/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
