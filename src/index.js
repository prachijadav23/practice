import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

import Products from './components/Products/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(
  <React.StrictMode>

<BrowserRouter>
<Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>
<Footer />
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
