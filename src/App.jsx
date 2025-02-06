import { useState } from 'react'

import './App.css'
import Product from './pages/Products'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'


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
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
