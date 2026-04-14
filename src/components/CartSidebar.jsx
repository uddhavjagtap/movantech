
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function CartSidebar() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    totalPrice 
  } = useContext(CartContext);

  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-40"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            Your Cart 
            <span className="text-indigo-600">({cart.length})</span>
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-3xl text-zinc-400 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">🛒</p>
              <p className="text-xl text-zinc-500">Your cart is empty</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 border-b pb-6 last:border-none">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-2xl" 
                />
                <div className="flex-1">
                  <h4 className="font-medium leading-tight">{item.name}</h4>
                  <p className="text-emerald-600 font-semibold mt-1">₹{item.price}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex border border-zinc-300 rounded-full overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                        className="w-9 h-9 hover:bg-zinc-100"
                      >
                        −
                      </button>
                      <span className="px-5 py-1 font-medium flex items-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                        className="w-9 h-9 hover:bg-zinc-100"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-rose-500 hover:text-rose-600 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t bg-white">
            <div className="flex justify-between text-xl font-semibold mb-6">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
            
            <button 
              onClick={() => alert('Thank you for shopping with Movantech! ')}
              className="w-full py-4 bg-indigo-600 text-white rounded-3xl text-lg font-medium hover:bg-indigo-700 mb-3"
            >
              Proceed to Checkout
            </button>

            {/* Back Button */}
            <button 
              onClick={() => {
                setIsCartOpen(false);
                navigate('/shop');
              }}
              className="w-full py-3 text-zinc-600 font-medium hover:bg-zinc-100 rounded-3xl transition"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}