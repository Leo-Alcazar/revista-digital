"use client";

import Header from "../components/Header";
import { useArticles } from "@/lib/hooks/useArticles";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  const { articles, loading, error } = useArticles();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto p-6 md:p-8">
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
          <div className="text-center py-20 font-sans text-gray-500">
            No hay artículos disponibles.
          </div>
        )}
      </main>
    </div>
  );
}
