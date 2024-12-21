import { useEffect, useState } from 'react'
import { Products } from './Products'
import { Header } from './Header'
import { UseFilter } from '../../Hooks/UseFilter'


export const Shop = () => {
  const [products, setProducts] = useState([]);
  const{filterCategory}=UseFilter()
  const [loading, setLoading] = useState(true);
 
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
// 
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filterProducts=filterCategory(products)

  return (
    <>
    <Header />
    <Products products={filterProducts}/>
    </>
  )
} 
 