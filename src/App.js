import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {Routes, Route} from 'react-router-dom';
import Checkout from "./Checkout";
import Product from "./Product";



function App() {
  return (
    <Routes>
        <Route path="/Checkout" element={
        <>
        <Header />
        <Checkout />
        </>
      }/>
      <Route path="/" element={
                     <>
                     <Header /> 
                     <Home />
                     </>
                   }/>   
    </Routes>
  )}
export default App;