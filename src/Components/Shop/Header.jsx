import React from 'react'
import { FilterCategory } from './FilterCategory'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        ShoppingCar
      </h1>
      <div className="flex items-center space-x-4">
        <FilterCategory />
        <button className="bg-white text-blue-600 px-4 py-2 rounded">
          <Link 
            className='hover:underline'
            to='/cart'
          >
            Cart
          </Link>
        </button>
      </div>
    </header>
  )
}
