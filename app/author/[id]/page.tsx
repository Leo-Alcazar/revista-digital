"use client";

import { useParams } from "next/navigation";
import Header from "../../../components/Header";
import { useAuthor } from "@/lib/hooks/useAuthor";
import { useArticles } from "@/lib/hooks/useArticles";
import ArticleCard from "../../../components/ArticleCard";

export default function AuthorProfilePage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const decodedId = id ? decodeURIComponent(id) : "";

  const { author, loading: authorLoading, error: authorError } = useAuthor(decodedId);
  const { articles, loading: articlesLoading, error: articlesError } = useArticles({ authorId: decodedId });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto p-6 md:p-8">
        
        {authorLoading && (
          <div className="text-center py-20 font-sans text-gray-500">
            Cargando perfil del autor...
          </div>
        )}

        {!authorLoading && authorError && (
          <div className="text-center py-20 font-sans text-red-500">
            Ocurrió un error al cargar el autor.
          </div>
        )}

        {/* Cabecera del autor */}
        {!authorLoading && !authorError && author && (
          <div className="bg-editorial-gray p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center gap-8 rounded-md text-center md:text-left">
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full overflow-hidden bg-gray-300 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {author.avatarUrl ? (
                <img 
                  src={author.avatarUrl} 
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold text-3xl font-serif">
                  {author.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            
            <div className="flex flex-col">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-black">{author.name}</h1>
              {author.bio && (
                <p className="font-sans text-gray-600 max-w-2xl mt-4 leading-relaxed">
                  {author.bio}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Artículos publicados */}
        {!authorLoading && !authorError && author && (
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-8 border-b border-editorial-gray pb-4">
              Artículos publicados
            </h2>

            {articlesLoading && (
              <div className="text-center py-10 font-sans text-gray-500">
                Cargando artículos...
              </div>
            )}

            {!articlesLoading && articlesError && (
              <div className="text-center py-10 font-sans text-red-500">
                Ocurrió un error al cargar los artículos del autor.
              </div>
            )}

            {!articlesLoading && !articlesError && articles.length > 0 && (
              <div className="flex flex-col mt-8">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}

            {!articlesLoading && !articlesError && articles.length === 0 && (
              <div className="text-center py-10 font-sans text-gray-500">
                Este autor no tiene artículos publicados por ahora.
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
