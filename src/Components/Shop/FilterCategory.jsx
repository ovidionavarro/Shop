import React from 'react'
import { useState } from 'react'

export const FilterCategory = ({setFilter}) => {
    const [filterCategory, setFilterCategory] = useState('')

    const handleChange=(e)=>{
        console.log(e.target.value)
        setFilterCategory(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setFilter(filterCategory)


    }
  return (
    <section>
        <div>
            <form  onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder="men's clothing"
                name='filterCategory'
                autoComplete='on'
                value={filterCategory}
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
