"use client";
import Image from "next/image";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/context/CartContext";

export default function ProductList() {
  const products = useProducts();
  const { addToCart } = useCart();

  if (!products.length) return <h1>Loading products...</h1>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <Image src={product.image} alt={product.title} width={200} height={200} />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p>${product.price}</p>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
