import React from 'react'
import { useState } from 'react'
import { UseFilter } from '../../Hooks/UseFilter'

export const FilterCategory = () => {
  const { filter, setFilter } = UseFilter()

  const handleChange = (e) => {
    console.log(e.target.value)
    setFilter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFilter(filter)
  }

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type='text'
            placeholder="men's clothing"
            name='filter'
            autoComplete='on'
            value={filter}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded text-black"
          />
          <button 
            type='submit' 
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
          >
            Search Category
          </button>
        </form>
      </div>
    </section>
  )
}