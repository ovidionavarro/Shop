import React from 'react'
import { Products } from './Products'
import {products} from '../../models/product.json'

export const Shop = () => {
  return (
   <Products products={products}/>
  )
} 
 