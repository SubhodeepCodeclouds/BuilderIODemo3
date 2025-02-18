"use client";
import Link from "next/link";
import { useLinks } from "@/hooks/useLinks";

export default function BuilderFooter() {
  const links = useLinks();

  if (!links) return null;

  return (
    <footer className="p-4 bg-gray-900 text-white text-center">
      <nav>
        <ul className="flex justify-center space-x-4">
          {links?.footer?.map((link: any, index: number) => (
            <li key={index}>
              <Link href={link.url} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
