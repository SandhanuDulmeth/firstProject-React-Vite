import { useState } from 'react'

import './App.css'
import Product from './Products'
import Home from './Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>Hello</h1>


      <BrowserRouter>
<ul>
  <li>
    <Link to="/home">Home</Link>
  </li>
  <li>
    <Link to="/products">Products</Link>
  </li>
</ul>
       

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
