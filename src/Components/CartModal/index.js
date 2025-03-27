import React from 'react';
import { Trash2 } from "lucide-react";
import { useCart } from '../CartContext';

const CartModal = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    calculateTotal, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-96 bg-white h-full p-6 overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-700">Carrinho</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-red-500 hover:text-red-700"
          >
            Fechar
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Seu carrinho está vazio</p>
        ) : (
          <>
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex-grow">
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="font-semibold">R$ {(item.price * item.quantity).toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <div className="mt-6">
              <div className="flex justify-between font-bold text-xl">
                <span>Total:</span>
                <span>R$ {calculateTotal()}</span>
              </div>
              <button 
                className="w-full bg-blue-600 text-white py-3 rounded mt-4 hover:bg-blue-700 transition"
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;