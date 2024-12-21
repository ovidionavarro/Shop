import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Shop } from '../Components/Shop/Shop'
import { Product } from '../Components/Product/Product'
import { Car } from '../Components/Car/Car'
import { NotFound } from '../Components/NotFound/NotFound'
export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'  element={<Shop/>}></Route>
            <Route path='/:id'  element={<Product/>}></Route>
            <Route path='/car'  element={<Car/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
