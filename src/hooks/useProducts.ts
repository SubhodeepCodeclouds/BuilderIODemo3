"use client";
import { useEffect, useState } from "react";
import { builder } from "@builder.io/react";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export function useProducts() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await builder.getAll("product");
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return products;
}