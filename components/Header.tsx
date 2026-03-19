"use client";

import Link from 'next/link';
import { useCategories } from '@/lib/hooks/useCategories';

export default function Header() {
  const { categories, loading, error } = useCategories();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-editorial-gray">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 flex flex-col items-center">
        <Link href="/">
          <h1 className="font-serif text-3xl md:text-5xl font-bold uppercase cursor-pointer text-black text-center">Revista digital</h1>
        </Link>
        <p className="font-sans text-[10px] tracking-[0.3em] text-gray-500 mt-2 text-center">UN PASO MÁS COMO PROGRAMADOR</p>
        <nav className="mt-6 w-full">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 min-h-[16px] items-center">
            {loading && <li className="text-xs text-gray-400 font-sans uppercase">Cargando...</li>}
            
            {!loading && error && <li className="text-xs text-red-400 font-sans uppercase">Error al cargar</li>}
            
            {!loading && !error && categories.map((category) => (
              <li key={category.id}>
                <Link 
                  href={`/category/${category.id}`} 
                  className="font-sans font-bold text-[10px] md:text-xs uppercase hover:text-gray-600 transition-colors text-black"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
