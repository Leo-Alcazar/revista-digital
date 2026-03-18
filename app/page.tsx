import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        {/* Placeholder para Artículo Destacado */}
        <section className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Imagen Mockup */}
          <div className="flex-1 w-full bg-editorial-gray aspect-video rounded-md overflow-hidden flex items-center justify-center text-gray-400 font-sans">
            Imagen Placeholder (Aspect Video)
          </div>
          
          {/* Contenido del Artículo */}
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-orange-600 font-sans font-bold text-xs uppercase mb-2">Creatividad</span>
            <h2 className="font-serif text-3xl font-bold text-black mb-4">El arte de vivir despacio en un mundo acelerado</h2>
            <time className="text-gray-500 font-sans text-xs mb-4">17 de Marzo, 2026</time>
            <p className="text-gray-700 font-sans text-base leading-relaxed">
              En una época donde la prisa dicta nuestras rutinas, algunos deciden rebelarse tomando el camino más largo. Descubre cómo la lentitud está transformando nuestra manera de entender el éxito y el bienestar.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
