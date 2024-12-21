import React from 'react'
import './products.css'
import { Link } from 'react-router-dom'
import { UseCart } from '../../Hooks/UseCart'




export const Products = ({products}) => {
  const{cart, addToCart, clearCart,removeFromCart}=UseCart()
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
            <button onClick={()=>addToCart(product)}>
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
