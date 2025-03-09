import { useState } from 'react'

import './App.css'
import Product from './pages/Products'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import CheckBox from './pages/CheckBox' 



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>Hello</h1>


      <BrowserRouter>
        <Navigation />


        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Product />} />     
          <Route path="/checkBox" element={<CheckBox />} />

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
