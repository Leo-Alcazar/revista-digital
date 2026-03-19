"use client";

import { useParams } from "next/navigation";
import Header from "../../../components/Header";
import { useAuthor } from "@/lib/hooks/useAuthor";
import { useArticles } from "@/lib/hooks/useArticles";
import Link from "next/link";

export default function AuthorProfilePage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const decodedId = id ? decodeURIComponent(id) : "";

  const { author, loading: authorLoading, error: authorError } = useAuthor(decodedId);
  const { articles, loading: articlesLoading, error: articlesError } = useArticles({ authorId: decodedId });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        
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
          <div className="bg-editorial-gray p-12 mb-16 flex flex-col md:flex-row items-center gap-8 rounded-md">
            <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden bg-gray-300 relative">
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
            
            <div className="flex flex-col text-center md:text-left">
              <h1 className="font-serif text-4xl font-bold text-black">{author.name}</h1>
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
            <h2 className="font-serif text-3xl font-bold text-black mb-8 border-b border-editorial-gray pb-4">
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
              <div className="flex flex-col">
                {articles.map((article) => (
                  <Link href={`/article/${article.id}`} key={article.id}>
                    <article 
                      className="flex flex-col md:flex-row gap-8 mb-16 border-b border-editorial-gray pb-16 hover:opacity-80 transition-opacity cursor-pointer text-black"
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
                          {article.date}
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
