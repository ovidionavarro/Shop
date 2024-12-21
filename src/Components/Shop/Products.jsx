import { Link } from 'react-router-dom';
import { UseCart } from '../../Hooks/UseCart';


export const Products = ({products}) => {
  const { addToCart } = UseCart();
  
  return (
    <main className='products'>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(products) && products.map(product => (
          <li key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className=" max-w-80 max-h-80 object-cover mb-4" />
            <div className="mb-2">
              <strong>{product.title}</strong> -- ${product.price}
            </div>
            <div className="mb-2">
              <button 
                onClick={() => addToCart(product)} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700"
              >
                Add
              </button>
            </div>
            <Link to={`/${product.id}`} className="text-blue-500 hover:underline">
              More...
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};