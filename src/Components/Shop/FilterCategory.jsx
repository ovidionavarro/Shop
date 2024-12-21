import React from 'react'
import { useState } from 'react'
import { UseFilter } from '../../Hooks/UseFilter'

export const FilterCategory = () => {
    const{filter,setFilter}=UseFilter()
    // const [filterCategory, setFilterCategory] = useState('')

    const handleChange=(e)=>{
        console.log(e.target.value)
        setFilter(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setFilter(filter)


    }
  return (
    <section>
        <div>
            <form  onSubmit={handleSubmit}>
                <input
                type='text' 
                placeholder="men's clothing"
                name='filter'
                autoComplete='on'
                value={filter}
                onChange={handleChange}
                />
                <button type='submit'>
                    Search Category
                </button>
            </form>
        </div>
    </section>

  )
}
