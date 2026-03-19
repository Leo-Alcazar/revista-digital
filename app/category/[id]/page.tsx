"use client";

import { useParams } from "next/navigation";
import Header from "../../../components/Header";
import { useArticles } from "@/lib/hooks/useArticles";
import ArticleCard from "../../../components/ArticleCard";

export default function CategoryPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const decodedId = id ? decodeURIComponent(id) : "";

  const { articles, loading, error } = useArticles({ categoryId: decodedId });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto p-6 md:p-8">
        <div className="mb-12 border-b border-editorial-gray pb-4">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-black">
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
              <ArticleCard key={article.id} article={article} />
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
