import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Products from './Products'
import Product from './Product'
import Cart from './Cart'
import Checkout from './Checkout'
import Footer from './Footer'

const Redirect = ({presentUser}) => {
  return (
    <div>
      <Router>
        <Nav presentUser = {presentUser}/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path="/products/:id" element={<Product/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
          </Routes>
          <Footer/>
      </Router>
    </div>
  )
}

export default Redirect
