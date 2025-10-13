import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import {Hello} from "./components/Hello";
import {Form} from "./components/Form";
import Conditional from './components/Conditional';
import Condition from './components/Conditon2';
import { Condition3 } from './components/Condition3';
import { SendMessage } from './components/SendMessage';
import { FruitList } from './components/FruitList';
import  ProductList  from './components/ProductList';
import BuyNow from './components/BuyNow';
import Cart2 from './components/Cart2';
import { CartProvider } from './components/Cart';


function App() {

  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Hello/> <Condition3 /> </> }></Route>
        <Route path="/conditon"element={<><Conditional/> <Condition/></>}></Route>
        <Route path="/form" element={<> <Form/> </> }></Route>
        <Route path="/send" element={<> <SendMessage/> <FruitList/> </> }></Route>
        <Route path="/product" element={<> <ProductList /></> }></Route>
        <Route path="/buy" element={<> <BuyNow /></> }></Route>
        <Route path="/cart2" element={<> <Cart2 /></> }></Route>


      </Routes>


      </BrowserRouter>
      </CartProvider>
     
    </div>
   
  )
}

export default App
