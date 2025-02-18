"use client";
import Link from "next/link";
import { useLinks } from "@/hooks/useLinks";

export default function BuilderHeader() {
  const links = useLinks();

  if (!links) return null; // Avoid hydration issues

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-4">
          {links?.navigation?.map((link: any, index: number) => (
            <li key={index}>
              <Link href={link.url} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}