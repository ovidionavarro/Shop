import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Shop } from '../Components/Shop/Shop'
import { Product } from '../Components/Product/Product'
import { Cart } from '../Components/Cart/Cart'
import { NotFound } from '../Components/NotFound/NotFound'
export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'  element={<Shop/>}></Route>
            <Route path='/:id'  element={<Product/>}></Route>
            <Route path='/cart'  element={<Cart/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
