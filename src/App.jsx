import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import {Hello} from "./components/Hello";
import {Form} from "./components/Form";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Hello/> <Form/></>}></Route>
      </Routes>


      </BrowserRouter>
     
    </div>
   
  )
}

export default App
