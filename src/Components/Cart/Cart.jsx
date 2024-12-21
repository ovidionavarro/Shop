import { UseCart } from '../../Hooks/UseCart';

export const Cart = () => {
  const { cart, addToCart,removeFromCart,
    discountCart,clearCart } = UseCart();

  return (
    
    <>
      <header>
      <button 
          className="px-2 py-1 bg-green-500 text-white rounded" 
          onClick={() => clearCart()}>
          Remove
      </button>
      </header>
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
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
      )}
    </div>
    </>
  );
};