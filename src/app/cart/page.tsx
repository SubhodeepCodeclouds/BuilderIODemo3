"use client";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b py-2">
              <span>{item.title} ({item.quantity}) - ${item.price * item.quantity}</span>
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}