"use client";

import { useParams } from "next/navigation";
import Header from "../../../components/Header";
import { useArticle } from "@/lib/hooks/useArticle";
import Link from "next/link";

export default function ArticlePage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const decodedId = id ? decodeURIComponent(id) : "";

  const { article, loading, error } = useArticle(decodedId);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {loading && (
        <div className="text-center py-20 font-sans text-gray-500">
          Cargando artículo...
        </div>
      )}

      {!loading && error && (
        <div className="text-center py-20 font-sans text-red-500">
          Ocurrió un error al cargar el artículo.
        </div>
      )}

      {!loading && !error && article && (
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Cabecera */}
          <div className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            {article.category}
          </div>
          
          {/* Título */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-black">
            {article.title}
          </h1>

          {/* Autor */}
          {article.authorId && (
            <div className="mb-6">
              <Link href={`/author/${article.authorId}`} className="font-sans text-sm font-bold uppercase text-black hover:underline">
                Por: {article.authorId}
              </Link>
            </div>
          )}
          
          {/* Metadatos */}
          <div className="text-gray-400 text-sm uppercase mb-12 border-b border-editorial-gray pb-6">
            {article.date}
          </div>
          
          {/* Imagen Principal */}
          <div className="w-full aspect-video mb-12 bg-gray-100 relative rounded-md overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={article.imageUrl || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Contenido */}
          <div className="font-sans text-lg md:text-xl leading-relaxed text-gray-800">
            {article.content ? (
              <p className="whitespace-pre-line">{article.content}</p>
            ) : (
              <p className="text-gray-500 italic">Este artículo no tiene contenido aún.</p>
            )}
          </div>
        </main>
      )}
    </div>
  );
}
