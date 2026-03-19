"use client";

import { useParams } from "next/navigation";
import Header from "../../../components/Header";
import { useArticles } from "@/lib/hooks/useArticles";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const decodedId = id ? decodeURIComponent(id) : "";

  const { articles, loading, error } = useArticles(decodedId);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <div className="mb-12 border-b border-editorial-gray pb-4">
          <h1 className="font-serif text-3xl font-bold text-black">
            Mostrando artículos en: {decodedId}
          </h1>
        </div>

        {loading && (
          <div className="text-center py-20 font-sans text-gray-500">
            Cargando contenido editorial...
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-20 font-sans text-red-500">
            Ocurrió un error al cargar los artículos.
          </div>
        )}

        {!loading && !error && articles.length > 0 && (
          <div className="mt-8">
            {articles.map((article) => (
              <Link href={`/article/${article.id}`} key={article.id}>
                <article 
                  className="flex flex-col md:flex-row gap-8 mb-16 border-b border-editorial-gray pb-16 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  {/* Lado izquierdo */}
                  <div className="flex-1 w-full bg-gray-100 aspect-video rounded-md overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={article.imageUrl || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Lado derecho */}
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="text-red-600 font-sans text-[10px] font-bold uppercase tracking-widest mb-2">
                      {article.category}
                    </span>
                    <h2 className="font-serif text-3xl font-bold leading-tight mb-4 text-black">
                      {article.title}
                    </h2>
                    <div className="text-gray-400 text-[11px] uppercase">
                      {article.date} {article.author && `| POR ${article.author}`}
                    </div>
                    <p className="font-sans text-gray-600 leading-relaxed mt-4">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-20 font-sans text-gray-500 text-lg">
            Aún no hay artículos publicados en la categoría {decodedId}
          </div>
        )}
      </main>
    </div>
  );
}
