
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';


export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate=useNavigate()
  


  const handleReturn=()=>{  
      navigate(-1,{
        replace:true
      }) 
      // return <Navigate to='/' replace='true'/>
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <header className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Details</h1>
      <button
        className="px-2 py-1 bg-green-500 text-white rounded mr-2"
        onClick={handleReturn}
      >
        Back
      </button>
    </header>
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img src={product.image} alt={product.title} className="max-w-80 max-h-80 object-cover mb-4 md:mb-0 md:mr-8" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">${product.price}</p>
          <p className="text-gray-500 mb-4">Category: {product.category}</p>
        </div>
      </div>
    </div>
    </>
  );
};