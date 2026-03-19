import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-editorial-gray">
      <div className="max-w-7xl mx-auto py-8 flex flex-col items-center">
        <Link href="/">
          <h1 className="font-serif text-5xl font-bold uppercase cursor-pointer text-black">Revista digital</h1>
        </Link>
        <p className="font-sans text-[10px] tracking-[0.3em] text-gray-500 mt-2">UN PASO MÁS COMO PROGRAMADOR</p>
        <nav className="mt-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/category/Creatividad" className="font-sans font-bold text-xs uppercase hover:text-gray-600 transition-colors text-black">Creatividad</Link>
            </li>
            <li>
              <Link href="/category/Innovación" className="font-sans font-bold text-xs uppercase hover:text-gray-600 transition-colors text-black">Innovación</Link>
            </li>
            <li>
              <Link href="/category/Sociedad" className="font-sans font-bold text-xs uppercase hover:text-gray-600 transition-colors text-black">Sociedad</Link>
            </li>
            <li>
              <Link href="/category/Cultura" className="font-sans font-bold text-xs uppercase hover:text-gray-600 transition-colors text-black">Cultura</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
