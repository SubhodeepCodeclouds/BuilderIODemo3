"use client";
import Link from "next/link";
import { useLinks } from "@/hooks/useLinks";
import { useCart } from "@/context/CartContext";

export default function BuilderHeader() {
  const links = useLinks();
  const { cart } = useCart();

  if (!links) return null;

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <nav>
        <ul className="flex space-x-4">
          {links?.navigation?.map((link: any) => (
            <li key={link.url}>
              <Link href={link.url} className="hover:underline">{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/cart" className="bg-green-500 px-4 py-2 rounded">
        Cart ({cart.length})
      </Link>
    </header>
  );
}