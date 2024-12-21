

import React, { useState } from 'react';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', quantity: 1, price: 109.95, img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
    { id: 2, name: 'Mens Casual Premium Slim Fit T-Shirts', quantity: 2, price: 22.3, img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex flex-col items-center p-4 bg-white shadow rounded">
              <img src={item.img} alt={item.name} className="w-32 h-32 object-cover mb-4" />
              <div className="text-center">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <button 
                  className="px-2 py-1 bg-gray-200 rounded" 
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  className="px-2 py-1 bg-gray-200 rounded" 
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <button 
                  className="px-2 py-1 bg-red-500 text-white rounded" 
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};