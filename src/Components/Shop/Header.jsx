import React from 'react'
import { FilterCategory } from './FilterCategory'

export const Header = ({setFilter}) => {
  return (
    <header>
        <h1>
            ShoppingCar
        </h1>
        <FilterCategory setFilter={setFilter} /> 

    </header>
  )
}
