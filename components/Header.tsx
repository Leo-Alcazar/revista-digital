export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-editorial-gray">
      <div className="max-w-7xl mx-auto py-8 flex flex-col items-center">
        <h1 className="font-serif text-5xl font-bold uppercase">Revista digital</h1>
        <p className="font-sans text-[10px] tracking-[0.3em] text-gray-500 mt-2">UN PASO MÁS COMO PROGRAMADOR</p>
        <nav className="mt-6">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="font-sans font-bold text-xs uppercase hover:text-gray-600 transition-colors">Creatividad</a>
            </li>
            <li>
              <a href="#" className="font-sans font-bold text-xs uppercase hover:text-gray-600 transition-colors">Innovación</a>
            </li>
            <li>
              <a href="#" className="font-sans font-bold text-xs uppercase hover:text-gray-600 transition-colors">Sociedad</a>
            </li>
            <li>
              <a href="#" className="font-sans font-bold text-xs uppercase hover:text-gray-600 transition-colors">Cultura</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
