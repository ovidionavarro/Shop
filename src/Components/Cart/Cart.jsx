import { useNavigate } from 'react-router-dom';
import { UseCart } from '../../Hooks/UseCart';

export const Cart = () => {
  const { cart, addToCart,removeFromCart,
    discountCart,clearCart } = UseCart();
  
    const navigate=useNavigate()
  


  const handleReturn=()=>{  
      navigate(-1,{
        replace:true
      }) 
      // return <Navigate to='/' replace='true'/>
  }
  
      const handlebuyCart=()=>{
          let cost=0
          for (let i = 0; i < cart.length; i++) {
              cost += cart[i].product.price * cart[i].quantity ; 
          }
          alert(`Purchase made by ${cost} `)
          clearCart()
      }

  return (
    
    <>
      <header className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <button
        className="px-2 py-1 bg-green-500 text-white rounded mr-2"
        onClick={handleReturn}
      >
        Back
      </button>
      <button
        className="px-2 py-1 bg-green-500 text-white rounded"
        onClick={() => clearCart()}
      >
        Remove
      </button>
    </header>
      <div className="p-4">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
        <header className="flex justify-between items-center mb-4">
      
        <button
          onClick={()=>handlebuyCart()}
          className="px-2 py-2 bg-sky-500 text-white rounded"
        >
          BUY
        </button>
      </header>
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.product.id} className="flex flex-col items-center p-4 bg-white shadow rounded">
              <img src={item.product.image} alt={item.product.name} className="w-32 h-32 object-cover mb-4" />
              <div className="text-center">
                <h2 className="text-lg font-semibold">{item.product.name}</h2>
                <p className="text-gray-600">${item.product.price}</p>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <button 
                  className="px-2 py-1 bg-gray-200 rounded" 
                  onClick={() => discountCart(item.product)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  className="px-2 py-1 bg-gray-200 rounded" 
                  onClick={() => addToCart(item.product)}
                >
                  +
                </button>
                <button 
                  className="px-2 py-1 bg-red-500 text-white rounded" 
                  onClick={() => removeFromCart(item.product)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        </>        
      )}
    </div>
    </>
  );
};