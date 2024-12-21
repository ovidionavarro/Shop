import React, { useState } from 'react'
import { Products } from './Products'
import {products as initialState} from '../../models/product.json'
import { Header } from './Header'

export const Shop = () => {
  const[products]=useState(initialState)
  const [filter, setFilter] = useState('')

  const filterCategory=(products)=>{
    return products.filter(product=>{
      return(filter===''||filter===product.category)
    })
  }
  const filterProducts=filterCategory(products)

  return (
    <>
    <Header setFilter={setFilter}/>
    <Products products={filterProducts}/>
    </>
  )
} 
 