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

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Hello/> <Condition3 /> </> }></Route>
        <Route path="/conditon"element={<><Conditional/> <Condition/></>}></Route>
        <Route path="/form" element={<> <Form/> </> }></Route>
        <Route path="/send" element={<> <SendMessage/> <FruitList/> <ProductList /></> }></Route>
      </Routes>


      </BrowserRouter>
     
    </div>
   
  )
}

export default App
