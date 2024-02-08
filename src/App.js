import React from 'react';
import './App.css';
import './index';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';



import { Route, Routes } from 'react-router-dom';


function App() {
  console.log("Working fine App.js")
  return (
    <>

      <Navbar />


      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>


      </Routes>




    </>

  );
}

export default App;
