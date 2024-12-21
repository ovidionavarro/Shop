import React from 'react'
import './products.css'
import { Link } from 'react-router-dom'




export const Products = ({products}) => {
  return (
    <main className='products'> 
    <ul>
      {Array.isArray(products) && products.map(product=>(
        <li key={product.id}>
          <img src={product.image} alt={product.title}/>
          <div>
            <strong>
              {product.title}
            </strong>--{product.price}
          </div>
          <div>
            <button>
              Add
            </button>
          </div>
          <Link to={`/${product.id}`}>
          More...
          </Link>
        </li>
      ))}
    </ul>
    
  </main>
  )
}
