

const CartItem = ({ item, discountCart, addToCart, removeFromCart }) => {
  return (
    <li className="flex flex-col items-center p-4 bg-white shadow rounded">
      <img src={item.product.image} alt={item.product.name} className="max-w-80 max-h-80 object-cover mb-4" />
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
  );
};

export default CartItem;