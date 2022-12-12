import React from 'react'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import ProductContextProvider from "../global/ProductContext"
import Shops from './Shops'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import CartContextProvider from '../global/CartContext'
import Profile from './Profile'
import WishlistContextProvider from '../global/WishlistContext'
import Login from './Login'
import SignUp from './SignUp'
import Contactus from './Contactus'

export default function Apps() {
    return (
      <>
      <ProductContextProvider>
      <CartContextProvider>
      <WishlistContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shops/:mc/:sc/:brand/" element={<Shops/>}></Route>
        <Route path="/product/:id/" element={<SingleProduct/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path='/profile' element={<Profile/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/contactus' element={<Contactus/>} ></Route>
      </Routes>
      
      </BrowserRouter>
      </WishlistContextProvider>
      </CartContextProvider>
      <Footer/>
      </ProductContextProvider>
      </>  
    )
}

