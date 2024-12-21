import React, { useState } from 'react'
import { Products } from './Products'
import {products as initialState} from '../../models/product.json'
import { Header } from './Header'
import { UseFilter } from '../../Hooks/UseFilter'


export const Shop = () => {
  const[products]=useState(initialState)
  const{filter,filterCategory,setFilter}=UseFilter()
 
  const filterProducts=filterCategory(products)

  return (
    <>
    <Header />
    <Products products={filterProducts}/>
    </>
  )
} 
 