import { useNavigate } from 'react-router-dom';
import { UseCart } from '../../Hooks/UseCart';
import CartItem from './CartItem';
export const Cart = () => {
  const { cart, addToCart,removeFromCart,
    discountCart,clearCart } = UseCart();
  
  const navigate=useNavigate()
  const handleReturn=()=>{  
      navigate(-1,{
        replace:true
      }) 
      
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
            <CartItem 
            key={item.product.id} 
            item={item} 
            discountCart={discountCart} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart} 
          />
          ))}
        </ul>
        </>        
      )}
    </div>
    </>
  );
};