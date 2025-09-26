import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import {Hello} from "./components/Hello";

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello/>}></Route>
      </Routes>


      </BrowserRouter>
     
    </div>
   
  )
}

export default App
