import { useContext, useState } from "react"
import { FilterContext } from "../context/filter"



export function UseFilter() {
    const{filter,setFilter}=useContext(FilterContext)
  
    const filterCategory=(products)=>{
      return products.filter(product=>{
        return(filter===''||filter===product.category)
      })
    }
    return {filter,filterCategory,setFilter}
  }